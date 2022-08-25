import React from "react";
import Carouselhome1 from "../Components/Carouselhome1";
import CarouselReview from "../Components/CarouselReview";
import { RahiHome } from "../Components/RahiHome";
import Categories from "../Components/Categories"
import CarouselReviewHeading from "../misc/CarouselReviewHeading";

const Homepage = () => {
  return (
    <>
      <Carouselhome1 />
      <Categories />
      <br />
      <RahiHome />
      <br />
      <CarouselReviewHeading />
      <CarouselReview />
      <br />
    </>
  );
};

export default Homepage;
