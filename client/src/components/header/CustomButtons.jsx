import React from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import LoginDialog from "../login/LoginDialog";
import { useState } from "react";

// Button is button, Typography is p, Box is div
const Wrapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;
  & > button,
  & > p,
  & > div {
    margin-right: 40px;
    font-size: 16px;
    align-items: center;
  }
`;

const Container = styled(Box)`
  display: flex;
`;

const LoginButton = styled(Button)`
  background-color: #ffffff;
  color: #2874f0;
  text-transform: none;
  font-size: 12px;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height: 32px;
`;

function CustomButtons() {
  const [open, setOpen] = useState(false);

  const openDialog = () => {
    setOpen(true);
  };

  return (
    <Wrapper>
      <LoginButton variant="contained" onClick={() => openDialog()}>
        Login
      </LoginButton>
      <Typography style={{ marginTop: 3, width: 135 }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3 }}> More</Typography>
      <Container>
        <ShoppingCart />
        <Typography>Cart</Typography>
      </Container>
      {/* {open} is passed as a prop to LoginDialog.jsx */}
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
}

export default CustomButtons;
