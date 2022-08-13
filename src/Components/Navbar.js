import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { GrCart } from "react-icons/gr";
import { VscAccount } from "react-icons/vsc";
import { useContext } from "react";
import { CartContext } from "../CartContext";

function Navbar() {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      <Navigation>
        <CLink to={"/account"}>
          <VscAccount />
        </CLink>
        <CLink to={"/checkoutpage"}>
          <GrCart />
          <span>{cartItems.length === 0 ? "" : cartItems.length}</span>
        </CLink>
      </Navigation>
    </div>
  );
}
const Navigation = styled.div`
  margin-left: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  color: black;
  text-decoration: none;
  svg {
    height: 3rem;
    width: 3rem;
  }
  span {
    background-color: #e76d15;
    color: white;
    height: 1rem;
    width: 1rem;

    border-radius: 50%;
    vertical-align: super;
    display: flex;
    justify-content: center;
  }
`;
export default Navbar;
