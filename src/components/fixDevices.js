import React from "react";
import "../App.css";
import IPhone from "../images/iphone-repair.png";
import Tablet from "../images/tablet.png";
import Desktop from "../images/desktop.png";
import Accessories from "../images/accessories.png";

class FixDevices extends React.Component {
  render() {
    /* IPhone Tab Dynamic */
    let IPhoneTab = [
      {
        Img: require("../images/1559295070-iPhone-8.jpg"),
        altTag: "mobile",
        title: " Iphone xs",
      },

      {
        Img: require("../images/1559295070-iPhone-8.jpg"),
        altTag: "mobile",
        title: " Iphone xs",
      },

      {
        Img: require("../images/1559295238-iPhone-XR.jpg"),
        altTag: "mobile",
        title: " Iphone XR",
      },

      {
        Img: require("../images/1559295070-iPhone-8.jpg"),
        altTag: "mobile",
        title: " Iphone X",
      },

      {
        Img: require("../images/1559295070-iPhone-8.jpg"),
        altTag: "mobile",
        title: "Iphone 8",
      },

      {
        Img: require("../images/1559295102-iPhone-8-Plus.jpg"),
        altTag: "mobile",
        title: "Iphone 8 Plus",
      },

      {
        Img: require("../images/1562822529-iphone_7.jpg"),
        altTag: "mobile",
        title: "Iphone 7",
      },

      {
        Img: require("../images/1559295029-iPhone-7-Plus.jpg"),
        altTag: "mobile",
        title: " Iphone 7 plus",
      },

      {
        Img: require("../images/1559294711-iPhone-6-Plus.jpg"),
        altTag: "mobile",
        title: "Iphone 6 plus",
      },

      {
        Img: require("../images/1559294822-iPhone-6s.jpg"),
        altTag: "mobile",
        title: " Iphone 6s",
      },

      {
        Img: require("../images/1559294553-iPhone-5.jpg"),
        altTag: "mobile",
        title: "Iphone 5",
      },

      {
        Img: require("../images/iphone_accessories.jpg"),
        altTag: "mobile",
        title: "Iphone Accessories",
      },
    ];

    /* IPad Tab Dynamic */
    let IPadTab = [
      {
        Img: require("../images/tablet.png"),
        altTag: "mobile",
        title: " Iphone xs",
      },

      {
        Img: require("../images/tablet.png"),
        altTag: "mobile",
        title: " Iphone xs",
      },

      {
        Img: require("../images/tablet.png"),
        altTag: "mobile",
        title: " Iphone xs",
      },

      {
        Img: require("../images/tablet.png"),
        altTag: "mobile",
        title: " Iphone xs",
      },

      {
        Img: require("../images/tablet.png"),
        altTag: "mobile",
        title: " Iphone xs",
      },

      {
        Img: require("../images/tablet.png"),
        altTag: "mobile",
        title: " Iphone xs",
      },

      {
        Img: require("../images/tablet.png"),
        altTag: "mobile",
        title: " Iphone xs",
      },

      {
        Img: require("../images/tablet.png"),
        altTag: "mobile",
        title: " Iphone xs",
      },

      {
        Img: require("../images/tablet.png"),
        altTag: "mobile",
        title: " Iphone xs",
      },

      {
        Img: require("../images/tablet.png"),
        altTag: "mobile",
        title: " Iphone xs",
      },

      {
        Img: require("../images/tablet.png"),
        altTag: "mobile",
        title: " Iphone xs",
      },

      {
        Img: require("../images/tablet.png"),
        altTag: "mobile",
        title: " Iphone xs",
      },
    ];

    /* IPad Tab Dynamic */
    let DesktopTab = [
      {
        Img: require("../images/desktop.png"),
        altTag: "mobile",
        title: " Iphone xs",
      },

      {
        Img: require("../images/desktop.png"),
        altTag: "mobile",
        title: " Iphone xs",
      },

      {
        Img: require("../images/desktop.png"),
        altTag: "mobile",
        title: " Iphone xs",
      },

      {
        Img: require("../images/desktop.png"),
        altTag: "mobile",
        title: " Iphone xs",
      },

      {
        Img: require("../images/desktop.png"),
        altTag: "mobile",
        title: " Iphone xs",
      },

      {
        Img: require("../images/desktop.png"),
        altTag: "mobile",
        title: " Iphone xs",
      },

      {
        Img: require("../images/desktop.png"),
        altTag: "mobile",
        title: " Iphone xs",
      },

      {
        Img: require("../images/desktop.png"),
        altTag: "mobile",
        title: " Iphone xs",
      },

      {
        Img: require("../images/desktop.png"),
        altTag: "mobile",
        title: " Iphone xs",
      },

      {
        Img: require("../images/desktop.png"),
        altTag: "mobile",
        title: " Iphone xs",
      },

      {
        Img: require("../images/desktop.png"),
        altTag: "mobile",
        title: " Iphone xs",
      },

      {
        Img: require("../images/desktop.png"),
        altTag: "mobile",
        title: " Iphone xs",
      },
    ];

    /* Other Tab Dynamic */
    let OtherTab = [
      {
        Img: require("../images/accessories.png"),
        altTag: "mobile",
        title: " Iphone xs",
      },

      {
        Img: require("../images/accessories.png"),
        altTag: "mobile",
        title: " Iphone xs",
      },

      {
        Img: require("../images/accessories.png"),
        altTag: "mobile",
        title: " Iphone xs",
      },

      {
        Img: require("../images/accessories.png"),
        altTag: "mobile",
        title: " Iphone xs",
      },

      {
        Img: require("../images/accessories.png"),
        altTag: "mobile",
        title: " Iphone xs",
      },

      {
        Img: require("../images/accessories.png"),
        altTag: "mobile",
        title: " Iphone xs",
      },

      {
        Img: require("../images/accessories.png"),
        altTag: "mobile",
        title: " Iphone xs",
      },

      {
        Img: require("../images/accessories.png"),
        altTag: "mobile",
        title: " Iphone xs",
      },

      {
        Img: require("../images/accessories.png"),
        altTag: "mobile",
        title: " Iphone xs",
      },

      {
        Img: require("../images/accessories.png"),
        altTag: "mobile",
        title: " Iphone xs",
      },

      {
        Img: require("../images/accessories.png"),
        altTag: "mobile",
        title: " Iphone xs",
      },

      {
        Img: require("../images/accessories.png"),
        altTag: "mobile",
        title: " Iphone xs",
      },
    ];

    return (
      <div className="fixdevices-block">
        <div className="container text-center pt-5">
          <div className="col pt-3 pb-3">
            <h2 className="font-size32 fontfamilypopMedium">
              We Fix All Devices, All Problems{" "}
            </h2>
            <p className="fontfamilypoplight font-size18">
              Get your device repaired in just three easy steps
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="border fourdivsmob">
              <ul className="nav nav-pills">
                <li className="nav-item tab-box">
                  <a
                    className="nav-link active p-2 tabact  "
                    data-toggle="tab"
                    href="#IPhone"
                  >
                    <div className="row align-items-center h-100">
                      <div className="col-5">
                        <img alt="" src={IPhone} className="w-100 h-100" />
                      </div>
                      <div
                        className="col-7 text-center pt-2 fontfamilypoplight font-size18"
                        style={{ paddingLeft: 0 }}
                      >
                        IPhone
                      </div>
                    </div>
                  </a>
                </li>

                <li className="nav-item tab-box">
                  <a
                    className="nav-link  p-2 tabact  "
                    data-toggle="tab"
                    href="#IPad"
                  >
                    <div className="row align-items-center h-100">
                      <div className="col-5">
                        <img
                          alt="tablet"
                          src={Tablet}
                          className="w-100 h-100"
                        />
                      </div>
                      <div
                        className="col-7 text-center pt-2 fontfamilypoplight font-size18"
                        style={{ paddingLeft: 0 }}
                      >
                        Tablet
                      </div>
                    </div>
                  </a>
                </li>
                <li className="nav-item tab-box">
                  <a
                    className="nav-link  p-2 tabact  "
                    data-toggle="tab"
                    href="#Samsung"
                  >
                    <div className="row align-items-center h-100">
                      <div className="col-5">
                        <img alt="" src={Desktop} className="w-100" />
                      </div>
                      <div
                        className="col-7 text-center pt-2 fontfamilypoplight font-size18"
                        style={{ paddingLeft: 0 }}
                      >
                        Desktop
                      </div>
                    </div>
                  </a>
                </li>
                <li className="nav-item tab-box">
                  <a
                    className="nav-link p-2 tabact"
                    data-toggle="tab"
                    href="#other"
                  >
                    <div className="row align-items-center h-100">
                      <div className="col-5">
                        <img alt="" src={Accessories} className="w-100" />
                      </div>
                      <div
                        className="col-7 text-center pt-2 fontfamilypoplight font-size18"
                        style={{ paddingLeft: 0 }}
                      >
                        Other
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-content">
            <div id="IPhone" className="row tab-pane active">
              <div className="container-fluid row p-5">
                {IPhoneTab.map((item) => (
                  <div
                    className="col-2 d-flex  pb-5 align-items-center"
                    style={{ flexDirection: "column" }}
                  >
                    <img src={item.Img} alt={item.altTag} className="w-50" />
                    <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">
                      {item.title}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div id="IPad" className="row tab-pane fade">
              <div className="container-fluid row p-5">
                {IPadTab.map((item) => (
                  <div
                    className="col-2 d-flex  pb-5 align-items-center"
                    style={{ flexDirection: "column" }}
                  >
                    <img src={item.Img} alt={item.altTag} className="w-50" />
                    <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">
                      {item.title}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div id="Samsung" className="row tab-pane fade">
              <div className="container-fluid row p-5">
                {DesktopTab.map((item) => (
                  <div
                    className="col-2 d-flex  pb-5 align-items-center"
                    style={{ flexDirection: "column" }}
                  >
                    <img src={item.Img} alt={item.altTag} className="w-50" />
                    <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">
                      {item.title}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div id="other" className="row tab-pane fade">
              <div className="container-fluid row p-5">
                {OtherTab.map((item) => (
                  <div
                    className="col-2 d-flex  pb-5 align-items-center"
                    style={{ flexDirection: "column" }}
                  >
                    <img src={item.Img} alt={item.altTag} className="w-50" />
                    <button className="btn btn-outline-primary mt-3 font-size9 fontfamilypopMedium">
                      {item.title}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FixDevices;
