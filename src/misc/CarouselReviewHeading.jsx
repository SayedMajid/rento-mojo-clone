import { Box, Text } from "@chakra-ui/react";
import React from "react";

const CarouselReviewHeading = () => {
  return (
    <>
      <Box w="92%" m="auto">
        <Text fontSize={{ xl: "22px", md: "16px", base: "16px" }}>
          Over 1.5 lac <span style={underline}>happy</span> subscribers
        </Text>
        <Text display={{base:"none", md:"none" , xl:"inherit"}} fontSize='22px'>Here's what they have to say about their RentoMojo experience</Text>
        <br />
      </Box>
    </>
  );
};

export default CarouselReviewHeading;

const underline = {
  borderBottom: "3px solid #DC3226",
};
