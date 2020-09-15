import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; //to change pages
import "./App.css";

import Header from "./components/header";
import Slide from "./components/slide";
import CommonIssues from "./components/commonissues";
import MobileExperts from "./components/mobileExperts";
import RepairDevices from "./components/repairDevices";
import FixDevices from "./components/fixDevices";
import YMobileExpert from "./components/yMobileExpert";
import Brisbanebg from "./components/iphoneRepairserviceTest";
import Footer from "./components/footer";
// import Layout from "./components/layout";
import Testimonial from "./components/testimonial";
import CarouselComponent from "./components/carousel";
import Registration from "./components/RepairPopup";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        {/* <Layout>
       <Switch>
         <Route exact path="/" component={Home} />
         <Route  path="/about" component={About} />
         <Route  path="/contact" component={Contact} />
         <Route  path="/blog" component={Blog} />
         <Route   component={Nomatch}/>
       </Switch>
     </Layout> */}
        <Slide />
        <CommonIssues />
        <MobileExperts />
        <FixDevices />
        <RepairDevices />
        <YMobileExpert />
        <Brisbanebg />
        <Testimonial />
        <CarouselComponent />
        {/* <Registration /> */}
        <Footer />
      </Router>
    );
  }
}

export default App;
