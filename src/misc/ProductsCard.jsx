import React, { useState } from "react";
import { Box, Divider, Flex, Image, Tag, TagLabel, Text } from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";




const ProductsCard = ({ days, delivery, id, image, price, title ,stock, goTo}) => {

  const [heart, setHeart] = useState(false);

  const navigate=useNavigate();

  return (
    <Box
      position="relative"
      h={{ base: "258px", md: "313px", xl: "354px" }}
      w={{ base: "auto", md: "auto", xl: "auto" }}
      border="1px solid #e9e9e9"
      borderRadius="5px"
      key={id}

      onClick={(e)=>navigate(`/${goTo}/${id}`)}
    >
      <Flex
        position="absolute"
        h="40px"
        w="40px"
        right="6%"
        top="3%"
        bg="white"
        borderRadius="full"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          h="18px"
          w="18px"
          src={
            !heart
              ? "https://img.icons8.com/fluency-systems-regular/2x/like.png"
              : "https://img.icons8.com/tiny-color/2x/like.png"
          }
          onClick={() => setHeart(!heart)}
        />
      </Flex>
     
      <Image
        w="100%"
        borderTopLeftRadius="5px"
        borderTopRightRadius="5px"
        h={{ xl: "260px", md: "231px", base: "177px" }}
        src={image}
      />
      
      <Box
        w={{ base: "179px", md: "234px", xl: "262.5px" }}
        whiteSpace="nowrap"
        p={{ base: "10px", md: "12px", xl: "14px" }}
        fontSize={{ base: "12px", md: "12px", xl: "14px" }}
        overflow="hidden"
        textOverflow="ellipsis"
      >
        {title}
      </Box>
      <Divider w="90%" m="-4px auto 0" />
      <Flex
        p="14px"
        justifyContent="space-between"
        fontSize={{ base: "12px", md: "12px", xl: "14px" }}
      >
        <Text>&#8377;{price}/mo</Text>
        <Text display="flex" justifyContent="center" alignItems="center">
          <Image src={delivery} mr="4px" /> {days ? days : "Fast Delivery Assured"}
        </Text>
      </Flex>
      
    </Box>
  );
};

export default ProductsCard;
