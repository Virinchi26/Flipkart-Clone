import React from "react";
import { Box, Button, styled } from "@mui/material";
import {ShoppingCart as Cart, FlashOn as Flash} from '@mui/icons-material';

const LeftContainer = styled(Box)(({theme}) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('lg')]: {
        padding: '20px 0 0 40px',
    }

}));

const Image = styled('img')({
  width: '93%',
  padding: '15px'
});

const StyledButton = styled(Button)(({theme}) => ({
    width: '48%',
    height: 50,
    borderRadius: 2,
    marginTop: 20,
    [theme.breakpoints.down('lg')]: {
      width: '45%',
      marginTop: 20,
    },
    [theme.breakpoints.down('sm')]: {
      width: '48%',
      marginTop: 20,
    }
  }));

const ActionItem =({product}) =>{
    return (
      <LeftContainer>
        <Box
          style={{
            padding: "15px 20px",
            border: "1px solid #f0f0f0",
            width: "90%",
          }}
        >
          <Image src={product.detailUrl} alt="product" />
        </Box>
        <StyledButton
          variant="contained"
          style={{ marginRight: 10, background: "#ff9f00" }}
        >
          <Cart /> Add to Cart
        </StyledButton>
        <StyledButton
          variant="contained"
          style={{ background: "#fb541b"}}
        >
          <Flash /> Buy Now
        </StyledButton>
      </LeftContainer>
    );

}

export default ActionItem;