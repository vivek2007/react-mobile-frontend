import React from "react";
import "../App.css";

class CommonIssues extends React.Component {
  render() {
    let CommonIssues = [
      {
        Img: require("../images/screen_break.png"),
        title: "Screen",
        altTag: "screen",
      },
      {
        Img: require("../images/battery.png"),
        title: "Battery",
        altTag: "battery",
      },

      {
        Img: require("../images/mic.png"),
        title: "Mic",
        altTag: "mic",
      },
      {
        Img: require("../images/call.png"),
        title: "Reciever",
        altTag: "call",
      },
      {
        Img: require("../images/usb.png"),
        title: "Charging",
        altTag: "usb",
      },
      {
        Img: require("../images/speaker.png"),
        title: "Speaker",
        altTag: "speaker",
      },
      {
        Img: require("../images/screen.png"),
        title: "Proximity Sensor",
        altTag: "screen",
      },
      {
        Img: require("../images/jack.png"),
        title: "Aux Jack",
        altTag: "Jack",
      },
    ];
    return (
      <div className="commonIssues-block">
        <div className="container py-3 ">
          <h2 className="text-center mt-3 mb-5 fontfamilypopMedium font-size32">
            {" "}
            Common issues we fix{" "}
          </h2>

          <div className="row">
            {CommonIssues.map((item) => (
              <div className="col px-2">
                <div className="col-md-12 feature-box">
                  <img src={item.Img} alt={item.altTag} />
                  <h4 className="fontfamilypoplight font-size14">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default CommonIssues;
