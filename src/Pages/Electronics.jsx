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
import { useDispatch , useSelector} from "react-redux";
import Slider from "../misc/ProductsPageslider";
import { getElectronicsData } from "../Redux/App/actions";

const Electronics = () => {
  const [sliderValue, setSliderValue] = React.useState(0);

  const dispatch = useDispatch();

  const electronicsData = useSelector( store => store.App.electronics )
  console.log(electronicsData)

  useEffect(() => {
    dispatch(getElectronicsData())
  },[])

  return (
    <>
      {/* Filters and relevance box */}
      <Box
        w="80%"
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
      <Flex
        m="10px auto 20px"
        border="1px solid red"
        w="80%"
        justifyContent="space-between"
        fontFamily='sans-serif'
      >
        {/* For main Box, xl : w=1170px */}
        {/* Sidebar Box */}
        <Box
          border="1px solid black"
          w="262.5px"
          h='max-content'
          display="flex"
          flexDirection="column"
          gap="16px"
        >
          {/* Slider Box */}
          <Box
            h="113px"
            boxSizing="border-box"
            border="1px solid gray"
            p="20px"
            borderRadius="2px"
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
          </Box>
          {/* Product Type Box */}
          <Box
            border="1px solid gray"
            boxSizing="border-box"
            p="20px"
            display="flex"
            flexDirection="column"
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
          >
            <Text mb='16px' fontSize='14px' >AVAILABILITY</Text>
            <Checkbox >
                <Text fontSize='14px' >Out of Stock</Text>
            </Checkbox>
          </Box>
          {/* Cyan Box */}
          <Box mt='20px' boxSizing="border-box" p='20px' borderRadius='2px' border='1px solid #1dbdc0' bg='#f3fbfc'>
            <Text mb='12px' >What do you want us to launch next?</Text>
            <Text mb='12px' fontSize='14px' color='gray'>Suggest a product</Text>
            <Flex border='1px solid #1dbdc0' px='10px' borderRadius='3px'>
                <Input fontSize='14px' variant="unstyled" placeholder="Your Suggestion" />
                <Button fontSize='14px' variant='ghost' color="#1dbdc0" fontWeight='500'>Submit</Button>
            </Flex>
          </Box>
        </Box>
        {/* Products Box */}
        <Box border="1px solid blue" w="74%" h="max-content">
            {/* for each card w:262, h:354 */}
        </Box>
      </Flex>
    </>
  );
};

export default Electronics;
