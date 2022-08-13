import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../CartContext";

function CartSummary() {
  const { subtotal } = useContext(CartContext);
  return (
    <Summary>
      <h3>Cart Summary</h3>
      <p>subtotal ksh {subtotal}</p>
      <button>Checkout </button>
    </Summary>
  );
}
const Summary = styled.div`
  position: sticky;
  top: 10rem;
  width: 30%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  h3 {
  }
  button {
    width: 80%;
    height: 2rem;
    background-color: #e76d15;
    color: white;
    font-size: 1rem;
    border-radius: 1rem;

    :hover {
      border-radius: 1rem;
      /* transform: translateY(1px) translateX(1px) translateZ(1px); */
      transform: scale(1.2);
      z-index: 1;

      font-size: 1rem;
    }
  }
`;
export default CartSummary;
