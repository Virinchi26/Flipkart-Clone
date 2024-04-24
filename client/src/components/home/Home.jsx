import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner';

import {Box, styled} from "@mui/material";

const Component = styled(Box)`

    padding: 10px;
    background-color: #f2f2f2;
`


function Home() {
  return (
    <>
      <Navbar />
      <Component>
      <Banner />
        
      </Component>
    </>
  );
}

export default Home