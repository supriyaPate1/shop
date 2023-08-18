import Carousel from "react-bootstrap/Carousel";
import React from "react";
import "./carousalproduct.css";
import { Link } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
export default function Carousal() {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          width: "98%",
          margin: "auto",
          marginTop: "10px",
          cursor: "pointer",
        }}
      >
        <Carousel>
          <Carousel.Item>
            <img
              onClick={() => {
                navigate("/shop");
              }}
              className="d-block w-100"
              src="https://d2s7hpbx4rtiif.cloudfront.net/sparsh/banner/image/o/k/ok_play_1920x375.jpg"
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              onClick={() => {
                navigate("/shop");
              }}
              className="d-block w-100"
              src="https://d2s7hpbx4rtiif.cloudfront.net/sparsh/banner/image/a/c/action-figures-hp.jpg"
              alt="Second slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            {" "}
            <img
              onClick={() => {
                navigate("/shop");
              }}
              className="d-block w-100"
              src="https://d2s7hpbx4rtiif.cloudfront.net/sparsh/banner/image/m/a/made-in-india-store-pc.jpg"
              alt="Third slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              onClick={() => {
                navigate("/shop");
              }}
              className="d-block w-100"
              src="https://d2s7hpbx4rtiif.cloudfront.net/sparsh/banner/image/1/9/1920x375_lego_main_1.jpg"
              alt="Third slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="services">
        <div>
          <img src="toyshop (1).png" alt="toy" />
          <h5>Give us a call</h5>
          <p>or whatsapp on 5577783290</p>
        </div>
        <div>
          <img src="toyshop (2).png" alt="toy" />
          <h5>Bulk Inquiry</h5>
          <p>Email: sup@gmail.com</p>
        </div>
        <div>
          <img src="toyshop.png" alt="toy" />
          <h5>Free shipping</h5>
          <p> on everything</p>
        </div>
        <div>
          <img src="toyshop (4).png" alt="toy" />
          <h5>Quality Assurance</h5>
          <p>Every product is of high quality</p>
        </div>
      </div>
      <div className="Pictures2">
        <div>
          <img
            onClick={() => {
              navigate("/shop");
            }}
            src="https://d2s7hpbx4rtiif.cloudfront.net/wysiwyg/Giggles-01.jpg"
            alt="toy"
          />
        </div>
        <div>
          <img
            onClick={() => {
              navigate("/shop");
            }}
            src="https://d2s7hpbx4rtiif.cloudfront.net/wysiwyg/Factory_Sale_2000x1000-min.jpg"
            alt="toy"
          />
        </div>
      </div>
      <Outlet />
    </>
  );
}
