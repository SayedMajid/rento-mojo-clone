import React, { useEffect, useState } from "react";
import { Stack, Image, Select, Input, Text, Flex } from "@chakra-ui/react";
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

const Navbar = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data.length === 0) {
      axios.get("http://localhost:8080/cart").then((res) => setData(res.data));
    }
  }, []);

  console.log(data)

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      p="10px"
      width="100%"
      gap="10px"
      background="white"
      zIndex="1"
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
        direction={"row"}
        border={"1px solid rgba(0,0,0,0.2)"}
        padding={"0px 15px"}
        alignItems="center"
        borderRadius={"10px"}
        display={{ base: "none", md: "inline-flex" }}
      >
        <Input
          variant={"unstyled"}
          placeholder="Search for products"
          htmlSize={50}
          p="10px"
        />
        <BsSearch cursor={"pointer"} />
      </Stack>
      <Stack
        direction={"row"}
        alignItems="center"
        marginRight={20}
        cursor={"pointer"}
        onClick={() => navigate(`/cart`)}
      >
        <BsCart3 />
        <Text display={{ base: "inline-flex", md: "none", lg: "inline-flex" }}>
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
