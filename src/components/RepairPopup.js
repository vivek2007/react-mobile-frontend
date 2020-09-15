import React, { Component } from "react";
// import {
//   Container,
//   Row,
//   Col,
//   Button,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   FormText,
// } from "reactstrap";
import IphoneIpad from "../images/iphone-ipad.png";
import { Link } from "react-router-dom";
import "../App.css";
import Logo from "../images/logo.png";
import Logo_white from "../images/popup_tansparent.png";

import Map from "../images/map.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import Store from "../images/store.png";
import Stars from "../images/stars.webp";
import Testi from "../images/testinomial.png";

import Googlepixel from "../images/googlepixel.png";
import SamsungLogo from "../images/samsung-logo.png";
import Hplogo from "../images/hp-logo.png";
import Sonylogo from "../images/sony-logo.png";

import Applelogo from "../images/apple_brand.png";
import Windowslogo from "../images/windows_brand.png";

import IphoneRepair from "../images/iphone-repair.png";
import IpadRepair from "../images/ipad-repair.png";
import SamsungRepair from "../images/samsung-repair.png";
import MacRepair from "../images/mac-repair.png";
import LaptopRepair from "../images/laptop-repair.png";
import MotherRepair from "../images/motherboard-repair.png";
import { Form } from "reactstrap";

class RepairPopup extends React.Component {
  constructor(props, context) {
    super(props, context);

    //Step form Function
    this.state = {
      info1: true,
      info2: false,
      info3: false,
      info4: false,
      info5: false,
      info6: false,
      info7: false,
      showBasic: true,
      showCertInfo: false,
      showSocialInfo: false,
      showContactInfo: false,
      showStep5: false,
      showStep6: false,
      showStep7: false,
      price: "-",
      Location: "",
      ChoseBrand: "",
      ChoseDevise: "",
      MobileDevise: "",
      MarketCost: "",
      PremiumCost: "",
      Date: "",
      Time: "",
      Name: "",
      Phone: "",
      Email: "",
    };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.handleBasic = this.handleBasic.bind(this);
    this.handleContactInfo = this.handleContactInfo.bind(this);
    this.handleCertInfo = this.handleCertInfo.bind(this);
    this.handleSocialInfo = this.handleSocialInfo.bind(this);
    this.handleStep5 = this.handleStep5.bind(this);
    this.handleStep6 = this.handleStep6.bind(this);
    this.handleStep7 = this.handleStep7.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handlePriceValue = this.handlePriceValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLocate = this.handleLocate.bind(this);
    this.handleBrand = this.handleBrand.bind(this);
    this.handleDevise = this.handleDevise.bind(this);
    this.handleMbDevise = this.handleMbDevise.bind(this);
    this.handleMarketPrice = this.handleMarketPrice.bind(this);
    this.handlePremiumPrice = this.handlePremiumPrice.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  }

  show() {
    this.setState({ showCertInfo: true });
  }
  hide() {
    this.setState({ showCertInfo: false });
  }

  handleBasic(e) {
    e.preventDefault();

    // this.setState({ showBasic: false });
    // this.setState({ showCertInfo: false });
    this.setState({
      showBasic: true,
      info1: true,
      showContactInfo: false,
      info2: false,
      showSocialInfo: false,
      info3: false,
      info4: false,
      info5: false,
      info6: false,
      info7: false,
    });
  }

  handleContactInfo(e) {
    e.preventDefault();

    this.setState({
      showBasic: false,
      info1: false,
      showContactInfo: true,
      info2: true,
      showSocialInfo: false,
      info3: false,
      info4: false,
      info5: false,
      info6: false,
      info7: false,
    });
  }

  handleCertInfo(e) {
    e.preventDefault();

    //if(this.handleValidation()){
    this.setState({
      showBasic: false,
      info1: false,
      showContactInfo: false,
      info2: false,
      showCertInfo: true,
      info3: true,
      showSocialInfo: false,
      info4: false,
      info5: false,
      info6: false,
      info7: false,
    });
    //}
  }

  handleSocialInfo(e) {
    e.preventDefault();
    //if(this.handleValidation()){

    this.setState({
      showBasic: false,
      info1: false,
      showContactInfo: false,
      info2: false,
      showCertInfo: false,
      info3: false,
      showSocialInfo: true,
      info4: true,
      info5: false,
      info6: false,
      info7: false,
    });
    //}
  }

  handleStep5(e) {
    e.preventDefault();

    this.setState({
      showBasic: false,
      info1: false,
      showContactInfo: false,
      info2: false,
      showCertInfo: false,
      info3: false,
      showSocialInfo: false,
      info4: false,
      showStep5: true,
      info5: true,
      info6: false,
      info7: false,
    });
    //}
  }

  handleStep6(e) {
    e.preventDefault();
    this.setState({
      showBasic: false,
      info1: false,
      showContactInfo: false,
      info2: false,
      showCertInfo: false,
      info3: false,
      showSocialInfo: false,
      info4: false,
      showStep5: false,
      info5: false,
      showStep6: true,
      info6: true,
      info7: false,
    });
    //}
  }

  handleStep7(e) {
    e.preventDefault();
    //alert('2');

    this.setState({
      showBasic: false,
      info1: false,
      showContactInfo: false,
      info2: false,
      showCertInfo: false,
      info3: false,
      showSocialInfo: false,
      info4: false,
      showStep5: false,
      info5: false,
      showStep6: false,
      info6: false,
      showStep7: true,
      info7: true,
    });
  }

  handleClose(e) {
    e.preventDefault();
    //alert('2');

    this.setState({
      showBasic: true,
      info1: true,
      showContactInfo: false,
      info2: false,
      showCertInfo: false,
      info3: false,
      showSocialInfo: false,
      info4: false,
      showStep5: false,
      info5: false,
      showStep6: false,
      info6: false,
      showStep7: false,
      info7: false,
    });
  }
  handlePriceValue(priceVal) {
    this.setState({ price: priceVal });
  }

  handleLocate(e) {
    e.preventDefault();
    this.setState(
      {
        Location: e.target.id,
      },
      () => {
        console.log("Location", this.state.Location);
      }
    );
  }

  handleBrand(e) {
    e.preventDefault();

    this.setState(
      {
        ChoseBrand: e.target.id,
      },
      () => {
        console.log("ChoseBrand", this.state.ChoseBrand);
      }
    );
  }

  handleDevise(e) {
    e.preventDefault();

    this.setState(
      {
        ChoseDevise: e.target.id,
      },
      () => {
        console.log("ChoseDevise", this.state.ChoseDevise);
      }
    );
  }

  handleMbDevise(e) {
    e.preventDefault();

    this.setState(
      {
        MobileDevise: e.target.id,
      },
      () => {
        console.log("MobileDevise", this.state.MobileDevise);
      }
    );
  }

  handleMarketPrice(e) {
    e.preventDefault();

    this.setState(
      {
        MarketCost: e.target.id,
      },
      () => {
        console.log("MarketCost", this.state.MarketCost);
      }
    );
  }

  handlePremiumPrice(e) {
    e.preventDefault();

    this.setState(
      {
        PremiumCost: e.target.id,
      },
      () => {
        console.log("PremiumCost", this.state.PremiumCost);
      }
    );
  }

  handleDate(e) {
    e.preventDefault();

    this.setState(
      {
        Date: e.target.id,
      },
      () => {
        console.log("Date", this.state.Date);
      }
    );
  }

  handleTime(e) {
    e.preventDefault();

    this.setState(
      {
        Time: e.target.id,
      },
      () => {
        console.log("Time", this.state.Time);
      }
    );
  }

  handleName(e) {
    e.preventDefault();

    this.setState(
      {
        Name: e.target.id,
      },
      () => {
        console.log("Value", this.state.Name);
      }
    );
  }

  handlePhone(e) {
    e.preventDefault();

    this.setState(
      {
        Phone: e.target.id,
      },
      () => {
        console.log("Value", this.state.Phone);
      }
    );
  }

  handleEmail(e) {
    e.preventDefault();

    this.setState(
      {
        Email: e.target.id,
      },
      () => {
        console.log("Value", this.state.Email);
      }
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.Location);
    console.log(this.state.ChoseBrand);
    console.log(this.state.ChoseDevise);
    console.log(this.state.MobileDevise);
    console.log(this.state.MarketCost);
    console.log(this.state.PremiumCost);
    console.log(this.state.Date);
    console.log(this.state.Time);
  }

  render() {
    /* Local Store */
    let LocalStore = [
      { city: "Peddington", area: " brisbane CBD" },
      {
        city: "Calamvale",
        area: " South brisbane",
      },
    ];

    /* Chose Brand */
    let ChoseBrand = [
      {
        Img: require("../images/googlepixel.png"),
        Id: "googlepixel",
      },
      {
        Img: require("../images/samsung-logo.png"),
        Id: "samsung",
      },
      {
        Img: require("../images/hp-logo.png"),
        Id: "hp",
      },
      {
        Img: require("../images/sony-logo.png"),
        Id: "sony",
      },
      {
        Img: require("../images/apple_brand.png"),
        Id: "apple",
      },
      {
        Img: require("../images/windows_brand.png"),
        Id: "windows",
      },
    ];

    /* Chose Devise */
    let ChoseDevise = [
      {
        Img: require("../images/iphone-repair.png"),
        title: "IPhone Repair",
        Id: "IPhone",
      },
      {
        Img: require("../images/ipad-repair.png"),
        title: "Ipad Repair",
        Id: "Ipad",
      },
      {
        Img: require("../images/mac-repair.png"),
        title: "Mac Repair",
        Id: "Mac",
      },
      {
        Img: require("../images/motherboard-repair.png"),
        title: "Motherboard Repair",
        Id: "Motherboard",
      },
      {
        Img: require("../images/motherboard-repair.png"),
        title: " Watch",
        Id: "Watch",
      },
      {
        Img: require("../images/motherboard-repair.png"),
        title: " Watch",
        Id: "Watch",
      },
    ];

    /* Mobile Devise */
    let MobileDevise = [
      {
        Img: require("../images/1559295070-iPhone-8.jpg"),
        title: "IPhone 8",
        Id: "IPhone8",
      },
      {
        Img: require("../images/1559295070-iPhone-8.jpg"),
        title: "IPhone 8 Plus",
        Id: "IPhone8Plus",
      },
      {
        Img: require("../images/1559295238-iPhone-XR.jpg"),
        title: "IPhone XR",
        Id: "IPhoneXR",
      },
      {
        Img: require("../images/1559295070-iPhone-8.jpg"),
        title: "IPhone 8",
        Id: "IPhone8",
      },
      {
        Img: require("../images/1559295070-iPhone-8.jpg"),
        title: "IPhone 8",
        Id: "IPhone8",
      },
      {
        Img: require("../images/1559295070-iPhone-8.jpg"),
        title: "IPhone 8",
        Id: "IPhone8",
      },
    ];

    /* Chose Services */
    let ChoseServices = [
      {
        ServiceType: "Broken Screen",
        MarketPrice: "Aftermarket Part",
        MRprice: "$59 inc GST",
        PremiumPrice: "Premium Part",
        PRprice: "$290 inc GST",
        ID: "exampleCheck1",
      },
      {
        ServiceType: "Battery Replacement",
        MarketPrice: "Aftermarket Part",
        MRprice: " $59 inc GST",
        PremiumPrice: "Premium Part",
        PRprice: "$290 inc GST",
        ID: "exampleCheck2",
      },
      {
        ServiceType: "Water Damage",
        MarketPrice: "Aftermarket Part",
        MRprice: " $59 inc GST",
        PremiumPrice: "Premium Part",
        PRprice: "$290 inc GST",
        ID: "exampleCheck3",
      },
    ];

    /* Chose Date&Time */
    let DateTime = [
      {
        week: "Sun",
        month: "Aug 23",
      },
      {
        week: "Mon",
        month: "Aug 24",
      },
      {
        week: "The",
        month: "Aug 25",
      },
      {
        week: "Wed",
        month: "Aug 26",
      },
      {
        week: "Thu",
        month: "Aug 27",
      },
      {
        week: "Fri",
        month: "Aug 28",
      },
    ];

    let TimeLoop1 = [
      {
        Time: "9AM - 11AM",
      },
      {
        Time: "11AM - 1PM",
      },
      {
        Time: "1PM - 3PM",
      },
    ];

    let TimeLoop2 = [
      {
        Time: "3PM - 5PM",
      },
      {
        Time: " 9AM - 11AM",
      },
      {
        Time: "5PM - 7PM",
      },
    ];

    return (
      <div
        className="modal fade bd-example-modal-lg"
        id="store"
        tabindex="-1"
        role="dialog"
        aria-labelledby="storeTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-md modal-lg" role="document">
          <div
            className="modal-content"
            style={{
              height: "80vh",
            }}
          >
            <div className="modal-header">
              {" "}
              <img src={Logo_white} alt="logo" className="mr-auto" />{" "}
              <button
                type="button"
                className="close position-absolute"
                data-dismiss="modal"
                aria-label="Close"
                onClick={this.handleClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body align-items-center h-100 overflow-auto">
              <Form onSubmit={this.handleSubmit}>
                {this.state.showBasic ? (
                  <div className="step1 h-100">
                    <div className="h-100">
                      <div className="row align-items-center h-100 ">
                        <div className="col-12">
                          <div className="row">
                            <div className="col-12 text-center mb-5">
                              <h5 className="text-center my-2 heading-title">
                                Select Your Local Store
                              </h5>
                              <p className="pb-2 subtitle">
                                Please select your near store by selection
                                Button
                              </p>
                            </div>
                            {LocalStore.map((item) => (
                              <div className="col-12 text-center">
                                <button
                                  className="btn btn-outline-primary mb-4 d-flex mx-auto"
                                  id="location"
                                  onClick={this.handleContactInfo}
                                >
                                  <FaMapMarkerAlt
                                    className="mt-2 mr-3"
                                    size="40"
                                  />
                                  <p
                                    className="text-left mb-2"
                                    onClick={this.handleLocate}
                                  >
                                    <span>
                                      <strong
                                        style={{
                                          fontSize: "x-large",
                                          display: "block",
                                        }}
                                        id={item.city}
                                      >
                                        {item.city}
                                      </strong>
                                      {item.area}
                                      <input
                                        type="hidden"
                                        value={this.state.Location}
                                      />
                                    </span>
                                  </p>
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}

                {this.state.showContactInfo ? (
                  <div className="step2  h-100">
                    <div className="row h-100  align-items-center ">
                      <div className="col-12">
                        <div className="row text-center text-lg-left">
                          <div className="col-12 text-center mb-3">
                            <h5 className="text-center my-2 heading-title">
                              Chose Your Brand
                            </h5>
                            <p className="pb-2 subtitle">
                              Please select your near store by selection Button
                            </p>
                          </div>
                        </div>
                        <div className="row align-items-center text-center  select-phonebrand">
                          {ChoseBrand.map((item, index) => (
                            <div className="col-lg-4 col-md-4 col-4">
                              <a
                                href="#"
                                className="d-block mb-4 h-100"
                                onClick={this.handleCertInfo}
                              >
                                <img
                                  className="img-fluid img-thumbnail"
                                  src={item.Img}
                                  alt=""
                                  id={item.Id}
                                  onClick={this.handleBrand}
                                />
                                <input
                                  type="hidden"
                                  value={this.state.ChoseBrand}
                                />
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}

                {this.state.showCertInfo ? (
                  <div className="step3  h-100">
                    <div className="row h-100  align-items-center">
                      <div className="col-12">
                        <div className="row text-center text-lg-left align-items-center">
                          <div className="col-12 text-center mb-3">
                            <h5 className="text-center my-2 heading-title">
                              Chose Your Devise
                            </h5>
                            <p className="pb-2 subtitle">
                              Please select your near store by selection Button
                            </p>
                          </div>
                        </div>
                        <div className="row align-items-center text-center select-phone">
                          {ChoseDevise.map((item) => (
                            <div className="col-lg-4 col-md-4 col-4">
                              <a
                                href="#"
                                className="d-block mb-3 h-100"
                                onClick={this.handleSocialInfo}
                              >
                                <img
                                  src={item.Img}
                                  alt="ipadRepair"
                                  id={item.Id}
                                  onClick={this.handleDevise}
                                />

                                <h4 className="fontfamilypopMedium font-size16 my-3">
                                  {item.title}
                                </h4>
                                <input
                                  type="hidden"
                                  value={this.state.ChoseDevise}
                                />
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}

                {this.state.showSocialInfo ? (
                  <div className="step4  h-100">
                    <div className="row h-100  align-items-center">
                      <div className="col-12">
                        <div className="row text-center text-lg-left align-items-center">
                          <div className="col-12 text-center mb-3">
                            <h5 className="text-center my-2 heading-title">
                              Chose Your Devise
                            </h5>
                            <p className="pb-2 subtitle">Chose Your Model</p>
                          </div>
                        </div>
                        <div className="row align-items-center text-center select-phone">
                          {MobileDevise.map((item) => (
                            <div className="col-lg-4 col-md-4 col-6">
                              <a
                                href="#"
                                className="d-block mb-3 h-100"
                                onClick={this.handleStep5}
                              >
                                <img
                                  className="img-fluid img-thumbnail"
                                  src={item.Img}
                                  alt=""
                                  id={item.Id}
                                  onClick={this.handleMbDevise}
                                />

                                <h4 className="fontfamilypopMedium font-size16 my-3">
                                  {item.title}
                                </h4>
                                <input
                                  type="hidden"
                                  value={this.state.MobileDevise}
                                />
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}

                {this.state.showStep5 ? (
                  <div className="step5  h-100">
                    {" "}
                    <div className="row">
                      <div className="col-12">
                        <div className="row position-absolute w-100 border-bottom">
                          <div className="col-4 py-3">Iphone XS Max</div>
                          <div className="col-4"></div>
                          <div className="col-4 py-3 text-right">
                            {this.state.price} ins GST & Repair
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row h-100  align-items-center">
                      <div className="col-12">
                        <div className="row text-center text-lg-left align-items-center">
                          <div className="col-12 text-center mb-3">
                            <h5 className="text-center my-2 heading-title">
                              Chose Your Devise
                            </h5>
                            <p className="pb-2 subtitle">What's the issue?</p>
                          </div>
                        </div>
                        <div className="row align-items-center text-left select-phone">
                          <div className="col-12">
                            <div id="accordion">
                              {ChoseServices.map((item, index) => (
                                <div className="card">
                                  <div
                                    className="card-header"
                                    id={"headingOne" + index}
                                  >
                                    <h5 className="mb-0">
                                      <button
                                        className="btn btn-link"
                                        data-toggle="collapse"
                                        data-target={"#collapseOne" + index}
                                        aria-expanded="true"
                                        aria-controls={"collapseOne" + index}
                                      >
                                        <div className="form-check">
                                          <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id={item.ID}
                                          />
                                          <label
                                            className="form-check-label"
                                            // for={item.ID}
                                          >
                                            {item.ServiceType}
                                          </label>
                                        </div>
                                      </button>
                                    </h5>
                                  </div>

                                  <div
                                    id={"collapseOne" + index}
                                    className="collapse"
                                    aria-labelledby={"headingOne" + index}
                                    data-parent="#accordion"
                                  >
                                    <div className="card-body">
                                      <div className="list-group flex-row">
                                        <button
                                          type="button"
                                          className="list-group-item list-group-item-action"
                                          onClick={() =>
                                            this.handlePriceValue("$59")
                                          }
                                        >
                                          <span
                                            id={item.MRprice}
                                            onClick={this.handleMarketPrice}
                                          >
                                            {item.MarketPrice}
                                            <br />
                                            {item.MRprice}
                                            <input
                                              type="hidden"
                                              value={this.state.MarketCost}
                                            />
                                          </span>
                                        </button>
                                        <button
                                          type="button"
                                          className="list-group-item list-group-item-action"
                                          onClick={() =>
                                            this.handlePriceValue("$290")
                                          }
                                        >
                                          <span
                                            id={item.PRprice}
                                            onClick={this.handlePremiumPrice}
                                          >
                                            {item.PremiumPrice}
                                            <br />
                                            {item.PRprice}
                                            <input
                                              type="hidden"
                                              value={this.state.PremiumCost}
                                            />
                                          </span>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="col-lg-12">
                            <button
                              className="btn btn-primary btn-block p-2 mt-3 btn-lg"
                              onClick={this.handleStep6}
                            >
                              Continue
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}

                {this.state.showStep6 ? (
                  <div className="step6  h-100">
                    {" "}
                    <div className="row">
                      <div className="col-12">
                        <div className="row position-absolute w-100 border-bottom">
                          <div className="col-4 py-3">Iphone XS Max</div>
                          <div className="col-4"></div>
                          <div className="col-4 py-3 text-right">
                            {this.state.price} ins GST & Repair
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row h-100  align-items-center">
                      <div className="col-12">
                        <div className="row text-center text-lg-left align-items-center">
                          <div className="col-12 text-center mb-3">
                            <h5 className="text-center my-2 heading-title">
                              Date & Time
                            </h5>
                            <p className="pb-2 subtitle">
                              Pick a date and time for your appointment, and
                              we'll be there
                            </p>
                          </div>
                        </div>
                        <div className="row align-items-center text-left select-phone">
                          <div className="col-12">
                            <ul className="list-group flex-row mb-3 text-center">
                              {DateTime.map((item) => (
                                <button
                                  type="button"
                                  className="list-group-item list-group-item-action border flex-fill px-1"
                                  id={item.month}
                                  onClick={this.handleDate}
                                >
                                  {item.week}
                                  <br /> {item.month}
                                  <input
                                    type="hidden"
                                    value={this.state.Date}
                                  />
                                </button>
                              ))}
                            </ul>
                          </div>

                          <div className="col-12 mb-3">
                            <div className="list-group flex-row text-center w-100">
                              {TimeLoop1.map((item) => (
                                <button
                                  type="button"
                                  className="list-group-item list-group-item-action border"
                                  id={item.Time}
                                  onClick={this.handleTime}
                                >
                                  {item.Time}
                                  <input
                                    type="hidden"
                                    value={this.state.Time}
                                  />
                                </button>
                              ))}
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="list-group flex-row text-center">
                              {TimeLoop2.map((item) => (
                                <button
                                  type="button"
                                  className="list-group-item list-group-item-action border"
                                  id={item.Time}
                                  onClick={this.handleTime}
                                >
                                  {item.Time}
                                  <input
                                    type="hidden"
                                    value={this.state.Time}
                                  />
                                </button>
                              ))}
                            </div>
                          </div>

                          <div className="col-lg-12">
                            <button
                              className="btn btn-primary btn-block p-2 mt-3 btn-lg"
                              onClick={this.handleStep7}
                            >
                              Continue
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}

                {this.state.showStep7 ? (
                  <div className="step7  h-100">
                    {" "}
                    <div className="row">
                      <div className="col-12">
                        <div className="row position-absolute w-100 border-bottom">
                          <div className="col-4 py-3">Iphone XS Max</div>
                          <div className="col-4"></div>
                          <div className="col-4 py-3 text-right">
                            {this.state.price} ins GST & Repair
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row h-100  align-items-center">
                      <div className="col-12">
                        <div className="row text-center text-lg-left align-items-center">
                          <div className="col-12 text-center mb-3">
                            <h5 className="text-center my-2 heading-title">
                              Almost Done
                            </h5>
                            <p className="pb-2 subtitle">
                              Enter your contact info to finalize your
                              appointment
                            </p>
                          </div>
                        </div>
                        <div className="row align-items-center text-left select-phone">
                          <div className="col-12">
                            <form
                              id="contact-form"
                              name="contact-form"
                              action="mail.php"
                              method="POST"
                            >
                              <div className="row mb-2">
                                <div className="col-md-12">
                                  <div className="md-form">
                                    <label for="subject" className="">
                                      Full Name
                                    </label>
                                    <input
                                      type="text"
                                      id="subject"
                                      name="subject"
                                      className="form-control form-control-lg"
                                      value=""
                                      id="Name"
                                      onClick={this.handleName}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row mb-2">
                                <div className="col-md-6">
                                  <div className="md-form">
                                    <label for="name" className="">
                                      Phone
                                    </label>
                                    <input
                                      type="text"
                                      id="name"
                                      name="name"
                                      value=""
                                      className="form-control form-control-lg"
                                      id="Phone"
                                      onClick={this.handlePhone}
                                    />
                                  </div>
                                </div>

                                <div className="col-md-6">
                                  <div className="md-form">
                                    <label for="email" className="">
                                      Your email
                                    </label>
                                    <input
                                      type="text"
                                      id="email"
                                      name="email"
                                      value=""
                                      className="form-control form-control-lg"
                                      id="Email"
                                      onClick={this.handleEmail}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="form-group">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="gridCheck"
                                  />
                                  <label
                                    className="form-check-label"
                                    for="gridCheck"
                                  >
                                    Send me notifications about this appointment
                                    via text message
                                  </label>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div className="col-lg-12">
                            <button
                              className="btn btn-secondary btn-lg disabled btn-block p-2 mt-3 disabled btn-lg"
                              title="Update"
                              onClick={this.handleSubmit}
                            >
                              Book Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RepairPopup;
