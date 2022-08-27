import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Button
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ButtonSection from "./ButtonSection";
import { addToCart, getElectronicsData } from "../Redux/App/actions";
import Slider from "../misc/ProductsPageslider";

const ElectronicsDetails = () => {
  const date = new Date().toLocaleDateString();
  const [sliderValue, setSliderValue] = useState(0);
  const dispatch = useDispatch();
  const { id } = useParams();
  const electronics = useSelector((store) => store.App.electronics);
  const [currentAppliance, setcurrentAppliannce] = useState({});

  useEffect(() => {
    dispatch(getElectronicsData());
  }, []);

  useEffect(() => {
    if (id) {
      const temp = electronics.find((item) => item.id === Number(id));
      temp && setcurrentAppliannce(temp);
    }
  }, [electronics, id, location]);

  const handleCart = (e) => {
    const cartparams = {
      title: currentAppliance.title,
      price: currentAppliance.price,
      image: currentAppliance.image,
      category: currentAppliance.category,
      deposit: `${Number(currentAppliance.price) + Number(150)}`,
    };
    dispatch(addToCart(cartparams));
  };

  return (
    <div>
      {" "}
      <Box className="App" position="relative">
        <ButtonSection price={currentAppliance.price} />
        <Box
          w={{ xl: "100%", md: "88%", base: "90%" }}
          h="auto"
          m="auto"
          p="2px"
          display="flex"
          flexDirection="column"
          position="relative"
        >
          {/* The Middle Section */}
          <Flex border="1px solid #e9e9e9" p="10px" position="relative">
            <Box
              w={{ xl: "full", md: "full", base: "full" }}
              border="1px solid #e9e9e9"
              display="flex"
              flexDirection="column"
            >
              <Box border="1px solid #e9e9e9">
                <Image
                  fit={"fill"}
                  height={{ base: "400px", md: "500px", xl: "600px" }}
                  width="100%"
                  src={currentAppliance.image}
                />
              </Box>
              <Box
                display={{ xl: "none", md: "inline", base: "inline" }}
                border="1px solid #e9e9e9"
              >
                {/* Slider for medium / small screen */}
                <Flex
                  border="1px solid #e9e9e9"
                  w="100%"
                  h="max-content"
                  flexDirection="column"
                  p="20px"
                  borderRadius="2px"
                  mb="16px"
                >
                  <Flex w="100%" flexDirection="column">
                    <Text mb="10px" fontSize={"18px"}>
                      {currentAppliance.title}
                    </Text>
                  </Flex>
                  <Text mb="10px" fontSize={"14px"}>
                    How long do you want to rent this for? (Months)
                  </Text>
                  <Box>
                    <Slider
                      sliderValue={sliderValue}
                      setSliderValue={setSliderValue}
                    />
                  </Box>
                </Flex>
              </Box>

              <Box border="1px solid #e9e9e9 ">
                {/* //product detail */}

                <Flex
                  border="1px solid #e9e9e9"
                  justifyContent={"space-between"}
                  p={"10px"}
                  fontSize={"20px"}
                  fontWeight={"bold"}
                >
                  <Flex display={{ base: "block", md: "block", xl: "none" }}>
                    <Text>&#8377;{currentAppliance.price}/mo</Text>
                    <Text fontSize="10px">Monthly Rent </Text>
                  </Flex>
                  <Flex display={{ base: "block", md: "block", xl: "none" }}>
                    <Text>
                      &#8377; {Number(currentAppliance.price) + 150}/mo
                    </Text>
                    <Text fontSize="10px">Refundable Deposit </Text>
                  </Flex>
                </Flex>

                {/* //details of product */}

                <Flex
                  border="2px solid  #e9e9e9"
                  justifyContent="center"
                  gap="20px"
                  alignItems="center"
                  p="20px"
                >
                  <Image
                    src="https://www.rentomojo.com/public/images/icons/virusSafetyGreen.png"
                    width="50px"
                  />
                  <Text width="50%" maxHeight="150px" overflow="clip">
                    Safety precautions during COVID-19. We’re taking additional
                    steps and precautionary measures to protect our community
                    from COVID-19.
                  </Text>
                  <Text>Know More...</Text>
                </Flex>

                <Flex p="10px">
                  <Text fontSize="20px" fontWeight="500">
                    Product Details
                  </Text>
                </Flex>
                <Flex>
                  <Flex width={{ base: "100%", md: "100%", xl: "60%" }}>
                    <Image
                      src={currentAppliance.image}
                      display={{ base: "none", md: "none", xl: "inline" }}
                    />
                  </Flex>
                  <Flex
                    direction="column"
                    p="25px"
                    width={{ base: "90%", md: "auto", xl: "auto" }}
                  >
                    <Text mb="10px" fontSize={"18px"} fontWeight="500">
                      {" "}
                      {currentAppliance.title}
                    </Text>
                    <Text mb="20px">
                      There’s always room for more applices with a{" "}
                      {currentAppliance.title}. Designed for the modern home and
                      smart brains, this {currentAppliance.category}{" "}
                      effortlessly reduces the cost of electricity. It reduces
                      your efforts and makes your life easy and entertaining.
                      With best-in-class features, corral your way to your
                      favorite work.
                    </Text>
                  </Flex>
                </Flex>
              </Box>
            </Box>
            <Box
              display={{ xl: "inline", md: "none", base: "none" }}
              position={{ xl: "sticky" }}
              top={{ xl: "0" }}
              border="2px solid #e9e9e9"
              h="550px"
              w="400px"
            >
              {/* //sidebar for largescreen */}
              <Flex
                w="100%"
                h="max-content"
                flexDirection="column"
                boxSizing="border-box"
                p="20px"
                borderRadius="2px"
                mb="16px"
              >
                <Flex
                  w="100%"
                  flexDirection="column"
                  boxSizing="border-box"
                  borderRadius="2px"
                  mb="16px"
                >
                  <Text mb="10px" fontSize={"18px"}>
                    {/* current product title */}

                    {currentAppliance.title}
                  </Text>
                </Flex>
                <Text mb="10px" fontSize={"14px"}>
                  How long do you want to rent this for? (Months)
                </Text>
                <Box>
                  <Slider
                    sliderValue={sliderValue}
                    setSliderValue={setSliderValue}
                  />
                </Box>
                <Box>
                  <Flex
                    border="1px solid #e9e9e9"
                    justifyContent={"space-between"}
                    p={"10px"}
                    mt="20px"
                  >
                    <Flex direction={"column"}>
                      <Text fontSize={"20px"} fontWeight={"500"}>
                        {/* price of the current product */}
                        &#8377;{currentAppliance.price}/mo
                      </Text>
                      <Text fontSize="10px">Monthly Rent </Text>
                    </Flex>
                    <Flex direction="column">
                      <Text fontSize="20px" fontWeight="500">
                        {/* current product price + 150 */}
                        &#8377; {Number(currentAppliance.price) + 150}/mo
                      </Text>
                      <Text fontSize="10px">Refundable Deposit </Text>
                    </Flex>
                  </Flex>

                  <Flex fontSize="10px" padding="10px">
                    {" "}
                    &#10003; 7 Days free trial &#10003; Free relocation &#10003;
                    Free upgrades
                  </Flex>

                  <Button color="teal" varient="outline" width="100%">
                    Compare All Tenures
                  </Button>

                  <Flex direction="row" gap="10px" padding="10px">
                    <Image src="https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg" />
                    <Text fontSize="10px">Delivery by {date}</Text>
                  </Flex>
                  <Button
                    bg="red.500"
                    color="white"
                    width={"100%"}
                    onClick={handleCart}
                  >
                    {/* ADD to Cart button */}
                    Book your Plan
                  </Button>

                  <Box>
                    <Flex justifyContent="space-between" p="10px">
                      <Text>Special Offers</Text>
                      <Text color="blue.300">+1 More Offers</Text>
                    </Flex>
                    <Flex
                      border="2px solid #e9e9e9"
                      justifyContent="space-evenly"
                      alignItems="center"
                      p="10px"
                      gap="10px"
                    >
                      <Image
                        src="https://www.rentomojo.com/public/images/product/special-offer.svg"
                        htmlWidth="30px"
                      />
                      <Flex fontSize="10px" direction="column">
                        <Text>
                          Use Code <strong>CITY15</strong>
                        </Text>
                        <Text>Flat 15% off on third Month Invoice </Text>
                        <Text color="blue.400">Read More</Text>
                        <Text color="red.400">Applicable to New users.</Text>
                      </Flex>
                      <Button variant="outline" color="blue.600">
                        Copy
                      </Button>
                    </Flex>
                  </Box>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default ElectronicsDetails;
