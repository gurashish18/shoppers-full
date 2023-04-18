import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        cartquantity: 0,
        totalprice: 0,
    },
    reducers: {
        addProduct: (state, action) => {
                state.cartquantity += 1
                state.products.push(action.payload)
                state.totalprice += action.payload.price * action.payload.quantity
        },
        clearCart: (state, action) => {
            state.products = [];
            state.cartquantity = 0;
            state.totalprice = 0;
            toast.error("Cart cleared", { position: "bottom-left" });
        }
    },
});

export const { addProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
