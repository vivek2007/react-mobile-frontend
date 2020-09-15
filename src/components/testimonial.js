import React from "react";
import "../App.css";
import Customer1 from "../images/customer-01.jpg";
import Customer2 from "../images/customer-02.jpg";
import Customer3 from "../images/customer-03.jpg";

class Testimonial extends React.Component {
  render() {
    let Testimonial = [
      {
        Img: require("../images/customer-01.jpg"),
        name: "Alex",
        designation: "Adapt Leadership",
        descrop:
          "“Can't speak highly enough of my experience with Sprintlaw - quality advice, fast and efficient responsiveness and a professional product.”",
      },

      {
        Img: require("../images/customer-02.jpg"),
        name: "Emmy",
        designation: "Kiindred",
        descrop:
          "“I had a fantastic experience with Sprintlaw - it was easy, cost-effective and their lawyers provided very high quality advice. I could tell they really cared about my",
      },

      {
        Img: require("../images/customer-03.jpg"),
        name: "Amit",
        designation: "Soul Burger",
        descrop:
          "“They’ve helped us tremendously and are seriously knowledgeable and honest. Couldn’t recommend the crew at Sprintlaw more!”",
      },
    ];
    return (
      <div className="testimonial-block">
        <div className="customer">
          <div className="container">
            <div className="banner">
              <div className="title testitbg">
                <h1 className="title-section white text-center">
                  {" "}
                  We’ve helped over 10,000{" "}
                </h1>
                <h1 className="title-section white text-center">
                  Australian businesses
                </h1>
                <p className="text-center font-size16">
                  We help Australian businesses across all industries – from
                  tech startups in Sydney to.
                </p>
                <p className="text-center font-size16">
                  restaurants in Alice Springs.{" "}
                  <span className="testigore">Read our Google reviews.</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card" style={{ height: 329 }}>
          <div className="container">
            <div className="row owl-carousel owl-theme js-carousel-customer">
              {Testimonial.map((item) => (
                <div className="col">
                  <div className="profil">
                    <div className="image">
                      <img
                        alt=""
                        className="lazyloaded lazy-loaded"
                        src={item.Img}
                      />
                    </div>
                    <div className="text">
                      <h3 className="mb-2">{item.name}</h3>
                      <div className="mb-2">{item.designation}</div>
                      <div className="mb-4">
                        <span className="fa fa-star mr-1"></span>
                        <span className="fa fa-star mr-1"></span>
                        <span className="fa fa-star mr-1"></span>
                        <span className="fa fa-star mr-1"></span>
                        <span className="fa fa-star-o mr-1"></span>
                      </div>
                    </div>
                  </div>
                  <div className="description mt-4">
                    <p className="text-primary testmtext">{item.descrop}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Testimonial;
