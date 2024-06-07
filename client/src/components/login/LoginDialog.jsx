import React from "react";
import {
  Box,
  Dialog,
  TextField,
  Typography,
  Button,
  styled,
} from "@mui/material";

//import Usecontext
import { useState, useContext } from "react";

import { DataContext } from "../../context/DataProvider";

import { authenticateSignup, authenticateLogin } from "../../service/api";

const Component = styled(Box)`
  height: 80vh;
  width: 100vh;
`;

const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    no-repeat center 85%;
  height: 83.8%;
  width: 28%;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: white;
    font-weight: 600;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;
const LoginButton = styled(Button)`
  text-transform: none;
  background-color: #fb641b;
  color: white;
  height: 48px;
  border-radius: 2px;
`;
const RequestOTP = styled(Button)`
  text-transform: none;
  background-color: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;

const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;

const Error = styled(Typography)`
font-size:10px;
color: #ff6161;
line-height: 0;
margin-top: 10px;
font-weight: 600;
`


const accountInitialValues = {
  login:{
    view: 'login',
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup:{
    view: 'signup',
    heading: "Looks like you're new here!", 
    subHeading: "Sign up with your mobile number to get started",
  }
};

const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const loginInitialValues = {
  username: "",
  password: "",
};


const LoginDialog = ({ open, setOpen }) => {


  const [account, toggleAccount] = useState(accountInitialValues.login);

  const [signup, setSignup] = useState(signupInitialValues);
  const [login, setLogin] = useState(loginInitialValues);

  const [error, setError] = useState(false);


  //using context api here
  const {setAccount} = useContext(DataContext);

  const toggleSignUp = () => {
    toggleAccount(accountInitialValues.signup);
  }

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
    setError(false);
  };

  const onInputChange = (e) => {
    // console.log(e.target.value);
    setSignup({ ...signup, [e.target.name]: e.target.value });
  }

  const signupUser = async () => {
    // since autheticateSignup is an async function, we need to use await
    let response = await authenticateSignup(signup);
    if(!response) return;

    handleClose();

    //context api
    setAccount(signup.firstname);
  }

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  }

  const loginUser = async () => {
    let response = await authenticateLogin(login);
    console.log(response);
    if(!response) return;
    if(response.status === 200){
      handleClose();
      setAccount(response.data.data.firstname);
    } else{
      setError(true);

    }
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>
              {" "}
              {account.subHeading}
            </Typography>
          </Image>
          {account.view === "login" ? (
            <Wrapper>
              <TextField variant="standard" onChange={(e) => onValueChange(e)} name="username" label="Enter Username"/>
              
              { error &&<Error>Please enter valid username or password</Error> }
              
              <TextField variant="standard" onChange={(e) => onValueChange(e)} name="password" label="Enter Password"/>
              
              <Text>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy{" "}
              </Text>
              
              <LoginButton variant="contained" onClick={()=> loginUser() } >Login</LoginButton>
              
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              
              <RequestOTP variant="contained">Request OTP</RequestOTP>
              
              <CreateAccount onClick={() => toggleSignUp()}>
                New to Flipkart? Create an account
              </CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="firstname"
                label="Enter First Name"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="lastname"
                label="Enter Last Name"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="username"
                label="Enter Username"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="email"
                label="Enter Email"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="password"
                label="Enter Password"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="phone"
                label="Enter Phone"
              />
              <LoginButton variant="contained" onClick={() => signupUser()}>
                Continue
              </LoginButton>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
}

export default LoginDialog;
