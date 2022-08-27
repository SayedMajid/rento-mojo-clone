import React, { useEffect, useState } from "react";
import { Stack, Image, Select, Input, Text, Flex, Box } from "@chakra-ui/react";
import "./navbar.css";
import rentomojologo from "../Components/Icons/rentomojologo.png";
import rmlogosmall from "../Components/Icons/rmlogosmall.png";
import { BsSearch, BsCart3 } from "react-icons/bs";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Login from "./Login";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart";
import { getCartData } from "../Redux/App/actions";

const Navbar = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [ApiData, setApiData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const dispatch = useDispatch();
  const Cart = useSelector(store => store.App.cart)

  useEffect(() => {
    axios.get(`http://localhost:8080/product`).then((r) => {
      setApiData(r.data);
    });

    dispatch(getCartData())

  }, [searchInput, getCartData]);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    const filterdata = ApiData.filter((item) => {
      return Object.values(item)
        .join("")
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });
    setFilteredResults(filterdata);
  };
  // console.log(searchInput);
  console.log(filteredResults);

  return (
    <Flex
      justifyContent={{
        xl: "space-between",
        md: "space-between",
        base: "flex-start",
      }}
      alignItems="center"
      p="10px"
      width="100%"
      gap="10px"
      background="white"
      zIndex="9"
      pl={{ base: "5%", md: "", xl: "10%" }}
      pr={{ base: "5%", md: "", xl: "10%" }}
      position="sticky"
      top="0"
      left="0"
      boxShadow=" 2px 2px 8px rgba(0,0,0,0.2)"
    >
      <Image
        src={rentomojologo}
        alt="errorloading logo"
        width={"190px"}
        height={"33px"}
        display={{ base: "none", md: "none", xl: "inline-flex" }}
        onClick={() => navigate(`/`)}
        cursor={"pointer"}
      />
      <Image
        src={rmlogosmall}
        alt="errorloading logo"
        width={"auto"}
        height={"33px"}
        display={{ base: "inline-flex", md: "inline-flex", xl: "none" }}
        onClick={() => navigate(`/`)}
        cursor={"pointer"}
      />

      <Select
        width={"180px"}
        display={{ base: "none", md: "none", lg: "inline-flex" }}
      >
        <option value="">Mumbai</option>
        <option value="">Pune</option>
        <option value="">Banglore</option>
        <option value="">Delhi</option>
      </Select>
      <Stack
        className="searchbar"
        direction={"row"}
        border={"1px solid rgba(0,0,0,0.2)"}
        padding={{ xl: "0 15px", md: "0 15px", base: "10px 10px" }}
        alignItems={{ xl: "center", md: "center", base: "center" }}
        // alignItems="center"
        borderRadius={"10px"}
        h={{ xl: "", md: "", base: "auto" }}
        display={{ base: "inline", md: "inline-flex", xl: "inline" }}
      >
        <Input
          variant={"unstyled"}
          placeholder="Search for products"
          htmlSize={50}
          onChange={(e) => searchItems(e.target.value)}
          p={{ xl: "10px", md: "10px", base: "0px" }}
          // display={{base:"none"}}
        />

        {/* <BsSearch cursor={"pointer"} /> */}
        {filteredResults.length > 0 && (
          <Box
            className="abc"
            display={searchInput.length === 0 ? "none" : "inline"}
          >
            {filteredResults.map((item) => {
              return (
                <div className="searchmap">
                  <div style={{ width: "30px", height: "30px" }}>
                    <img src={item.image} style={{ width: "100%" }}></img>
                  </div>
                  {/* <a href={`/${item.category}/${item.title}/${item.id}`}>
                <p>{item.title}</p>
              </a> */}
                  <p>{item.title}</p>
                </div>
              );
            })}
          </Box>
        )}
      </Stack>
      {/* Cart section color #1dbdc0 */}
      <Stack
        direction={"row"}
        alignItems="center"
        marginRight={{ xl: 16, md: 16, base: 2 }}
        cursor={"pointer"}
        onClick={() => navigate(`/cart`)}
        border="1px solid red"
        h="50px"
        w={{ xl: "80px", md: "40px", base: "80px" }}
        position="relative"
      >
        <Flex
          position="absolute"
          borderRadius="full"
          top="4%"
          right="4%"
          backgroundColor="#1dbdc0"
          h={{ xl: "20px", md: "16px", base: "14px" }}
          w={{ xl: "20px", md: "16px", base: "14px" }}
          alignItems="center"
          justifyContent="center"
          // display={cartData.length === 0 ? "none" : "inline"}
        >
          <Text fontSize="10px" color="white" textAlign="center">
            {Cart.length}
          </Text>
        </Flex>
        <BsCart3 />
        <Text display={{ base: "none", md: "none", lg: "inline-flex" }}>
          Cart
        </Text>
      </Stack>
      <Login />
    </Flex>
  );
};

export default Navbar;

const Button = styled.button`
  border-radius: 10px;
  padding: 0.25em 1em;
  font-size: 13px;
  color: white;
  border: 2px solid #de4034;
  background-color: #de4034;

  &:hover {
    color: tomato;
    padding: 0.25em 1em;
    border: 2px solid #de4034;
    border-radius: 10px;
    background-color: white;
  }
`;
