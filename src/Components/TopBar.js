import styled from "styled-components";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Search from "./Search";

function TopBar() {
  return (
    <TopContainer>
      <Logo />
      <Search />
      <Navbar />
    </TopContainer>
  );
}
const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* top: 0;
  position: sticky; */
`;

export default TopBar;
