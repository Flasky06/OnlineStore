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
`;
export default Home;
