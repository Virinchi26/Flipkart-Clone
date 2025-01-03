import React from "react";
import {
  Box,
  InputBase,
  styled,
  List,
  ListItemButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";

import { Link } from "react-router-dom";

const SearchContainer = styled(Box)`
  background-color: #f2f2f2;
  width: 38%;
  border-radius: 2px;
  margin-left: 10px;
  display: flex;
`;

const SearchInput = styled(InputBase)`
  padding-left: 10px;
  width: 100%;
  font-size: unset;
`;

const SearchIconWrapper = styled(Box)`
  color: blue;
  padding: 5px;
  display: flex;
`;

const ListWrapper = styled(List)`
  position: absolute;
  background-color: #ffffff;
  color: #000;
  margin-top: 36px;
`;

const Search = () => {
  const [text, setText] = useState("");

  const { products } = useSelector((state) => state.getProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const getText = (text) => {
    setText(text);
  };

  return (
    <SearchContainer>
      <SearchInput
        placeholder="Search for products, brands and more "
        onChange={(e) => getText(e.target.value)}
        value={text}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      {text && (
        <ListWrapper>
          {products.filter((product) =>product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map((product) => (  
            <ListItemButton>
              <Link  to={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}
              onClick={() => setText("")}
              >
              {product.title.longTitle}
              </Link>
              </ListItemButton>
            ))}
        </ListWrapper>
      )}
    </SearchContainer>
  );
};

export default Search;
