import React from "react";
import "../App.css";
import Store from "../images/store.png";
import { FaMapMarkerAlt } from "react-icons/fa";

class Brisbanebg extends React.Component {
  render() {
    /* Fast Repairs Dynamic*/
    let FastRepairs = [
      {
        Img: require("../images/apple-repair.png"),
        altTag: "Apple Repair",
        title: "Apple Repairs Experts",
        descrop:
          "Our Tech are very experienced in providing expert and cost- effective Apple Device repairs, services and upgrades.We are your apple repair experts.",
      },
      {
        Img: require("../images/iphone-ipad.png"),
        altTag: "Iphone ipad",
        title: "IPhone and iPad Repair Brisbane",
        descrop:
          " iPhone repair is our speciality we are one of the original Brisbane service providers for fast high quality iPad pro repairs.",
      },
    ];

    /* MotherBoard Repairs Dynamic*/
    let MotherBoard = [
      {
        Img: require("../images/motherboard-repair.png"),
        altTag: "MotherBoard",
        title: " Apple Repairs Experts",
        descrop:
          "Our Tech are very experienced in providing expert and cost- effective Apple Device repairs, services and upgrades.We are your apple repair experts.",
      },
      {
        Img: require("../images/scree-protect.png"),
        altTag: "ScreenProtect",
        title: "IPhone and iPad Repair Brisbane",
        descrop:
          " iPhone repair is our speciality we are one of the original Brisbane service providers for fast high quality iPad pro repairs.",
      },
    ];
    return (
      <div className="brisbanebg-block">
        <div className="Brisbanebg text-center pt-5">
          <div className="container p-5  mt-5">
            <h1 className="mt-5 mb-5  fontfamilypopMedium font-size32 text-primary bris"></h1>
            <div className="p-5 fontfamilypoplight font-size14">
              <h1 className="mt-5 fontfamilypopMedium font-size32 text-primary">
                IPhone Repair Brisbane
              </h1>
              <p>
                Since the launch of iPhone models , the range of buying iPhones
                and sensitiveness while using such hi-tech devices has been
                discovered among the Aussies . Where as hundreds of new products
                have been said in the past few years, it is less common to find
                a repair service that offers replacement or repair service at
                ease.
              </p>
              <p>
                We at Mobile Expert provide Mobile phone repair in Brisbane that
                comes affordable and conveninet. Be it a dodgy iPhone or
                shattered screen; we deal with all such problems to make your
                iPhone look and work like a new device again.
              </p>
              <p>
                Do you have more questions about broken iPhone screens? Contact
                us for consultation and know the options available for your
                broken devices. Our engineers and customer service executives
                are dedicated to keep you informed of all necessary details.
              </p>
            </div>
          </div>
          <div className="container pl-5 pr-5 pb-5">
            <h2 className=" fontfamilypopMedium font-size32 text-primary">
              Fast Iphone Repairs{" "}
            </h2>
            <p className="mt-4 fontfamilypoplight font-size14">
              In fact a broken screen is one of the most common iPhone issues
              which is caused by drop and average user have to live with a
              broken screen for sometime before upgrading to a new iPhone.
            </p>
            <div className="row pt-4">
              {FastRepairs.map((item) => (
                <div className="col-md-6 pr-4">
                  <div className="row">
                    <div className="col-4 d-flex align-items-center">
                      <img src={item.Img} alt="{item.altTag}" />
                    </div>
                    <div className="col-8 text-left">
                      <h3 className="fontfamilypopMedium font-size24 text-primary">
                        {item.title}
                      </h3>
                      <div className="pt-3 fontfamilypoplight font-size14">
                        <p>{item.descrop}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              className=" text-center "
              style={{
                background: "white",
                marginLeft: -148,
                marginRight: -150,
              }}
            >
              <h3 className=" fontfamilypopMedium font-size32 text-primary my-3 py-3">
                Our MotherBoard Repair Services
              </h3>
            </div>
            <div className="row pt-4">
              {MotherBoard.map((item) => (
                <div className="col-md-6 pr-4">
                  <div className="row flex-row-reverse">
                    <div className="col-4 d-flex align-items-center">
                      <img src={item.Img} alt="{item.altTag}" />
                    </div>
                    <div className="col-8 text-left">
                      <h3 className="fontfamilypopMedium font-size24 text-primary">
                        {item.title}
                      </h3>
                      <div className="pt-3 fontfamilypoplight font-size14">
                        <p>{item.descrop}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>{" "}
            <p
              className="nav-link text-dark btn  justify-content-center"
              id="btnbook"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              BOOK REPAIR
            </p>
          </div>
        </div>
        {/* Model starts here */}
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

export default Brisbanebg;
