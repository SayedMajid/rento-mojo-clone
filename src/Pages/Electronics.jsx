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
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import ProductsCard from "../misc/ProductsCard";
import Slider from "../misc/ProductsPageslider";
import { getElectronicsData } from "../Redux/App/actions";

// re-added

const Electronics = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sliderValue, setSliderValue] = React.useState(0);
  const dispatch = useDispatch();
  const electronicsData = useSelector((store) => store.App.electronics);
  const initSort = searchParams.get("sortBy");
  const [sortBy, setSortBy] = useState(initSort || "");
  const initCategory = searchParams.getAll("category");
  const [category, setCategory] = useState(initCategory || []);
  const location = useLocation();

  // Sorting of price function...
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  // Sorting of products category wise...
  const handleCategoryChange = (e) => {
    let option = e.target.value;

    let newCategory = [...category];
    category.includes(option)
      ? newCategory.splice(newCategory.indexOf(option), 1)
      : newCategory.push(option);

    setCategory(newCategory);
  };

  useEffect(() => {
    if (category || sortBy) {
      const searchParams = {};
      sortBy && (searchParams.sortBy = sortBy);
      category && (searchParams.category = category);
      setSearchParams(searchParams);
    }
  }, [sortBy, category, setSearchParams]);

  useEffect(() => {
    if (location.search || electronicsData?.length === 0) {
      const queryParams = {
        category: category,
        _sort: sortBy && "price",
        _order: sortBy,
      };
      dispatch(getElectronicsData(queryParams));
    }
  }, [location.search]);

  return (
    <>
      <Box>
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
          <Select
            w="130px"
            border="none"
            color="#1dbdc0"
            onChange={(e) => handleSortChange(e)}
          >
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
          <Box
            h="max-content"
            w={{ xl: "262.5px" }}
            display={{ base: "none", md: "none", xl: "inline" }}
          >
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
                  onChange={(e) => handleCategoryChange(e)}
                  value="smartphones"
                  defaultChecked={category.includes("smartphones")}
                >
                  <Text fontSize="14px">SmartPhones</Text>
                </Checkbox>
                <Checkbox
                  onChange={(e) => handleCategoryChange(e)}
                  value="laptops"
                  defaultChecked={category.includes("laptops")}
                >
                  <Text fontSize="14px">Laptops</Text>
                </Checkbox>
                <Checkbox
                  onChange={(e) => handleCategoryChange(e)}
                  value="smartdevices"
                  defaultChecked={category.includes("smartdevices")}
                >
                  <Text fontSize="14px">Smart Devices</Text>
                </Checkbox>
                <Checkbox
                  onChange={(e) => handleCategoryChange(e)}
                  value="tablets"
                  defaultChecked={category.includes("tablets")}
                >
                  <Text fontSize="14px">Tablets</Text>
                </Checkbox>
              </Stack>
            </Box>
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
              <Checkbox>
                <Text fontSize="14px">Out of Stock</Text>
              </Checkbox>
            </Box>
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
            {electronicsData?.map((item) => (
              <ProductsCard key={item.id} {...item} goTo={"Electronics"} />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Electronics;
