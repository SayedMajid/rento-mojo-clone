// Homepage Categories (Packages, furniture, appliances, electronics, fitness , wfh essentials)
// Author : Majid Sayyed
// Responsive : True ( Desktop, Tablet, Mobile )

import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom"

const Categories = () => {
  const data = [
    {
      img: "https://img.icons8.com/external-prettycons-lineal-prettycons/2x/external-package-delivery-prettycons-lineal-prettycons-2.png",
      title: "Packages",
    },
    {
      img: "https://img.icons8.com/external-flat-andi-nur-abdillah/2x/external-Bed-hotel-(outline)-flat-andi-nur-abdillah.png",
      title: "Furniture",
    },
    {
      img: "https://img.icons8.com/dotty/2x/washing-machine.png",
      title: "Appliances",
    },
    {
      img: "https://img.icons8.com/ios/2x/iphone13.png",
      title: "Electronics",
    },
    {
      img: "https://img.icons8.com/external-outline-design-circle/2x/external-treadmill-hotel-and-services-outline-design-circle.png",
      title: "Fitness",
    },
    {
      img: "https://img.icons8.com/ios/2x/pc-on-desk.png",
      title: "WfhEssentials",
    },
  ];

  const navigate = useNavigate();

  const handleClick = (name) => {
    navigate(`/${name}`, { replace : true })
  }

  return (
    <Box
      display={{ xl: "flex", md: "grid", base: "grid" }}
      gridTemplateColumns={{ base: "repeat(4,1fr)", md: "repeat(4,1fr)" }}
      gridGap={{ md: "20px", base: "20px" }}
      justifyContent="space-between"
      m="auto"
      p="20px 0"
      width={{ base: "100%", md: "100%", xl: "80%" }}
      h="fit-content"
    >
      {data.map((item) => (
        <Box
          key={item.title}
          display="flex"
          flexDirection="column"
          border="1px solid #d4e0e9"
          w={{ xl: "228.33px", md: "170px", base: "81px" }}
          h={{ xl: "127.19px", md: "107px", base: "101px" }}
          justifyContent="center"
          alignItems="center"
          borderRadius={{ xl: "10px", md: "8px", base: "6px" }}
          _hover={{ boxShadow: "0px 10px 10px #d4e0e9" }}
          transition="all 0.2s ease-in"
          onClick={() => handleClick(item.title)}
        >
          <Box
            h={{ base: "36px", md: "55px", xl: "55px" }}
            w={{ base: "36px", md: "55px", xl: "55px" }}
          >
            <Image h="100%" w="100%" src={item.img} alt={item.title} />
          </Box>
          <Text fontSize={{ base: "10px", md: "12px", xl: "14px" }} pt="7px">
            {item.title}
          </Text>
        </Box>
      ))}
    </Box>
  );
};

export default Categories;
