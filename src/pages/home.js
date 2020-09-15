import React from "react";
import "../App.css";

import { CommonIssues } from "./components/commonissues";
import { MobileExperts } from "./components/mobileExperts";
import { RepairDevices } from "./components/repairDevices";
import { FixDevices } from "./components/fixDevices";
import { YMobileExpert } from "./components/yMobileExpert";
import { Brisbanebg } from "./components/iphoneRepairserviceTest";

class Home extends React.Component {
  render() {
    return (
      <div className="home-page">
        <CommonIssues />
        <MobileExperts />
        <RepairDevices />
        <FixDevices />
        <YMobileExpert />
        <Brisbanebg />
      </div>
    );
  }
}

export default Home;
