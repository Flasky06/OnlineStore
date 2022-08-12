import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import styled from "styled-components";
function Checkout() {
  const { cartItems, HandleAddProduct, handleReduceProduct, handleClearCart } =
    useContext(CartContext);

  return (
    <CheckoutPage>
      <div>
        <h3>Cart Items</h3>
        <div>
          {cartItems.length >= 1 && (
            <div>
              <button onClick={handleClearCart}>Clear Cart Items</button>
            </div>
          )}
        </div>
      </div>
      {cartItems.length === 0 && <div>No items added to cart</div>}

      {cartItems.length !== 0 &&
        cartItems.map((item) => (
          <Card key={item.id}>
            <img src={item.image} alt={item.title} />

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

const Card = styled.div`
  background-color: gray;
  display: flex;
  height: 150px;
  width: 100%;
  margin-bottom: 1rem;
  padding: 1rem;
  img {
    height: 100px;
    width: auto;
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
  }
  p {
    display: flex;
    justify-content: center;
    margin: 1rem;
  }
`;

export default Checkout;
