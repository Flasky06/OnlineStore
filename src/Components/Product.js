import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../CartContext";
import { Link, NavLink } from "react-router-dom";

function Product() {
  const { Products, HandleAddProduct } = useContext(CartContext);

  return (
    <Container>
      {Products.map((item) => {
        return (
          <Card key={item.id}>
            <Slink to={/details/ + item.id}>
              <img src={item.image} alt={item.title} /> <p>{item.title}</p>
              <h4>Ksh {item.price}</h4>
            </Slink>
            <button
              onClick={() => {
                HandleAddProduct(item);
              }}
            >
              Add to Cart
            </button>
          </Card>
        );
      })}
    </Container>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  height: auto;
  width: 200px;
  overflow: hidden;
  margin-bottom: 1rem;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
  padding: 1rem;
  transition: 1s;

  img {
    height: 150px;
    width: 100%;

    object-fit: fill;
  }
  p {
    width: 100%;
    overflow: hidden;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  button {
    transition: 1.2s;
    border-radius: 1rem;
    color: white;
    background-color: #e76d15;
    :hover {
      width: 60%;
      transform: translateY(1px) translateX(1px) translateZ(1px);
      transform: scale(1.1);
      z-index: 1;
    }
  }
  :hover {
    transform: scale(1.1);
    z-index: 1;
  }
`;
const Slink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

export default Product;
