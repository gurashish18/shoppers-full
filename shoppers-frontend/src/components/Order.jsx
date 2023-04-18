import React from 'react'
import styled from 'styled-components'

const Order = ({ order }) => {
    return (
        <Container>
            <ContentInfo>
                <OrderId>Order Id: {order._id}</OrderId>
                <Address>Adress: {order.address.address?.line1}, {order.address.address?.city}
                    , {order.address.address?.state}, {order.address.address?.country}, {order.address.address?.postal_code}</Address>
                <OrderAmount>Order total: ${Math.round(order?.amount / 80)}</OrderAmount>
                <ProductsContainer>
                    {
                        order.products.map((product) => (
                            <Product key={product.id}>
                                <ProductDesc>Item: {product?.description}</ProductDesc>
                                <ProductQuantity>Quantity: {product?.quantity}</ProductQuantity>
                                <ProductAmount>Price: ${Math.round(product?.amount_subtotal / 80)}</ProductAmount>
                            </Product>
                        ))
                    }
                </ProductsContainer>
            </ContentInfo>
            <OrderInfo>
                <PaymentStatus>Payment: <span style={{ color: "#198754", fontWeight: 600 }}>{order.payment_status}</span></PaymentStatus>
                <OrderStatus>Order Status: <span style={{ color: "#FF9494", fontWeight: 600 }}>{order.status}</span></OrderStatus>
            </OrderInfo>
        </Container>
    )
}

export default Order

const Container = styled.div`
    display: flex;
    margin: 40px 0px;
    min-width: 40vw;
    align-items: flex-start;
    justify-content: space-between;
    border: 1px solid lightgray;
	border-radius: 10px;
    padding: 20px;
`;
const ContentInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
const OrderId = styled.p``;
const Address = styled.p``;
const OrderAmount = styled.p``;
const ProductsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
const Product = styled.div`
display: flex;
flex-direction: column;
    border: 1px solid lightgray;
	border-radius: 10px;
    padding: 20px;
`;
const ProductDesc = styled.p``;
const ProductQuantity = styled.p``;
const ProductAmount = styled.p``;
const OrderInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
const PaymentStatus = styled.p``;
const OrderStatus = styled.p``;