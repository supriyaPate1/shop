import React from "react";
import Reviews from "./Reviews";
import CarousalProducts from "./CarousalProducts";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import Carousal from "./Carousals";
import About from "./About";
import "./shop.css";

export default function Home() {
  //func to move to top of the page
  const moveTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Carousal />
      <CarousalProducts />
      <Reviews />
      <div className="moveTop">
        <KeyboardDoubleArrowUpIcon onClick={moveTop} />
      </div>
      <About />
    </>
  );
}
