import { Box, Container, Img, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./RahiHome.module.css";

export const RahiHome = () => {
  return (
    <>
      <Container minWidth="90%" style={{}}>
        <Box>
          <Text
            fontSize={{
              sm: "16px",
              md: "18px",
              lg: "19px",
              xl: "20px",
              base: "14px"
            }}
            style={{
              textAlign: "left"
            }}
          >
            There's more
          </Text>
        </Box>
        <Box
          style={{
            textAlign: "left"
          }}
        >
          <Text
            fontSize={{
              sm: "15px",
              md: "16px",
              lg: "17px",
              xl: "18px",
              base: "14px"
            }}
          >
            to renting
          </Text>
          <Box
            style={{
              border: "1px solid tomato",
              backgroundColor: "tomato",
              width: "6%"
            }}
          ></Box>
        </Box>
        <SimpleGrid
          style={{
            gap: "2%",
            marginTop: "2%"
          }}
          columns={{ sm: 2, md: 2, lg: 3, xl: 3, base: 2 }}
        >
          <Box
            id={styles.mainBox}
            style={{
              padding: "10px"
            }}
          >
            <Img
              width={{
                sm: "80px",
                md: "90px",
                lg: "100px",
                xl: "120px",
                base: "70px"
              }}
              src="https://media2.giphy.com/media/j4qI5b6Mrlx5GOVidc/giphy.gif?cid=790b76119f5e1de76114ede8e5e5cc73fbac4c9ce79e32e6&rid=giphy.gif&ct=s"
            />
            <Box
              style={{
                width: "95%",
                margin: "auto",
                textAlign: "left"
              }}
            >
              {" "}
              <Text
                fontSize={{
                  sm: "16px",
                  md: "18px",
                  lg: "19px",
                  xl: "20px",
                  base: "14px"
                }}
              >
                Finest-quality products
              </Text>
            </Box>
            <Box
              style={{
                width: "96%",
                margin: "auto",
                marginTop: "2%",
                textAlign: "left"
              }}
            >
              <Text
                fontSize={{
                  sm: "14px",
                  md: "14px",
                  lg: "15px",
                  xl: "17px",
                  base: "13px"
                }}
                style={{
                  color: "#717171",
                  fontFamily: "sans-serif"
                }}
              >
                Quality matters to you, and us! That's why we do a strict
                quality-check for every product.
              </Text>
            </Box>
          </Box>

          <Box
            id={styles.mainBox}
            style={{
              padding: "10px"
            }}
          >
            <Img
              width={{
                sm: "80px",
                md: "90px",
                lg: "100px",
                xl: "120px",
                base: "70px"
              }}
              src="https://as1.ftcdn.net/v2/jpg/01/41/48/98/1000_F_141489814_QhLFljLbsvCOCc5viWE0W8FFsbjxcRmt.jpg"
            />
            <Box
              style={{
                width: "95%",
                margin: "auto",
                textAlign: "left"
              }}
            >
              {" "}
              <Text
                fontSize={{
                  sm: "16px",
                  md: "18px",
                  lg: "19px",
                  xl: "20px",
                  base: "14px"
                }}
              >
                Free relocation
              </Text>
            </Box>
            <Box
              style={{
                width: "96%",
                margin: "auto",
                marginTop: "2%",
                textAlign: "left"
              }}
            >
              <Text
                fontSize={{
                  sm: "14px",
                  md: "14px",
                  lg: "15px",
                  xl: "17px",
                  base: "13px"
                }}
                style={{
                  color: "#717171",
                  fontFamily: "sans-serif"
                }}
              >
                Changing your house or even your city? We'll relocate your
                rented products for free.
              </Text>
            </Box>
          </Box>

          <Box
            id={styles.mainBox}
            style={{
              padding: "10px"
            }}
          >
            <Img
              width={{
                sm: "80px",
                md: "90px",
                lg: "100px",
                xl: "120px",
                base: "70px"
              }}
              src="https://www.avicsoftware.com/assets/images/icons/idx-icon-02.svg"
            />
            <Box
              style={{
                width: "95%",
                margin: "auto",
                textAlign: "left"
              }}
            >
              {" "}
              <Text
                fontSize={{
                  sm: "16px",
                  md: "18px",
                  lg: "19px",
                  xl: "20px",
                  base: "14px"
                }}
              >
                Free maintenance
              </Text>
            </Box>
            <Box
              style={{
                width: "96%",
                margin: "auto",
                marginTop: "2%",
                textAlign: "left"
              }}
            >
              <Text
                fontSize={{
                  sm: "14px",
                  md: "14px",
                  lg: "15px",
                  xl: "17px",
                  base: "13px"
                }}
                style={{
                  color: "#717171",
                  fontFamily: "sans-serif"
                }}
              >
                Keeping your rented products in a spick and span condition is on
                us, so you can sit back and relax.
              </Text>
            </Box>
          </Box>

          <Box
            id={styles.mainBox}
            style={{
              padding: "10px"
            }}
          >
            <Img
              width={{
                sm: "80px",
                md: "90px",
                lg: "100px",
                xl: "120px",
                base: "70px"
              }}
              src="https://cdn4.iconfinder.com/data/icons/education-863/136/Classroom_Chair-512.png"
            />
            <Box
              style={{
                width: "95%",
                margin: "auto",
                textAlign: "left"
              }}
            >
              {" "}
              <Text
                fontSize={{
                  sm: "16px",
                  md: "18px",
                  lg: "19px",
                  xl: "20px",
                  base: "14px"
                }}
              >
                Cancel anytime
              </Text>
            </Box>
            <Box
              style={{
                width: "96%",
                margin: "auto",
                marginTop: "2%",
                textAlign: "left"
              }}
            >
              <Text
                fontSize={{
                  sm: "14px",
                  md: "14px",
                  lg: "15px",
                  xl: "17px",
                  base: "13px"
                }}
                style={{
                  color: "#717171",
                  fontFamily: "sans-serif"
                }}
              >
                Pay only for the time you use the product and close your
                subscription without any hassle.
              </Text>
            </Box>
          </Box>

          <Box
            id={styles.mainBox}
            style={{
              padding: "10px"
            }}
          >
            <Img
              width={{
                sm: "80px",
                md: "90px",
                lg: "100px",
                xl: "120px",
                base: "70px"
              }}
              src="https://cdn.shopify.com/s/files/1/0590/1654/4440/files/Bedroom_5b38aa18-4d4e-4bd8-b967-aea24ed7dc35_160x.jpg?v=1633623753"
            />
            <Box
              style={{
                width: "95%",
                margin: "auto",
                textAlign: "left"
              }}
            >
              {" "}
              <Text
                fontSize={{
                  sm: "16px",
                  md: "18px",
                  lg: "19px",
                  xl: "20px",
                  base: "14px"
                }}
              >
                Easy return on delivery
              </Text>
            </Box>
            <Box
              style={{
                width: "96%",
                margin: "auto",
                marginTop: "2%",
                textAlign: "left"
              }}
            >
              <Text
                fontSize={{
                  sm: "14px",
                  md: "14px",
                  lg: "15px",
                  xl: "17px",
                  base: "13px"
                }}
                style={{
                  color: "#717171",
                  fontFamily: "sans-serif"
                }}
              >
                If you don't like the product on delivery, you can return it
                right away—no questions asked.
              </Text>
            </Box>
          </Box>

          <Box
            id={styles.mainBox}
            style={{
              padding: "10px"
            }}
          >
            <Img
              style={{
                borderRadius: "50%"
              }}
              width={{
                sm: "80px",
                md: "90px",
                lg: "100px",
                xl: "120px",
                base: "70px"
              }}
              src="https://thumbs.dreamstime.com/b/charging-phone-vector-icon-sign-symbol-filled-flat-solid-pictogram-isolated-white-logo-illustration-135714126.jpg"
            />
            <Box
              style={{
                width: "95%",
                margin: "auto",
                textAlign: "left"
              }}
            >
              {" "}
              <Text
                fontSize={{
                  sm: "16px",
                  md: "18px",
                  lg: "19px",
                  xl: "20px",
                  base: "14px"
                }}
              >
                Keep upgrading
              </Text>
            </Box>
            <Box
              style={{
                width: "96%",
                margin: "auto",
                marginTop: "2%",
                textAlign: "left"
              }}
            >
              <Text
                fontSize={{
                  sm: "14px",
                  md: "14px",
                  lg: "15px",
                  xl: "17px",
                  base: "13px"
                }}
                style={{
                  color: "#717171",
                  fontFamily: "sans-serif"
                }}
              >
                Bored of the same product? Upgrade to try another, newer design
                and enjoy the change!
              </Text>
            </Box>
          </Box>
        </SimpleGrid>

        <Box
          marginTop={{
            sm: "8%",
            md: "3%",
            lg: "3%",
            xl: "3%",
            base: "10%"
          }}
          style={{
            textAlign: "left"
          }}
        >
          <Text
            id={styles.more}
            style={{
              color: "#31c3c5"
            }}
            fontSize={{
              sm: "16px",
              md: "18px",
              lg: "20px",
              xl: "22px",
              base: "15px"
            }}
          >
            Know More
          </Text>
        </Box>
      </Container>
    </>
  );
};
