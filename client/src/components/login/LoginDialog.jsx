import React from "react";
import { Box, Dialog, TextField, Typography, Button, styled } from "@mui/material";

const Component = styled(Box)`
height: 70vh;
width: 100vh;

`

const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) no-repeat center 85%;
  height: 100%;
  width: 40%;
  padding: 45px 35px;
  & >p, & > h5{
    color:white;
    font-weight:600;
  }
`;

const Wrapper = styled(Box)`
display:flex;
flex-direction:column;
padding: 25px 35px;
flex:1;
& > div, & > button, & > p{
    margin-top:20px;
    }
`
const LoginButton = styled(Button)`
text-transform:none;
background-color: #fb641b;
color: white;
height: 48px;
border-radius: 2px;
`
const RequestOTP = styled(Button)`
text-transform:none;
background-color: #fff;
color: #2874f0;
height: 48px;
border-radius: 2px;
box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`

const Text = styled(Typography)`
font-size: 12px;
color: #878787;
`

const CreateAccount = styled(Typography)`
font-size: 14px;
text-align: center;
color: #2874f0;
font-weight: 600;
cursor: pointer;
`

function LoginDialog({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          {/* left side */}
          <Image>
            <Typography variant="h5">Login</Typography>
            <Typography style={{ marginTop: 50 }}>
              Get access to your Orders, Wishlist and Recommendations
            </Typography>
          </Image>

          {/* right side */}
          <Wrapper>
            <TextField variant="standard" label="Enter Email/Mobile No." />
            <TextField variant="standard" label="Enter Password" />
            <Text>
              By continuing, you agree to Flipkart's Terms of Use and Privacy
              Policy{" "}
            </Text>
            <LoginButton variant="contained">Login</LoginButton>
            <Typography style={{ textAlign: "center" }}>OR</Typography>
            <RequestOTP variant="contained">Request OTP</RequestOTP>
            <CreateAccount>New to Flipkart? Create an account</CreateAccount>
          </Wrapper>
        </Box>
      </Component>
    </Dialog>
  );
}

export default LoginDialog;
