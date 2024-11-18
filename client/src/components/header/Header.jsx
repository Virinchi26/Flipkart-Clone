import React from "react";
import { AppBar, Toolbar, styled, Box, Typography } from "@mui/material";
import Search from "./Search";
import CustomButtons from "./CustomButtons";
import {Link} from 'react-router-dom';
const StyledHeader = styled(AppBar)`
  background-color: #2874f0;
  height: 55px;
`;
const Component = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  text-decoration: none;
  color: inherit;
`;

const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
  `;

const PlusImage = styled('img')({
  width : 10,
  height: 10,
  marginLeft: 4

})

const CustomButtonWrapper = styled(Box)`
margin: 0 5% 0 auto;
`

function Header() {
  const logoURL ="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
    const subURL ="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";


  return (
    <>
      <StyledHeader>
        <Toolbar style={{minHeight: 55}}>
          <Component to='/'>
            <img src={logoURL} alt="Flipkart" style={{ width: 75 }} />
            <Box style={{display: 'flex'}}>
              <SubHeading>Explore 
                <Box component="span" style={{color: '#FFE500'}} >Plus</Box>
                {/* You can' make Typography component as span component so we use box   */}
                </SubHeading>
                <PlusImage src={subURL} alt="sub-logo" />
            </Box>
          </Component>
          <Search />
          <CustomButtonWrapper>
            <CustomButtons />
          </CustomButtonWrapper>
        </Toolbar>
      </StyledHeader>
    </>
  );
}

export default Header;
