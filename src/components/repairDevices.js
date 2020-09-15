import React from "react";
import "../App.css";

class RepairDevices extends React.Component {
  render() {
    let SellBuy = [
      {
        Img: require("../images/buy.png"),
        altTag: "Buy",
        descrop: "we will give you cash for your used or broken device",
      },
      
      {
        Img: require("../images/buy.png"),
        altTag: "Buy",
        descrop: " We will come to you to colloect your device & pass you cash",
      },
      {
        Img: require("../images/repair.png"),
        altTag: "Repair",
        descrop: "Sit back & relax Enjoy our service at your convenience",
      },
    ];
    return (
      <div className="repairdevices-block">
        <div className="bg-primary">
          <div className="container py-3">
            <h2 className="text-center mt-2 repheading fontfamilypopMedium font-size32">
              {" "}
              Repair . Sell . Buy{" "}
            </h2>
            <div className="text-center repspan fontfamilypoplight font-size18">
              {" "}
              Dont't want to fix phone?just want the latest gadget?{" "}
            </div>
            <div className="text-center repspan  fontfamilypoplight font-size18 mt-4">
              we have many options to get you going just because you signed a
              service contract with your{" "}
            </div>
            <div className="text-center repspan  fontfamilypoplight font-size18 pb-5">
              cell phone carrier doesn't ean you have to keep a phan that you're
              no longer happy with.
            </div>

            <div className="row">
              {SellBuy.map((item) => (
                <div className="col-md-4 text-center">
                  <img
                    src={item.Img}
                    className="reprounded"
                    alt={item.altTag}
                  />
                  <div className="repspan py-3 px-5  fontfamilypoplight font-size14">
                    {item.descrop}
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

export default RepairDevices;
