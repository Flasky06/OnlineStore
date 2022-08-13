import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import styled from "styled-components";
import { FaTrash } from "react-icons/fa";
function Checkout() {
  const {
    cartItems,
    HandleAddProduct,
    handleReduceProduct,
    handleClearCart,
    handleRemoveItem,
  } = useContext(CartContext);

  return (
    <CheckoutPage>
      <CartTitle>
        <h3>Cart Items</h3>

        {cartItems.length >= 1 && (
          <CartBtn>
            <button onClick={handleClearCart}>
              <FaTrash />
              Clear Cart Items
            </button>
          </CartBtn>
        )}
      </CartTitle>
      {cartItems.length === 0 && <div>No items added to cart</div>}

      {cartItems.length !== 0 &&
        cartItems.map((item) => (
          <Card key={item.id}>
            <ImageCard>
              <img src={item.image} alt={item.title} />
              <button onClick={() => handleRemoveItem(item)}>
                <FaTrash /> Remove
              </button>
            </ImageCard>
            <CartContent>
              <p>{item.title}</p>
              <CartQuantity>
                <button
                  onClick={() => {
                    HandleAddProduct(item);
                  }}
                >
                  +
                </button>
                <p>{item.quantity}</p>
                <button
                  onClick={() => {
                    handleReduceProduct(item);
                  }}
                >
                  -
                </button>
              </CartQuantity>
              <p> Ksh {item.price}</p>
            </CartContent>
          </Card>
        ))}
    </CheckoutPage>
  );
}
const CheckoutPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0% 10%;
`;
const CartTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CartBtn = styled.div`
  button {
    border: none;
    font-size: 1rem;
    transition: 1.5s;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    svg {
      margin-right: 0.4rem;
      color: #e76d15;
    }
    :hover {
      border-radius: 1rem;
      transform: translateY(1px) translateX(1px) translateZ(1px);
      transform: scale(1.2);
      z-index: 1;
    }
  }
`;
const Card = styled.div`
  display: flex;
  height: 150px;
  width: 100%;
  margin-bottom: 1rem;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
`;
const ImageCard = styled.div`
  margin-right: 2rem;
  display: flex;
  flex-direction: column;
  img {
    height: 100px;
    width: auto;
    margin-bottom: 0.6rem;
  }
  button {
    border: none;
    color: #e76d15;
    border-radius: 1rem;
    display: flex;
    font-size: 1rem;
    svg {
      margin-right: 0.2rem;
    }
  }
`;
const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CartQuantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    height: 2rem;
    width: 2rem;
    background-color: #e76d15;
    color: white;
  }
  p {
    display: flex;
    justify-content: center;
    margin: 1rem;
  }
`;

export default Checkout;
