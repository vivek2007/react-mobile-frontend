import React from "react";
import "../App.css";
import Star from "../images/premium-parts.png";
import Unbeatable from "../images/unbeatable-price.png";
import RepairHome from "../images/repair-at-home.png";
import Warranty from "../images/warranty.png";
import Technichians from "../images/technichians.png";
import Guaranteed from "../images/guaranteed.png";

class YMobileExpert extends React.Component {
  render() {
    let WhyExpert = [
      {
        Img: require("../images/premium-parts.png"),
        title: "Premium Parts",
        descrop: "Only the best quality makes it to your phone",
      },
      {
        Img: require("../images/unbeatable-price.png"),
        title: "Unbeatable Prices",
        descrop: "High quality at low prices",
      },
      {
        Img: require("../images/repair-at-home.png"),
        title: "Premium Parts",
        descrop: "Only the best quality makes it to your phone",
      },

      {
        Img: require("../images/warranty.png"),
        title: "6 Months Warranty",
        descrop: "We offer 6 months warranty on screen repair services",
      },
      {
        Img: require("../images/technichians.png"),
        title: "Expert Technicians",
        descrop: "We ensure your phone is always in safe hands",
      },
      {
        Img: require("../images/guaranteed.png"),
        title: "Guaranteed Safety",
        descrop:
          "Be it BuyBack or repair , we are the safest hands for your device security.",
      },
    ];
    return (
      <div className="ymobexpert-block">
        <div className="container pt-4 pb-5">
          <div className="text-center">
            <h1>Why Mobile Expert</h1>
          </div>
          <div className="row">
            {WhyExpert.map((item) => (
              <div className="col-md-4 pt-5">
                <div className="d-flex">
                  <div className="d-flex justify-content-center align-content-center">
                    <img
                      src={item.Img}
                      alt="starImage"
                      className="h-50 align-self-center"
                    />
                  </div>
                  <div className="pl-4">
                    <h5>{item.title}</h5>
                    <p className="fontfamilypoplight font-size14">
                      {item.descrop}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default YMobileExpert;
