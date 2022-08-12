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
          <h6>Account</h6>
        </CLink>
        <CLink to={"/checkoutpage"}>
          <GrCart />
          <h6>{cartItems.length}</h6>
        </CLink>
      </Navigation>
    </div>
  );
}
const Navigation = styled.div`
  display: flex;
  width: 30%;
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
`;
export default Navbar;
