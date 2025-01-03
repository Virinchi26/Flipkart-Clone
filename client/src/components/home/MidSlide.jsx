import React from "react";
import { Box, styled } from "@mui/material";
import Slide from "./Slide";

const Component = styled(Box)`
    display: flex;
    width: 100%;
    overflow: hidden'
    `
const LeftComponent = styled(Box)(({theme}) => ({
    width: '83%',
    boxSizing: 'border-box',
    [theme.breakpoints.down('md')]: {
        width: '100%',
    }
    }))
const RightComponent = styled(Box)(({theme}) => ({
    backgroundColor: '#ffffff',
    padding: 5,
    marginTop: 10,
    marginLeft: 10,
    width: '17%',
    textAlign: 'center',
    boxSizing: 'border-box',
    [theme.breakpoints.down('md')]: {
        display: 'none',
    }
    }))

const MidSlide = ({ products, title, timer }) => {
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";

  return (
    <Component>
      <LeftComponent>
        <Slide products={products} title={title} timer={timer} />
      </LeftComponent>
      <RightComponent>
        <img src={adURL} alt="Ad" style={{ width: 217 }} />
      </RightComponent>
    </Component>
  );
};

export default MidSlide;
