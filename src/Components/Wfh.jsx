import { Box, Container, Img, SimpleGrid, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDataFailure,
  getDataRequest,
  getDataSuccess,
} from "../Redux/WFHRahi/actions";
import { Link } from "react-router-dom";

const Wfh = () => {
  const [furniture, setFurniture] = useState([]);
  const [Fitness, setFitness] = useState([]);
  const [furnitureLoading, setFurnitureLoading] = useState(false);
  const [furnitureError, setFurnitureError] = useState(false);
  const [FitnessLoading, setFitnessLoading] = useState(false);
  const [FitnessError, setFitnessError] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataRequest());
    axios
      .get("https://json-server-mocker-myapi.herokuapp.com/wfh_All")
      .then((res) => dispatch(getDataSuccess(res.data)))
      .catch(() => dispatch(getDataFailure()));
  }, []);

  const { wfh, iswfhLoading, iswfhError } = useSelector((state) => {
    return {
      wfh: state.Rahi.wfh,
      iswfhLoading: state.Rahi.iswfhLoading,
      iswfhError: state.Rahi.iswfhError,
    };
  });

  const FurnitureFunction = () => {
    setFurnitureLoading(true);
    axios
      .get("https://json-server-mocker-myapi.herokuapp.com/wfh_Furniture")
      .then((res) => {
        setFurniture(res.data);
        setFurnitureLoading(false);
      })
      .catch(() => setFurnitureError(true));
  };

  const FitnessFunction = () => {
    setFitnessLoading(true);
    axios
      .get("https://json-server-mocker-myapi.herokuapp.com/wfh_Fiteness_Equipment")
      .then((res) => {
        setFitness(res.data);
        setFitnessLoading(false);
      })
      .catch(() => setFitnessError(true));
  };
  useEffect(() => {
    FurnitureFunction();
    FitnessFunction();
  }, []);

  return (
    <Container minW="100%">
      <Box>
        <Img
          width="98%"
          style={{
            borderRadius: "8px",
          }}
          src="https://s.rmjo.in/2020/7/16/banner-wfh@2x.png"
        />
      </Box>
      <Box
        style={{
          marginTop: "3%",
        }}
      >
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList>
            <Tab>All</Tab>
            <Tab>Furniture</Tab>
            <Tab>Fitness Equipment</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Box
                w="80%"
                m={{ xl: "0 auto 160px", md: "0 auto 200px" , base:"0 auto 1280px" }}
                h="max-content"
              >
                <Box>
                  {iswfhLoading ? (
                    <Img
                      width="15%"
                      style={{ marginLeft: "30%" }}
                      src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif"
                    />
                  ) : iswfhError ? (
                    <Img
                      width="30%"
                      style={{ marginLeft: "30%", borderRadius: "8px" }}
                      src="https://yacht-express.net/wp-content/uploads/2020/12/it-seems-that-something-went-wrong-1-718x602.gif"
                    />
                  ) : (
                    <Box>
                      <SimpleGrid
                        columns={{
                          sm: "2",
                          md: "2",
                          lg: "3",
                          xl: "4",
                          base: "1",
                        }}
                        style={{
                          gap: "2%",
                        }}
                      >
                        {wfh &&
                          wfh.map((item) => (
                            <Link key={item.id} to={`/wfh/${item.id}`}>
                              <Box
                                width={{
                                  sm: "200px",
                                  md: "300px",
                                  lg: "350px",
                                  xl: "350px",
                                  base: "200px",
                                }}
                                style={{
                                  boxShadow:
                                    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                                  padding: "3%",
                                }}
                              >
                                <Box
                                  style={{
                                    marginBottom: "4%",
                                  }}
                                >
                                  <Img
                                    width="7%"
                                    style={{
                                      marginLeft: "70%",
                                    }}
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPUAAADOCAMAAADR0rQ5AAAAh1BMVEX///8AAAD7+/vi4uLp6emsrKzm5ubu7u74+PjBwcGvr6/z8/PT09OcnJyGhoZwcHDa2trIyMhfX19paWlFRUWAgIBTU1POzs4zMzM5OTnX19ekpKSXl5e6urqRkZEvLy8ODg5MTEx9fX0YGBhubm4jIyNjY2MoKChAQEAXFxdQUFALCwseHh5SL7czAAAJzElEQVR4nOVdaWPyIAxW662z3tNtOnWHu/7/73tXna9NCC3lBp9vmy2QAiF5gKRWU0M3mfQfR4d0utzvv5av6eKp1Rt3FAsFaD5s+ne/NaSzNE0Po6fWZtjWWX5FtDejZZ2Ddfo4VK6g2Xt6f+FUMN1u7MuetN55AudEH00UKpiVVzB9HGuUqQT3o/IGXbBsSQz3yUG8grSnX0AW4woin7HvN6pUMEmrVvAqP6TE0Hqu2qQTUtFJ3txKlV/fNo2J3KnczVesNgIV3E/lK1jeG5G5/SrfpBMeSyrordTKf9Y/wzuqMmdoFcl8VC//qFfuhsLYzmPHa9bDWk8FHxqXspaeJmWYJ0T5A4HFXxRpV4/MiaZ++MOIqeBRa/n1vg6hBdeS793Lt9iTO6ht23o/6i/myn5Au2SBni9ak6R5NUMG7eHm7vWn+KVFroK7EhGm2/5vBf+HbbeZ9FqLeclLit1dOKPTPjVJz8LfP+0L3jxePIdu0VPrbY/ba0k/LRpa7ypC8z2A+SNX4gsaReb0uTeG/Admm0FZBe3HL+7rn6XN46HzxilyLexSDLmCH2oFauxd1LIe9Pe8MkSMQQL3nOIW1T7j5oMuZt/luBlvrUqLD9d0ZxcLAfTpsu4qOVAnDKuY12sJ+6q1I4uSmNxPtMzVC8ow5pIuCCtJp5Huoo+qxSyoUkbV+/mCociqvJOcixnIFfBYzVCjlNBSzYflzJgctkrlk2rip4rYVAHK/kyjmCT5UiYGhoTbVkFsYni/yg/uK3irQgYt1jPhGr6JNpxQZJoc1wbPuVI3nc8YsgbbWuxNdgLOS80kYdAmrtqMBmBXyaXIa+wwTPW1qVZ7IITWSoGwI/VQ/lKTeamM76qIDqNzpE1mGhtGgiLm6gzGSdTPwUE/8UfrrlgGdjg9lLzBTAsThGu+kpUmxiePhBG7uBLGC1Lfo6NwFXulY0VkwEzTfdHTzEcyI/TVcZ8bEZoQu8iBwIrGzH5Chk1mlx/L1YwsmP7jq0xs2ig4A+UYNPVZAQSwSnvmPTiuMCr8R09QGkSHajVOHAD7nvQKifR3ZZfcO6CtuSn1TBd9GqOzzg6QcqZ0MyISrBx8MIw2FOnIPoFWuFf7bTQANLXZNQkR/g6aaAKQld7hn9GqHsP4zoDEwoQN7GohRzwIQMPrBf6IZrW5Ez3WUTSG4SeR2ivxFJAPA0ZIA34RQ46QG8BFO39uBXJ4YdvfGNAez3No8Hs4a6AZrDjCQWfryV0DjQB29nXxgrrMAJHlFuDwwdf/f3NHfhyAWuviVcHTIZrZaQ8AV6jLEAcDfOW0gWYAHO2L3QmIf807HV5gQmhxaI1q34nwAUDC8yEQYLMJ7nsGBnBeYMT+Ky677AKwZJ85YtD9Fq8KWQTU4plB0iGmenQA26jZxAYKbua6eYYAtvIzkxswauY2ntwCHMDIzhwC7ijOaY3J/hryMl23zhiAB9KAKjzO1ToDWJ4TaJmFvqHHB9jE60FGIUYj/Axgp/Thn7GQ/yzAdsAWWuGxqvBabZAX8wAHvMuABYaRF3MGKYXoKLMr8mLO4ba166YZRJ46eYYLmeumGUT+BsbLzUi9z4m5uxmpwS2jm5F6epNS5/v6+2akzs/rl5tZufIHJ59v1EoBBFJE51Ew8mLObsX7ANzwAd6IidfTBIcrt/D0eKwUKdqtbkEGKb4d+wvARO7dClsILtwmtRq4ne+6ccYAtnx+F2hwTTZaJV5HfQu2gLTcgvYQgAnOzmgAkjRWQhwcQ8ruPd/ETi7wM09WCZA6vnNXJwAZT3Y3OJcU5+4HvEl/+hdYwOeO22cGwLE86y54/yeCa1wsgE3yd9PnM/+/GE3xMdWvoP9jHOJAwIvVDed6hMwCkO+O/K/G2CWeAB4j/b+DCSMAuWygEQDP43pZE8722PQZlC5nkMAAhe4aaAQwGEpuZYZ3BOLqbHhVE1w9B7/E1dkweCC4eQ6vnMd0twleavkBv6HbqRGZpfAOG2JN4E3keI4Oo2Bt6Fd0PdtUJCDbQNdumZsOMLbep4smGkBZ3AQUbyKOK9goPg5BmaC4mTGMcRQC5rv8kRgWbRTnlwxmhYKLkAF0ggISiBPiCIUsDN3lxME2OYdkceR2o+HNjAOpZ75+xjGVQ9ZoAyTLjv8oejLgk9MNHN2/oAeZ7ATBkmg4E1Kh/cHE2A+ztxs4Rjs3auEZTEj3EOd2m8kTUHKrHCuBEHe+cJxGgbNVbEjp0NxONhOGgFPBphU4BqXT2ADiQlYmkcbGdBJDfWiyiZMEo4IQyVhCCTwwYZv+LXgkuEHkUlBKgmQNVNIP4aAgXSI77XMAIUWoXAsVdFKXysRiLsC0HnSoBGrVrCwqkaTfKzeVTKRy9H0qd5bPp9Go9koQI9S3W3u7PUBly5HawmFTVNTLsym4wUCnHqJ0oo8nTanMKQprDpWazL+T81SWHCXngbB16nPP7j9RucQUbUnCrvXrsGmXyiiq7jdQKfP8YU9xBocMbzp8RCpzoy/bYGymIm3bF1TRX17EIqbScmvbvEiIfJWf7nnEBpUwVuNFvMbebPlSSAjPUHNfUPk13W6EsZxgvb7UPe+odJgutz0t6Vhja4QUqNS7RtbTAZXc2A2P2CRyVH+bsp0M2H5SsGwna7fzpUBxgkZ9Iiol+8oyj0ilnTfs/3bwFmkGmzwi2QDzXAf1qe3xiBSv9WGD13LJIzqs29n3JjlBa+PMEY+olROUgQseUTMnKAOKR1wYrdELW8E2j+iJXdgmeERjtrAhTlAG9njEMZuu3p2/Z4tHNMgJ6mqOdj7DLCcog+STbdCPXu6qQU0kx5xd1zBPSX7XF/f8rNnxZ4UTlIFJXePxvgvFI+o5j2iNE5SBIRvCKicoAxP2ImXz7v3aO9fvG1jnBGVA+YEqPKIDTlAGpM8ve5PAEScoA4rfkYvR4I6jkoAuLi+wc416+sgpJygD8txutcCXWvWDLajqXt1rgSVQ66w4j+gFJygDFZvKE05QBpT9vBOxn0l73vcrCFfI+UrmfDdLkPGLPeMEZUByIIVvUJxMcAGZ2tV4RNPnBG2hErdpgWu1BfEx6y0nKANKP1FXHyndF3DckoTYnzoy5qXXnKAMBOwOaZvGZ5TZmAFwgjKgDhtf/Qn7Zx4sgfQd/6iGUO7JSYDLE5BnmeJJvkHziCTfFP6UvoLi/yjbzWNOUAbUYWOq/yMDySMi+M4JyoDiEfNY+Urzq4HiEa8IghOUAWWHXRAIJyiDDmFznxEOJygDyr+i/LDIQPnSgXGCMmB5k+A4QRlgHjFATlAKeT7Ug3OCtnDlEYs58shw4RFvYkrn0Jp9TO9c2aD/ACKOcD8DifW+AAAAAElFTkSuQmCC"
                                  />
                                </Box>
                                <Img
                                  width="60%"
                                  src={item.img}
                                  style={{
                                    margin: "auto",
                                    borderRadius: "8px",
                                  }}
                                />
                                <Box
                                  style={{
                                    width: "100%",
                                    margin: "auto",
                                    textAlign: "center",
                                  }}
                                >
                                  {" "}
                                  <Text
                                    fontSize={{
                                      sm: "15px",
                                      md: "18px",
                                      lg: "19px",
                                      xl: "20px",
                                      base: "14px",
                                    }}
                                  >
                                    {item.title}
                                  </Text>
                                </Box>
                                <hr
                                  style={{
                                    width: "80%",
                                    margin: "auto",
                                    marginTop: "2%",
                                    marginBottom: "2%",
                                  }}
                                />

                                <Box
                                  style={{
                                    display: "flex",
                                    width: "100%",
                                    margin: "auto",
                                    justifyContent: "space-evenly",
                                  }}
                                >
                                  {" "}
                                  <Text
                                    fontSize={{
                                      sm: "14px",
                                      md: "16px",
                                      lg: "17px",
                                      xl: "18px",
                                      base: "14px",
                                    }}
                                  >
                                    ${item.price}/mo
                                  </Text>
                                  <Text
                                    fontSize={{
                                      sm: "14px",
                                      md: "16px",
                                      lg: "17px",
                                      xl: "18px",
                                      base: "14px",
                                    }}
                                  >
                                    {item.o_price}hrs{" "}
                                    <Img src="https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg" />
                                  </Text>
                                </Box>
                              </Box>
                            </Link>
                          ))}
                      </SimpleGrid>
                    </Box>
                  )}
                </Box>
              </Box>
            </TabPanel>
            <TabPanel>
              {furnitureLoading ? (
                <Img
                  width="15%"
                  style={{ marginLeft: "30%" }}
                  src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif"
                />
              ) : furnitureError ? (
                <Img
                  width="30%"
                  style={{ marginLeft: "30%", borderRadius: "8px" }}
                  src="https://yacht-express.net/wp-content/uploads/2020/12/it-seems-that-something-went-wrong-1-718x602.gif"
                />
              ) : (
                <Box h='max-content' border='1px solid black' >
                  <SimpleGrid
                    border="1px solid red"
                    columns={{
                      sm: "2",
                      md: "2",
                      lg: "4",
                      xl: "4",
                      base: "1",
                    }}
                    style={{
                      gap: "2%",
                    }}
                    w={{ xl: "80%" }}
                    m={{ xl: "0 auto 100px", md: "0 auto 160px" }}
                  >
                    {furniture &&
                      furniture.map((item) => (
                        <Link key={item.id} to={`/wfh/${item.id}`}>
                          <Box
                            width={{
                              sm: "200px",
                              md: "300px",
                              lg: "350px",
                              xl: "350px",
                              base: "200px",
                            }}
                            style={{
                              boxShadow:
                                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                              padding: "3%",
                            }}
                          >
                            <Box
                              style={{
                                marginBottom: "4%",
                              }}
                            >
                              <Img
                                width="7%"
                                style={{
                                  marginLeft: "70%",
                                }}
                                src="data:image/png;base64,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"
                              />
                            </Box>
                            <Img
                              width="60%"
                              src={item.img}
                              style={{
                                margin: "auto",
                                borderRadius: "8px",
                              }}
                            />
                            <Box
                              style={{
                                width: "100%",
                                margin: "auto",
                                textAlign: "center",
                              }}
                            >
                              {" "}
                              <Text
                                fontSize={{
                                  sm: "15px",
                                  md: "18px",
                                  lg: "19px",
                                  xl: "20px",
                                  base: "14px",
                                }}
                              >
                                {item.title}
                              </Text>
                            </Box>

                            <hr
                              style={{
                                width: "80%",
                                margin: "auto",
                                marginTop: "2%",
                                marginBottom: "2%",
                              }}
                            />

                            <Box
                              style={{
                                display: "flex",
                                width: "100%",
                                margin: "auto",
                                justifyContent: "space-evenly",
                              }}
                            >
                              {" "}
                              <Text
                                fontSize={{
                                  sm: "14px",
                                  md: "16px",
                                  lg: "17px",
                                  xl: "18px",
                                  base: "14px",
                                }}
                              >
                                ${item.price}/mo
                              </Text>
                              <Text
                                fontSize={{
                                  sm: "14px",
                                  md: "16px",
                                  lg: "17px",
                                  xl: "18px",
                                  base: "14px",
                                }}
                              >
                                {item.o_price}hrs{" "}
                                <Img src="https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg" />
                              </Text>
                            </Box>
                          </Box>
                        </Link>
                      ))}
                  </SimpleGrid>
                </Box>
              )}
            </TabPanel>
            <TabPanel>
              <Box></Box>

              {FitnessLoading ? (
                <Img
                  width="15%"
                  style={{ marginLeft: "30%" }}
                  src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif"
                />
              ) : FitnessError ? (
                <Img
                  width="30%"
                  style={{ marginLeft: "30%", borderRadius: "8px" }}
                  src="https://yacht-express.net/wp-content/uploads/2020/12/it-seems-that-something-went-wrong-1-718x602.gif"
                />
              ) : (
                <Box>
                  <SimpleGrid
                    columns={{
                      sm: "2",
                      md: "2",
                      lg: "4",
                      xl: "4",
                      base: "1",
                    }}
                    style={{
                      gap: "2%",
                    }}
                  >
                    {Fitness &&
                      Fitness.map((item) => (
                        <Link key={item.id} to={`/wfh/${item.id}`}>
                          <Box
                            width={{
                              sm: "200px",
                              md: "300px",
                              lg: "350px",
                              xl: "350px",
                              base: "200px",
                            }}
                            style={{
                              boxShadow:
                                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                              padding: "3%",
                            }}
                          >
                            <Box
                              style={{
                                marginBottom: "4%",
                              }}
                            >
                              <Img
                                width="7%"
                                style={{
                                  marginLeft: "70%",
                                }}
                                src="data:image/png;base64,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"
                              />
                            </Box>
                            <Img
                              width="60%"
                              src={item.img}
                              style={{
                                margin: "auto",
                                borderRadius: "8px",
                              }}
                            />
                            <Box
                              style={{
                                width: "100%",
                                margin: "auto",
                                textAlign: "center",
                              }}
                            >
                              {" "}
                              <Text
                                fontSize={{
                                  sm: "15px",
                                  md: "18px",
                                  lg: "19px",
                                  xl: "20px",
                                  base: "14px",
                                }}
                              >
                                {item.title}
                              </Text>
                            </Box>
                            <hr
                              style={{
                                width: "80%",
                                margin: "auto",
                                marginTop: "2%",
                                marginBottom: "2%",
                              }}
                            />

                            <Box
                              style={{
                                display: "flex",
                                width: "100%",
                                margin: "auto",
                                justifyContent: "space-evenly",
                              }}
                            >
                              {" "}
                              <Text
                                fontSize={{
                                  sm: "14px",
                                  md: "16px",
                                  lg: "17px",
                                  xl: "18px",
                                  base: "14px",
                                }}
                              >
                                ${item.price}/mo
                              </Text>
                              <Text
                                fontSize={{
                                  sm: "14px",
                                  md: "16px",
                                  lg: "17px",
                                  xl: "18px",
                                  base: "14px",
                                }}
                              >
                                {item.o_price}hrs{" "}
                                <Img src="https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg" />
                              </Text>
                            </Box>
                          </Box>
                        </Link>
                      ))}
                  </SimpleGrid>
                </Box>
              )}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Wfh;
