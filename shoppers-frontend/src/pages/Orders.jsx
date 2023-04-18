import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Order from '../components/Order';

const Orders = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const userid = location.pathname.split("/")[2];
    const [orders, setOrders] = useState([]);
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        if (user === null) {
            navigate("/login");
        }
    }, [user, navigate])

    useEffect(() => {
        const getOrders = async () => {
            try {
                const headers = {
                    'token': `Bearer ${user?.accessToken}`
                }
                const response = await axios.get(`http://localhost:8000/api/orders/find/${userid}`, {
                    headers: headers
                });
                setOrders(response.data);

            } catch (error) {
                console.log(error);
            }
        }
        getOrders()
    }, [userid]);
    console.log(orders)
    return (
        <Container>
            <Text>My Orders</Text>
            <OrdersContainer>
                {orders?.length > 0 ? orders.map((order) => (
                    <Order order={order} key={order._id} />
                )) : <NoOrder>No orders</NoOrder>}
            </OrdersContainer>
        </Container>
    )
}

export default Orders

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 90vh;
`;
const NoOrder = styled.h1``;
const Text = styled.h1``;
const OrdersContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 40px;
`;