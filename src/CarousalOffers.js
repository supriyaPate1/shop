import Carousel from "react-bootstrap/Carousel";
import React from "react";

export default function CarousalOffers() {
  return (
    <>
      <div style={{ width: "100%", margin: "auto" }}>
        <Carousel>
          <Carousel.Item>
            <div
              style={{
                textAlign: "center",
                backgroundColor: "orange",
                color: "white",
                fontSize: "1.2vw",
                paddingTop: "1%",
                paddingTop: "1%",
              }}
            >
              15% off on selected range of products.
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                textAlign: "center",
                backgroundColor: "orange",
                color: "white",
                fontSize: "1.2vw",
                paddingTop: "1%",
                paddingTop: "1%",
              }}
            >
              No delivery fee applied when ordered above rs. 2000
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                textAlign: "center",
                backgroundColor: "orange",
                color: "white",
                fontSize: "1.2vw",
                paddingTop: "1%",
                paddingTop: "1%",
              }}
            >
              Festive sale coming soon!
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                textAlign: "center",
                backgroundColor: "orange",
                color: "white",
                fontSize: "1.2vw",
                paddingTop: "1%",
                paddingTop: "1%",
              }}
            >
              New products launch soon
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}
