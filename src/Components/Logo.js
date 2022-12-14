import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { CgShoppingBag } from "react-icons/cg";

function Logo() {
  return (
    <Slink to={"/"}>
      <CgShoppingBag />
      <p> store</p>
    </Slink>
  );
}

const Slink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;

  svg {
    height: 3rem;
    width: 3rem;
    color: #e76d15;
  }
  p {
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    font-style: italic;
    font-weight: bold;
    font-size: 3rem;
  }
`;
export default Logo;
