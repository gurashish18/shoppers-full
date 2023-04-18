const express = require("express");
const router = express.Router();
const stripe = require("stripe")(
  "sk_test_51LNs61SAr4qzbcBddAmWJCNoDEzJwsGilvnsjGxARgla57LRNlVgw0I4bz2vXBLr4Kv3ypHJ8o3o185JJOZMCAqX00vc0FF9lY"
);
const Order = require("../models/Order.js");

router.post("/create-checkout-session", async (req, res) => {
  const customer = await stripe.customers.create({
    metadata: {
      userId: req.body.userId.toString(),
    },
  });

  const line_items = req.body.products.map((item) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.title,
          images: [item.img],
          description: item.desc,
          metadata: {
            id: item._id,
          },
        },
        unit_amount: Math.round((item.price * 100) / 80),
      },
      quantity: item.quantity,
    };
  });
  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    customer: customer.id,
    success_url: `http://localhost:3000/success`,
    cancel_url: `http://localhost:3000/cart`,
  });

  res.send({ url: session.url });
});

// Create order function

const createOrder = async (customer, data, lineItems) => {
  const newOrder = new Order({
    userId: customer.metadata.userId,
    customerId: data.customer,
    paymentIntentId: data.payment_intent,
    products: lineItems.data,
    amount: data.amount_subtotal,
    address: data.customer_details,
    payment_status: data.payment_status,
  });

  try {
    const savedOrder = await newOrder.save();
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }
};

const endpointSecret =
  "whsec_f7bca7a583c6ccc786245edf80ad0b7d19d7d6c8cf008c9396898cceca495e88";

router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  (request, response) => {
    const payload = request.body;
    const payloadString = JSON.stringify(payload, null, 2);
    const header = stripe.webhooks.generateTestHeaderString({
      payload: payloadString,
      secret:
        "whsec_f7bca7a583c6ccc786245edf80ad0b7d19d7d6c8cf008c9396898cceca495e88",
    });
    let data;
    let eventType;
    const sig = request.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        payloadString,
        header,
        "whsec_f7bca7a583c6ccc786245edf80ad0b7d19d7d6c8cf008c9396898cceca495e88"
      );
    } catch (err) {
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    data = event.data.object;
    eventType = event.type;

    if (eventType === "checkout.session.completed") {
      stripe.customers
        .retrieve(data.customer)
        .then(async (customer) => {
          try {
            stripe.checkout.sessions.listLineItems(
              data.id,
              {},
              function (err, lineItems) {
                createOrder(customer, data, lineItems);
              }
            );
          } catch (err) {
            response.status(400).send(`Webhook Error: ${err.message}`);
            return;
          }
        })
        .catch((err) => {
          response.status(400).send(`Webhook Error: ${err.message}`);
          return;
        });
    }

    // Return a 200 response to acknowledge receipt of the event
    response.send().end();
  }
);

module.exports = router;
