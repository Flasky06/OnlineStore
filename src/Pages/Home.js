import Product from "../Components/Product";
import styled from "styled-components";
import Categories from "../Components/Categories";

function Home() {
  return (
    <HomePage>
      <Categories />
      <Product />
    </HomePage>
  );
}
const HomePage = styled.div`
  margin: 0% 5%;
  position: relative;
  top: 0;
`;
export default Home;
