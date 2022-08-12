import React from "react";
import styled from "styled-components";
import CartSummary from "../Components/CartSummary";
import Checkout from "../Components/Checkout";

function CheckoutPage() {
  return (
    <CartPage>
      <Checkout />
      <CartSummary />
    </CartPage>
  );
}
const CartPage = styled.div`
  display: flex;
`;
export default CheckoutPage;
