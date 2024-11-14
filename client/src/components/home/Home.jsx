import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { useEffect } from "react";
import { Box, styled } from "@mui/material";
import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

const Component = styled(Box)`
  padding: 10px;
  background-color: #f2f2f2;
`;

function Home() {
  const { products } = useSelector((state) => state.getProducts); // this will get the products from the state and store it in the variable products
  // the value of above products will be {products: [], loading: true} initially
  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts()); // this will dispatch the action to get the products from the server
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Component>
        <Banner />
        <MidSlide products = {products} title="Deal of the Day" timer={true} />
        <MidSection />
        <Slide products = {products} title="Discounts for You" timer={false} />
        <Slide products = {products} title="Suggesting Items" timer={false} />
        <Slide products = {products} title="Top Selection" timer={false} />
        <Slide products = {products} title="Recommended Items" timer={false} />
        <Slide products = {products} title="Trending Offers"  timer={false}/>
        <Slide products = {products} title="Season's top picks" timer={false} />
        <Slide products = {products} title="Top Deals on Accessories" timer={false} />
      </Component>
    </>
  );
}

export default Home;
