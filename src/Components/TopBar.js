import styled from "styled-components";
import Logo from "./Logo";
import Navbar from "./Navbar";

function TopBar() {
  return (
    <DivTop>
      <TopContainer>
        <Logo />
        <Navbar />
      </TopContainer>
    </DivTop>
  );
}
const DivTop = styled.div`
  width: 100%;
  background: white;
  top: 0;
  position: sticky;
  z-index: 5;
`;
const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 2rem 10%;
`;

export default TopBar;
