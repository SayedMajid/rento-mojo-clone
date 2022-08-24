import React from "react";
import Carouselhome1 from "../Components/Carouselhome1";
import CarouselReview from "../Components/CarouselReview";
import { RahiHome } from "../Components/RahiHome";

const Homepage = () => {
  return (
    <>
      <Carouselhome1 />
      <Categories />
      <RahiHome />
      <CarouselReview />
    </>
  );
};

export default Homepage;
