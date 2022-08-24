import React from "react";
import { Stack,Image,Select,Input,Text} from "@chakra-ui/react";
import rentomojologo from "../Components/Icons/rentomojologo.png";
import {BsSearch,BsCart3} from  "react-icons/bs";
import styled from "styled-components";



const Navbar = () => {
  return (
    <Stack alignItems={"center"} padding="10px" justifyContent={"space-between"} rowGap="20px">
      <Stack direction={"row"} gap={5}>
        <Image src={rentomojologo} alt="errorloading logo" width={"190px"} height={"33px"} />
        <Select width={"180px"} >
          <option value="">Mumbai</option>
          <option value="">Pune</option>
          <option value="">Banglore</option>
          <option value="">Delhi</option>
        </Select>
        <Stack direction={"row"} border={"1px solid rgba(0,0,0,0.2)"} padding={"0px 15px"} alignItems="center" borderRadius={"10px"}  >
        <Input variant={"unstyled"} placeholder='Search for products' htmlSize={50}/>
        <BsSearch/>
        </Stack>
        <Stack direction={"row"} alignItems="center" marginRight={20}>
        <BsCart3/>
        <Text>Cart</Text>
        </Stack>
        <Button>LOGIN/SIGNUP</Button>
      </Stack>
    </Stack>
  );
};

export default Navbar;



const Button = styled.button`
border-radius: 10px;
padding: 0.25em 1em;
font-size:13px;
color:white;
border: 2px solid #de4034 ;
background-color:#de4034 ;

&:hover{
  color: tomato;
  padding: 0.25em 1em;
  border: 2px solid #de4034 ;
  border-radius: 10px;
  background-color:white ;
}
  
`;
