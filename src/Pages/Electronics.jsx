import {
  Box,
  Button,
  Checkbox,
  Flex,
  Image,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "../misc/ProductsPageslider";
import { getElectronicsData } from "../Redux/App/actions";

const Electronics = () => {
  const [sliderValue, setSliderValue] = React.useState(0);

  const dispatch = useDispatch();

  const electronicsData = useSelector((store) => store.App.electronics);
  console.log(electronicsData);

  useEffect(() => {
    dispatch(getElectronicsData());
  }, []);

  return (
    <>
      <Box>
        {/* Filters and relevance box */}
        <Box
          w={{ xl: "80%", md: "80%", base: "95%" }}
          border="1px solid black"
          m="20px auto"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex alignItems="center">
            <Image
              src="https://img.icons8.com/ios/2x/empty-filter.png"
              h="20px"
              mr="4px"
            />
            <Text color="#717171">Filters</Text>
          </Flex>
          <Select w="130px" border="none" color="#1dbdc0">
            <option value="" color="gray">
              Relevance
            </option>
            <option value="" color="gray">
              Rent - High to low
            </option>
            <option value="" color="gray">
              Rent - Low to High
            </option>
          </Select>
        </Box>
        <Box
          display="flex"
          m="10px auto 20px"
          border="1px solid red"
          w={{ xl: "80%", md: "80%", base: "95%" }}
          boxSizing="border-box"
          justifyContent="space-between"
          fontFamily="sans-serif"
        >
          {/* Sidebar Box */}
          <Box h="max-content" w="262.5px" display={{ base: "none", md: "none" , xl:"inline"}} >
            {/* Choose rental tenure */}
            <Flex
              border="1px solid gray"
              w="100%"
              h="max-content"
              flexDirection="column"
              boxSizing="border-box"
              p="20px"
              borderRadius="2px"
              mb='16px'
            >
              <Text mb="10px" fontSize={"14px"}>
                CHOOSE RENTAL TENURE
              </Text>
              <Box>
                <Slider
                  sliderValue={sliderValue}
                  setSliderValue={setSliderValue}
                />
              </Box>
            </Flex>
            {/* Product Type Box */}
            <Box
              border="1px solid gray"
              boxSizing="border-box"
              p="20px"
              display="flex"
              flexDirection="column"
              mb='16px'
            >
              <Text fontSize="14px" mb="16px">
                PRODUCT TYPE
              </Text>
              <Stack spacing={2} direction="column">
                <Checkbox>
                  <Text fontSize="14px">SmartPhones</Text>
                </Checkbox>
                <Checkbox>
                  <Text fontSize="14px">Laptops</Text>
                </Checkbox>
                <Checkbox>
                  <Text fontSize="14px">Smart Devices</Text>
                </Checkbox>
                <Checkbox>
                  <Text fontSize="14px">Tablets</Text>
                </Checkbox>
              </Stack>
            </Box>
            {/* Availability */}
            <Box
              border="1px solid gray"
              boxSizing="border-box"
              p="20px"
              display="flex"
              flexDirection="column"
              mb='16px'
            >
              <Text mb="16px" fontSize="14px">
                AVAILABILITY
              </Text>
              <Checkbox>
                <Text fontSize="14px">Out of Stock</Text>
              </Checkbox>
            </Box>
            {/* Cyan Box */}
            <Box
              mt="20px"
              boxSizing="border-box"
              p="20px"
              borderRadius="2px"
              border="1px solid #1dbdc0"
              bg="#f3fbfc"
            >
              <Text mb="12px">What do you want us to launch next?</Text>
              <Text mb="12px" fontSize="14px" color="gray">
                Suggest a product
              </Text>
              <Flex border="1px solid #1dbdc0" px="10px" borderRadius="3px">
                <Input
                  fontSize="14px"
                  variant="unstyled"
                  placeholder="Your Suggestion"
                />
                <Button
                  fontSize="14px"
                  variant="ghost"
                  color="#1dbdc0"
                  fontWeight="500"
                >
                  Submit
                </Button>
              </Flex>
            </Box>
          </Box>
          {/* Products Box */}
          <Box
            border="1px solid blue"
            w={{ xl: "74%", md: "100%", base: "100%" }}
            h="max-content"
            display={{ base: "grid", md: "grid", xl: "grid", "2xl": "grid" }}
            gridTemplateColumns={{
              base: "repeat(2,1fr)",
              md: "repeat(3,1fr)",
              xl: "repeat(3,1fr)",
            }}
            alignContent="center"
            gap={[4,6,8,10]}
          >
            {electronicsData?.map((item) => (
              <Box
                h={{ base: "258px", md: "313px", xl: "354px", "2xl": "437px" }}
                w={{ base: "auto", md: "auto", xl: "auto", "2xl": "auto" }}
                border="1px solid red"
              ></Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Electronics;
