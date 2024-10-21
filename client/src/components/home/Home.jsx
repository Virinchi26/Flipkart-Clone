import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { useEffect } from "react";
import { Box, styled } from "@mui/material";
import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const Component = styled(Box)`
  padding: 10px;
  background-color: #f2f2f2;
`;

function Home() {

  const {products} = useSelector((state) => state.getProducts); // this will get the products from the state and store it in the variable products
  // the value of above products will be {products: [], loading: true} initially
  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts()); // this will dispatch the action to get the products from the server
  }, []);

  return (
    <>
      <Navbar />
      <Component>
        <Banner />
      </Component>
    </>
  );
}

export default Home;
