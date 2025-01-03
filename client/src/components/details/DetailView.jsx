import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom"; // to get the id from the url

import { getProductDetails } from "../../redux/actions/productActions";

import { Box, Typography,Grid, styled } from "@mui/material";

import ActionItem from "./ActionItem";


const Component = styled(Box)`
    background: #F2F2F2;
    margin-top: 55px;
`;

const Container = styled(Grid)`
    background: #FFFFFF;
    display: flex;

`;

const RightContainer = styled(Grid)`
    margin-top: 50px;
`;

const DetailView = () => {
  const dispatch = useDispatch();
  const { id } = useParams(); // id is the key in the url which I have passed in the App.js "/product/:id"

  const { loading, product } = useSelector((state) => state.getProductDetails);

  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";


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
            <Typography>{product.title.longTitle}</Typography>
            <Typography
              style={{ marginTop: 5, color: "#878787", fontSize: 14 }}
            >
              8 Ratings & 1 Reviews
              <Box component="span">
                <img src={fassured} style={{ width: 77, marginLeft: 20 }} />
              </Box>
            </Typography>
            <Typography>
              <Box component="span" style={{ fontSize: 28 }}>
                ₹{product.price.cost}
              </Box>
              &nbsp;
              <Box component="span" style={{ color: "#878787" }}>
                <strike>{product.price.mrp}</strike>
              </Box>
              &nbsp;
              <Box component="span" style={{ color: "#388E3C" }}>
                {product.price.discount} off
              </Box>
            </Typography>
          </RightContainer>
        </Container>
      )}
    </Component>
  );
};

export default DetailView;
