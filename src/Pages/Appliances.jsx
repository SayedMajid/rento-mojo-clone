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
import { useLocation, useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsCard from "../misc/ProductsCard";
import Slider from "../misc/ProductsPageslider";
import { getAppliances } from "../Redux/App/actions";

const Appliances = () => {
  
  const [sliderValue, setSliderValue] = useState(0);
  const dispatch = useDispatch();
  const appliances = useSelector((store) => store.App.appliances);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const urlCategory = searchParams.getAll("category");
  const urlSort = searchParams.get("sortby");
  const urlstock = searchParams.get("stock");

  const [category, setCategory] = useState(urlCategory || []);
  const [sortby, setSortby] = useState(urlSort || []);
  const [stock, setStock] = useState(urlstock || []);
  console.log(stock);
 
 
  //get filtered data

  useEffect(() => {
    if (appliances.length === 0 || location.search) {
      const sortby = searchParams.get("sortby");
      const getAppliancesParams = {
        params: {
          category: searchParams.getAll("category"),
          stock: searchParams.get("stock"),
          _sort: sortby && "price",
          _order: sortby,
        },
      };

      dispatch(getAppliances(getAppliancesParams));
    }
  }, [location]);

  //handle the changes

  const handleChangle = (e) => {
    const option = e.target.value;

    // if the option is already present then remove it, else add it.

    let newCategory = [...category];

    if (category.includes(option)) {
      //remove it

      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setCategory(newCategory);
  };

  //handle stock availability
  const handleStock = (e) => {
    const option = e.target.value;

    let newStock = [...stock];

    if (stock.includes(option)) {
      newStock.splice(newStock.indexOf(option), 1);
    }
    else{
      newStock.push(option);
    }
    setStock(newStock);
  };

  //handle sorting

  const handleSort = (e) => {
    if (e.target.value) {
      setSortby(e.target.value);
    }
  };

  //getting data and setting search params

  useEffect(() => {
    if (category || sortby || stock) {
      let params = {};
      category && (params.category = category);
      stock && (params.stock = stock);
      sortby && (params.sortby = sortby);
      setSearchParams(params);
    }
    dispatch(getAppliances());
  }, [setSearchParams, sortby, category,stock]);

  return (
    <>
      <Box>
        {/* Filters and relevance box */} ..
        <Box
          w={{ xl: "80%", md: "80%", base: "95%" }}
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
          <Select w="130px" border="none" color="#1dbdc0" onChange={handleSort}>
            <option value="" color="gray">
              Relevance
            </option>
            <option value="desc" color="gray">
              Rent - High to low
            </option>
            <option value="asc" color="gray">
              Rent - Low to High
            </option>
          </Select>
        </Box>
        <Box
          display="flex"
          m="10px auto 20px"
          w={{ xl: "80%", md: "80%", base: "95%" }}
          boxSizing="border-box"
          justifyContent="space-between"
          fontFamily="sans-serif"
        >
          {/* Sidebar Box */}
          <Box
            h="max-content"
            w={{ xl: "262.5px" }}
            display={{ base: "none", md: "none", xl: "inline" }}
          >
            {/* Choose rental tenure */}
            <Flex
              border="1px solid #e9e9e9"
              w="100%"
              h="max-content"
              flexDirection="column"
              boxSizing="border-box"
              p="20px"
              borderRadius="2px"
              mb="16px"
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
              border="1px solid #e9e9e9"
              boxSizing="border-box"
              p="20px"
              display="flex"
              flexDirection="column"
              mb="16px"
            >
              <Text fontSize="14px" mb="16px">
                PRODUCT TYPE
              </Text>
              <Stack spacing={2} direction="column">
                <Checkbox
                  value={"fridge"}
                  defaultChecked={category.includes("fridge")}
                  onChange={handleChangle}
                >
                  <Text fontSize="14px">Refrigerators & Freezers</Text>
                </Checkbox>
                <Checkbox
                  value={"telivision"}
                  defaultChecked={category.includes("telivision")}
                  onChange={handleChangle}
                >
                  <Text fontSize="14px">Televisions</Text>
                </Checkbox>
                <Checkbox
                  value={"washingmachine"}
                  defaultChecked={category.includes("washingmachine")}
                  onChange={handleChangle}
                >
                  <Text fontSize="14px">Washing Machines</Text>
                </Checkbox>
                <Checkbox
                  value={"airconditioner"}
                  defaultChecked={category.includes("airconditioner")}
                  onChange={handleChangle}
                >
                  <Text fontSize="14px">Air Conditioner</Text>
                </Checkbox>
                <Checkbox
                  value={"waterandairpurifiers"}
                  defaultChecked={category.includes("waterandairpurifiers")}
                  onChange={handleChangle}
                >
                  <Text fontSize="14px">Water & Air Purifiers</Text>
                </Checkbox>
                <Checkbox
                  value={"aircoolers"}
                  defaultChecked={category.includes("aircoolers")}
                  onChange={handleChangle}
                >
                  <Text fontSize="14px">Air Coolers</Text>
                </Checkbox>
                <Checkbox
                  value={"clothdryer"}
                  defaultChecked={category.includes("clothdryer")}
                  onChange={handleChangle}
                >
                  <Text fontSize="14px">Cloth Dryer</Text>
                </Checkbox>
                <Checkbox
                  value={"dishwasher"}
                  defaultChecked={category.includes("dishwasher")}
                  onChange={handleChangle}
                >
                  <Text fontSize="14px">Dish Washer</Text>
                </Checkbox>
              </Stack>
            </Box>
            {/* Availability */}
            <Box
              border="1px solid #e9e9e9"
              boxSizing="border-box"
              p="20px"
              display="flex"
              flexDirection="column"
              mb="16px"
            >
              <Text mb="16px" fontSize="14px">
                AVAILABILITY
              </Text>
              <Checkbox defaultChecked={stock.includes("outofstock")} onChange={handleStock} value={"outofstock"}>
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
            w={{ xl: "74%", md: "100%", base: "100%" }}
            h="max-content"
            display={{ base: "grid", md: "grid", xl: "grid", "2xl": "grid" }}
            gridTemplateColumns={{
              base: "repeat(2,1fr)",
              md: "repeat(3,1fr)",
              xl: "repeat(3,1fr)",
            }}
            alignContent="center"
            gap={[4, 6, 10]}
          >
            {appliances?.map((item) => (
              <ProductsCard key={item.id} {...item} goTo={"Appliances"} />

            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Appliances;
