import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { clearCart } from "../redux/cartRedux";
import { Link, useNavigate } from "react-router-dom";

const Success = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        if (user === null) {
            navigate("/login");
        }
    }, [user, navigate])
    useEffect(() => {

        dispatch(clearCart());
    }, [dispatch]);

    return (
        <Container>
            <h2>Checkout Successful</h2>
            <p>Your order might take some time to process.</p>
            <p>Check your order status at your profile after about 10mins.</p>
            <p>
                You can view your orders here
                <strong>
                    <Link to={`/orders/${user._id}`}>My Orders</Link></strong>
            </p>
        </Container>
    )
}

export default Success

const Container = styled.div`
  min-height: 80vh;
  max-width: 800px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    margin-bottom: 0.5rem;
    color: #029e02;
  }
`;