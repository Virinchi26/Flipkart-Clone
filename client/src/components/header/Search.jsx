import React from 'react';
import { Box, InputBase, styled } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";

const SearchContainer = styled(Box)`
background-color: #f2f2f2;
width: 38%;
border-radius: 2px;
margin-left: 10px;
display: flex;
`

const SearchInput = styled(InputBase)`
padding-left: 10px;
width: 100%;
font-size: unset;
`

const SearchIconWrapper = styled(SearchIcon)`
color: blue;
padding: 5px;

`


function Search() {
  return (
    <SearchContainer>
      <SearchInput placeholder='Search for products, brans and more ' />
      <Box>
        <SearchIconWrapper />
      </Box>
    </SearchContainer>
)
}

export default Search;