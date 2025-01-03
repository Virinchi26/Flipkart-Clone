import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom"; // to get the id from the url

import { getProductDetails } from "../../redux/actions/productActions";

import { Box, Typography,Grid, styled } from "@mui/material";

import ActionItem from "./ActionItem";

import ProductDetail from "./ProductDetail";


const Component = styled(Box)`
    background: #F2F2F2;
    margin-top: 55px;
`;

const Container = styled(Grid)(({ theme }) => ({
    background: '#FFFFFF',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      margin: '0px',
    },

}));

const RightContainer = styled(Grid)`
    margin-top: 50px;
    padding: 0 20px;
`;

const DetailView = () => {
  const dispatch = useDispatch();
  const { id } = useParams(); // id is the key in the url which I have passed in the App.js "/product/:id"

  const { loading, product } = useSelector((state) => state.getProductDetails);


  useEffect(() => {
    if (product && id !== product.id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, id, product, loading]);

  console.log(product);

  return (
    <Component>
      {product && Object.keys(product).length && (
        <Container container>
          {/* left side container  */}
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product} />
          </Grid>

          {/* right side container  */}
          <RightContainer item lg={8} md={4} sm={8} xs={12}>
            
            <ProductDetail product={product} />
          </RightContainer>
        </Container>
      )}
    </Component>
  );
};

export default DetailView;
