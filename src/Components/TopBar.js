import styled from "styled-components";
import Logo from "./Logo";
import Navbar from "./Navbar";

function TopBar() {
  return (
    <TopContainer>
      <Logo />
      <Navbar />
    </TopContainer>
  );
}
const TopContainer = styled.div`
  top: 0;
  position: sticky;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  margin: 2rem 10%;
`;

export default TopBar;
