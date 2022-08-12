import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../CartContext";

function CartSummary() {
  const { subtotal } = useContext(CartContext);
  return (
    <Summary>
      <h3>Cart Summary</h3>
      <p>subtotal ksh {subtotal}</p>
      <button>Checkout (ksh {subtotal})</button>
    </Summary>
  );
}
const Summary = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;

  align-items: center;
  background-color: green;

  h3 {
  }
  button {
    width: 90%;
    height: 2rem;
    background-color: #e76d15;
  }
`;
export default CartSummary;
