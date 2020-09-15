import React from "react";
import IphoneIpad from "../images/iphone-ipad.png";
import { Link } from "react-router-dom";
import "../App.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import Store from "../images/store.png";
import Stars from "../images/stars.webp";
import Testi from "../images/testinomial.png";

class Slide extends React.Component {
  render() {
    return (
      <div className="slider-sec">
        {/* <!--- header  --> */}
        <div className="pl-5 pr-5" id="headerImage">
          <div className="pt-5">
            <div class="row px-0 px-2 py-5 ">
              <div class="col-md-3">
                <img src={IphoneIpad} alt="iphone-ipad" className="w-100" />
              </div>
              <div class="col-md-5">
                <h1>Repair Your Broken IPad or IPhone in Brisbane</h1>
                <div className="pt-3 pb-3">
                  <p>
                    We offer cost effective IPhone and IPad screen and logic
                    board repairs in Brisbane
                  </p>
                  <p>
                    All parts used are genuine and are backed by our 12 month
                    warranty
                  </p>
                </div>
                <button
                  type="button"
                  class="btn btn-light text-primary pl-4 pr-4 fontfamilypopRegular font-size18"
                  data-toggle="modal"
                  data-target="#store"
                >
                  Repair now
                </button>
              </div>
              <div class="col align-self-end">
                <span
                  style={{ display: "block" }}
                  className="text-warning ml-3"
                >
                  <b>5.0</b>
                  <img className="mb-1 pl-2" alt="rating" src={Stars} />
                  &#160;&#160;&#160;
                  <span className="text-light">
                    <b>
                      (based on <u>Google Reviews</u>)
                    </b>
                  </span>
                </span>
                <div className="row mt-3">
                  <div className="col-md-3">
                    <img
                      alt="sara"
                      src={Testi}
                      width="75px"
                      className="img mr-5"
                    />
                  </div>
                  <div className="col-md-9 p-0">
                    <span className="text-light">
                      <i>
                        “They’ve helped us tremendously and are seriously
                        knowledgeable and honest. Couldn’t recommend the crew at
                        sprintlaw more!” - <b>Amit, Soul Burger</b>
                      </i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--- Ending of header  --> */}
      </div>
    );
  }
}

export default Slide;
