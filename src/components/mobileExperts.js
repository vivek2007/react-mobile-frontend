/* eslint-disable no-restricted-globals */
import React from "react";
import "../App.css";

import Store from "../images/store.png";
import { FaMapMarkerAlt } from "react-icons/fa";

class MobileExperts extends React.Component {
  render() {
    let ExpertServices = [
      {
        Img: require("../images/iphone-repair.png"),
        title: "IPhone Repair",
        altTag: "IPhoneRepair",
      },
      {
        Img: require("../images/ipad-repair.png"),
        title: "IPad Repair",
        altTag: "ipadRepair",
      },

      {
        Img: require("../images/samsung-repair.png"),
        title: "Samsung Repair",
        altTag: "SamsungRepair",
      },

      {
        Img: require("../images/mac-repair.png"),
        title: "Macbook Repair",
        altTag: "MacRepair",
      },
      {
        Img: require("../images/laptop-repair.png"),
        title: "Laptop Repair",
        altTag: "LaptopRepair",
      },
      {
        Img: require("../images/motherboard-repair.png"),
        title: "Iphone Motherboard Repair",
        altTag: "MotherRepair",
      },
    ];

    return (
      <div className="mobexperts-block">
        <div className="container">
          <div className=" row ">
            <div
              className="col-md-4 pt-5 pb-5 pr-5 d-flex align-items-center justify-content-center "
              style={{ flexDirection: "column" }}
            >
              <h1 className="fontfamilypopMedium font-size32">
                Mobile expert services
              </h1>
              <p className="fontfamilypoplight font-size18">
                Get your device repaired in just three easy steps
              </p>

              <button
                className="btn btn-outline-primary btn-block p-2 mt-3"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                View Price
              </button>

              <div
                id="modal"
                className="modal w-100"
                style={{ height: "40vh", maxWidth: "750px" }}
              >
                <div className="mt-5">
                  <div className="container">
                    <div class="row">
                      <div className="col">
                        <img
                          src={Store}
                          alt="mobileexpert"
                          class="img text-dark w-75 pl-5"
                        />
                      </div>

                      <div className="col">
                        <h5 className="text-center mt-5">
                          {" "}
                          Select your local Store
                        </h5>
                        <select class="custom-select " id="inputGroupSelect01">
                          <option selected>Choose...</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 pt-3 pb-3">
              <div className="row pt-2 pb-2">
                {ExpertServices.map((item) => (
                  <div className="col-md-4 px-2  pb-3">
                    <div className="col-md-12 feature-box">
                      <img src={item.Img} alt={item.altTag} />
                      <h4 className="fontfamilypopMedium font-size18">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade bd-example-modal-lg"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div
            class="modal-dialog  modal-lg modal-dialog-centered "
            role="document"
          >
            <div
              class="modal-content"
              style={{
                height: "40vh",
                backgroundImage: `url(${Map})`,
                backgroundSize: "cover",
              }}
            >
              <div class="modal-body">
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <div className="container mt-5">
                  <div class="row">
                    <div className="col">
                      <h5 className="text-center mr-5">
                        <u> Select Store </u>
                      </h5>
                      <img
                        src={Store}
                        alt="mobileexpert"
                        class="img color-primary w-75 pl-5"
                      />
                    </div>

                    <div className="col align-self-center">
                      <button
                        className=" btn btn-light"
                        style={{ display: "inline-flex", marginLeft: "70px" }}
                      >
                        <FaMapMarkerAlt className="mt-2" size="40" />
                        <p>
                          <span>
                            <strong style={{ fontSize: "x-large" }}>
                              &#160;&#160;Peddington
                            </strong>
                            <br />
                            &#160;&#160;&#160;brisbane CBD
                          </span>
                        </p>
                      </button>
                      <hr />
                      <button
                        className="btn btn-light "
                        style={{ display: "inline-flex", marginLeft: "70px" }}
                      >
                        <FaMapMarkerAlt className="mt-2" size="40" />
                        <p>
                          <span>
                            <strong style={{ fontSize: "x-large" }}>
                              &#160;&#160;&#160;&#160;Calamvale
                            </strong>
                            <br />
                            &#160;&#160;&#160;&#160;&#160;&#160;South brisbane
                          </span>
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MobileExperts;
