import React from "react";
import { Stack, Image, Select, Input, Text } from "@chakra-ui/react";
import rentomojologo from "../Components/Icons/rentomojologo.png";
import rmlogosmall from "../Components/Icons/rmlogosmall.png";
import { BsSearch, BsCart3 } from "react-icons/bs";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";



const Navbar = () => {
  const navigate=useNavigate();
  return (
    <Stack
      alignItems={"center"}
      padding="10px"
      justifyContent={{lg:"space-between",md:"space-between",base:"space-between"}}
      position={"fixed"}
      width={"100%"}
      zIndex={"999"}
      top="0"
      background={"white"}
      boxShadow={"2px 2px 5px rgba(0,0,0,0.2)"}

    >
      <Stack direction={"row"} gap={{base:"8",md:"3",lg:"2"}} >
        <Image
          src={rentomojologo}
          alt="errorloading logo"
          width={"190px"}
          height={"33px"}
          display={{base:"none",md:"none",lg:"inline-flex"}}
          onClick={()=>navigate(`/`)}
          cursor={"pointer"}
        />
        <Image
          src={rmlogosmall}
          alt="errorloading logo"
          width={"auto"}
          height={"33px"}
          display={{base:"inline-flex",md:"inline-flex",lg:"none"}}
          onClick={()=>navigate(`/`)}
          cursor={"pointer"}
        />

        <Select width={"180px"} display={{base:"none",md:"none",lg:"inline-flex"}}>
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
          display={{base:"none",md:"inline-flex"}}
        >
          <Input
            variant={"unstyled"}
            placeholder="Search for products"
            htmlSize={50}
          />
          <BsSearch cursor={"pointer"}/>
        </Stack>
        <Stack direction={"row"} alignItems="center" marginRight={20} cursor={"pointer"} onClick={()=>navigate(`/cart`)}>
          <BsCart3  />
          <Text display={{base:"inline-flex",md:"none",lg:"inline-flex"}}>Cart</Text>
        </Stack>
        <Button cursor={"pointer"} onClick={()=>navigate(`/login`)}>LOGIN/SIGNUP</Button>
      </Stack>
    </Stack>
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