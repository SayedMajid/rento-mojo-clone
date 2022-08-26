import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

export default function ButtonSection() {
  return (
    <Box
      position={{ md: "fixed", base: "fixed" }}
      bottom={{ md: "0", base: "0" }}
      left={{ md: "0", base: "0" }}
      right={{ md: "0", base: "0" }}
      border="1px solid tomato"
      h="fit-content"
      display={{ xl: "none", md: "flex", base: "flex" }}
      justifyContent={{ md: "space-between", base: "space-between" }}
      alignItems={{ md: "center", base: "center" }}
      bg="white"
      w={{ md: "full", base: "100%" }}
      boxSizing="border-box"
      px="7%"
      zIndex="2"
    >
      <Text>Price of the Product</Text>
      <Button colorScheme="red">Book your plan</Button>
    </Box>
  );
}
