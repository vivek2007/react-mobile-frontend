import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {

    /* Services Dynamic */
    let RepairServices = [
        {
        name : "Repair Services",
        listpoints  : [
          {
            title: "Smartphones"
          },
          {
            title: "Tablets"
          },
          {
            title: "Audio Sound"
          },
          {
            title: "Watches"
          },
          {
            title: "Smart Switch"
          },
          {
            title: "Mobile Accessories"
          },
          {
            title: "TVs"
          },
          {
            title: "Sound Devices"
          },
          
        ]
        },

      {
        name: "Shop",
        listpoints: [
          {
            title: "Samsung Referral Program"
          },
          {
            title: "Student Program"
          },
          {
            title: "Shop FAQ"
          },
          {
            title: "Shop Terms of use"
          },
          {
            title: "Shop Terms of Services"
          },
          {
            title: "Store Locator"
          },
          {
            title: "Smart Club"
          },          

        ]
      },

      {
        name: "Support",
        listpoints: [
          {
            title: "Write our CEO"
          },
          {
            title: "Email Us"
          },
          {
            title: "Chat with us"
          },
          {
            title: "Phone"
          },
          {
            title: "Community"
          },
          {
            title: "Product Registration"
          },
          {
            title: "Service Center"
          },

        ]
      },
      {
        name: "Company",
        listpoints: [
          {
            title: "About Us"
          },
          {
            title: "Investor Relations"
          },
          {
            title: "Newsroom"
          },
          {
            title: "Corporate Citizenship"
          },
          {
            title: "Career"
          },
          {
            title: "Environment"
          },
          {
            title: "Samsung Experience"
          },
          {
            title: "Samsung Recycling"
          },

        ]
      }
    ]
    return (
      <div className="footer">
        <div className="container mt-4">
          <div className="row">
            {RepairServices.map((item) => (              
            <div className="col-md-3 borderRight boxborderbottom">
              <div className="borderLeft">
                <div className="borderBottom ">
                    <h5 className="mt-2 mb-2 pl-3">{item.name}</h5>
                </div>
                  <div className="pt-2 pb-2 pl-3 font-size14 fontfamilypopRegular">
                    {item.listpoints.map((item1) => ( 
                      <p><Link to="/">{item1.title}</Link></p>
                    ))}
                </div>                
              </div>
            </div>
            ))}                      

          </div>
          <div className="pt-3 pb-3">
            <div className="row d-flex justify-content-between">
              <span>
                &copy; 2020 Mobile Expert. &reg;All Rights Reserved. Return
                Policy
              </span>
              <span>ABN : 67 469 689 543</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
