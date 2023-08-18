import Carousel from "react-bootstrap/Carousel";
import React from "react";
import "./carousalproduct.css";
export default function Reviews() {
  return (
    <>
      <div style={{ width: "98%", margin: "auto", marginTop: "10px" }}>
        <Carousel>
          <Carousel.Item>
            <div className="reviews">
              <div className="ContentREV">
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtRvPMUzZ_o0u5rNLUdXTIPDB8mF-eL2fFQg&usqp=CAU"
                    alt="card cap3"
                  />
                  <p>
                    I am a happy customer of this site. Thank you for always
                    providing me what I need.
                  </p>
                  <h6>Sharad Verma, Gomtinagar</h6>
                </div>
                <div>
                  <img
                    src="https://i0.wp.com/www.sarita.in/wp-content/uploads/2018/02/beautiful-woman-at-the-office-1.jpg?resize=825%2C510&ssl=1"
                    alt="card cap2"
                  />
                  <p>
                    This site gives one of the best toys for my children. Thanks
                  </p>
                  <h6>Shivanshi Patel, Indra nagar</h6>
                </div>
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwUPMel-LnSYNwktcuzQ9xHCwOIPFiAu2B1A&usqp=CAU"
                    alt="card cap3"
                  />
                  <p>
                    Hassle free shopping and fast deliveries always. Thank you.
                  </p>
                  <h6>Neeraj Verma, Nishatganj</h6>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="reviews">
              <div className="ContentREV">
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsUqwJnkDdtLKwTOaTDuxVmnQeEcqiu3i_OQ&usqp=CAU"
                    alt="card cap3"
                  />
                  <p>
                    I am a happy customer of this site. Thank you for always
                    providing me what I need.
                  </p>
                  <h6>Roshani Singh, Gomtinagar</h6>
                </div>
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-avmPVTFmCO8B8vuebQJxXSWMfUXAHKZzbw&usqp=CAU"
                    alt="card cap2"
                  />
                  <p>
                    This site gives one of the best toys for my children. Thanks
                  </p>
                  <h6>Trishna Verma, Indra nagar</h6>
                </div>
                <div>
                  <img
                    src="https://thumbs.dreamstime.com/b/businessman-going-to-office-bicycle-man-enjoying-music-using-earphones-commuting-biking-listening-137836287.jpg"
                    alt="card cap3"
                  />
                  <p>
                    Hassle free shopping and fast deliveries always. Thank you.
                  </p>
                  <h6>Harsh Verma, Nishatganj</h6>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}
