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
  import { getFurnitureData } from "../Redux/App/actions";
  
  const Furniture = () => {
    const [sliderValue, setSliderValue] = React.useState(0);
    const dispatch = useDispatch();
    const furnitureData = useSelector((store)=> store.App.furniture);
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const urlCategory = searchParams.getAll("category");
    const urlSort = searchParams.get("sortby");
    const urlstock=searchParams.get("stock");
  
    const [category, setCategory] = useState(urlCategory || []);
    const [sortby, setSortby] = useState(urlSort || []);
    const [stock, setStock] = useState(urlstock || []);
    
    useEffect(() => {
      if (furnitureData.length === 0 || location.search) {
        const sortby = searchParams.get("sortby");
        const getFurnitureParams = {
          params: {
            category: searchParams.getAll("category"),
            stock: searchParams.getAll("stock"),
            _sort: sortby && "price",
            _order: sortby,
          },
        };
  
        dispatch(getFurnitureData(getFurnitureParams));
      }
    }, [location.search]);

    const handleChange = (e) => {
      const option = e.target.value;
      let newCategory = [...category];
      if (category.includes(option)) {
        newCategory.splice(newCategory.indexOf(option), 1);
      } else {
        newCategory.push(option);
      }
      setCategory(newCategory);
    };

    const handleSort = (e) => {
      if (e.target.value) {
        setSortby(e.target.value);
      }
    };
  
    useEffect(() => {
      if (category || sortby) {
        let params = {};
        category && (params.category = category);
        sortby && (params.sortby = sortby);
        setSearchParams(params);
      }
      dispatch(getFurnitureData());
    }, [setSearchParams, sortby, category]);
  
    // console.log(furnitureData);
    return (
      <>
        <Box>
          {/* Filters and relevance box */}
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
                     value={"bedroom"}
                     defaultChecked={category.includes("bedroom")}
                     onChange={handleChange}
                  >
                    <Text fontSize="14px">Bedroom</Text>
                  </Checkbox>
                  <Checkbox
                     value={"living"}
                     defaultChecked={category.includes("living")}
                     onChange={handleChange}
                  >   
                    <Text fontSize="14px">Living Room</Text>
                  </Checkbox>
                  <Checkbox
                      value={"baby"}
                      defaultChecked={category.includes("baby")}
                      onChange={handleChange}
                  >
                    <Text fontSize="14px">Baby Furniture</Text>
                  </Checkbox>
                  <Checkbox
                       value={"dining"}
                       defaultChecked={category.includes("dining")}
                       onChange={handleChange}
                  >
                    <Text fontSize="14px">Kitchen & Dining</Text>
                  </Checkbox>
                  <Checkbox
                      value={"wfh"}
                      defaultChecked={category.includes("wfh")}
                      onChange={handleChange}
                  >
                    <Text fontSize="14px">Work From Home (WFH)</Text>
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
                <Checkbox defaultChecked={stock.includes("Out of stock")}>
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
              {furnitureData?.map((item) => (
                <ProductsCard key={item.id} {...item} goTo={"Furniture"}/>
              ))}
            </Box>
          </Box>
        </Box>
      </>
    );
  };
  
  export default Furniture;
  