import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Categories() {
  return (
    <CategoryLinks>
      <ul>
        <Slink to={"/category/electronics"}>electronics</Slink>
        <Slink to={"/category/jewelery"}>jewelery</Slink>
        <Slink to={"/category/men's clothing"}>men's clothing</Slink>
        <Slink to={"/category/women's clothing"}>women's clothing</Slink>
      </ul>
    </CategoryLinks>
  );
}
const CategoryLinks = styled.div`
  display: flex;
  justify-content: center;
  position: sticky;

  ul {
  }
`;
const Slink = styled(NavLink)`
  text-decoration: none;
  color: black;
  margin: 5rem;
  font-size: 1.3rem;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;

  :hover {
    background-color: gray;
    color: white;
    border-radius: 1rem;
    transform: translateY(1px) translateX(1px) translateZ(1px);
    transform: scale(2);
    z-index: 1;
  }
`;

export default Categories;
