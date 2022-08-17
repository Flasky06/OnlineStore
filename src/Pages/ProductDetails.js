// import axios from "axios";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { CartContext } from "../CartContext";
import { FaStarHalf, FaStar } from "react-icons/fa";

function ProductDetails() {
  const { HandleAddProduct } = useContext(CartContext);
  let { productId } = useParams();
  const [details, setDetails] = useState([]);

  const fetchDetails = () => {
    axios.get(`https://fakestoreapi.com/products/${productId}`).then((res) => {
      console.log(res.data);
      setDetails(res.data);
    });
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <DetailPage>
      <Card>
        <ImageCard>
          <img src={details.image} alt={details.title} />
        </ImageCard>

        <Wrapper>
          <h2>{details.title}</h2>
          <h4>category : {details.category}</h4>
          <p>
            ratings :<FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalf />
          </p>
          <hr />
          <h1>Ksh {details.price}</h1>
          <button onClick={() => HandleAddProduct(details)}>ADD To CART</button>
        </Wrapper>
      </Card>

      <DescriptionCard>
        <h3>PRODUCT DETAILS</h3>
        <p> {details.description}</p>
      </DescriptionCard>
    </DetailPage>
  );
}
const DetailPage = styled.div`
  margin: 0% 10%;
  display: flex;
  flex-direction: column;
`;
const Card = styled.div`
  display: flex;
  justify-content: space-around;
`;
const ImageCard = styled.div`
  width: 300px;
  height: 300px;
  img {
    width: 300px;
    height: 300px;
  }
`;
const Wrapper = styled.div`
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    display: flex;
    justify-content: center;
  }
  p {
    display: flex;
    align-content: center;
    svg {
      color: #e76d15;
    }
  }
  button {
    color: white;
    background-color: #e76d15;
    font-size: 1.3rem;
  }
  hr {
    margin: 1rem 5%;
    color: gray;
  }
`;
const DescriptionCard = styled.div`
  margin: 10%;
  p {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.2rem;
  }
`;

export default ProductDetails;
