import React, { Component } from "react";
import "./App.css";
import "./App.scss";
import { HashRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/Home";
import Earlyyears from "./components/Earlyyears";
import Ofested from "./components/Ofested";
import Funding from "./components/Funding";
import Testimonials from "./components/Testimonials";
import Fundraising from "./components/Fundraising";
import Gallery from "./components/Gallery";
import Termdates from "./components/Termdates";
import Contactus from "./components/Contactus";
import Child1 from "./images/all_saints_pre-school_hw_2016_17009015.jpg";
import Child2 from "./images/all_saints_pre-school_hw_2016_17009017.jpg";
import Child3 from "./images/all_saints_pre-school_hw_2016_17009018.jpg";
import DisableFriendly from "./images/all_saints_pre-school_hw_2016_17001010.jpg";
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="blue lighten-5 sm-col-bg">
          <div className="sm-col-bg">
            <Header />
            <div className="container s12 m6 l8 white">
              {/* <div className="container s12"> */}
              <div id="imagesWrapper" className="s12 center">
                <img
                  src={Child1}
                  alt="child image1"
                  className="circle z-depth-5"
                />
                <img
                  src={Child2}
                  alt="child image2"
                  className="circle z-depth-5"
                />
                <img
                  src={Child3}
                  alt="child image3"
                  className="circle z-depth-5"
                />
              </div>
              {/* </div>/ */}
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Earlyyears" component={Earlyyears} />
                <Route path="/Ofested" component={Ofested} />
                <Route path="/Funding" component={Funding} />
                <Route path="/Testimonials" component={Testimonials} />
                <Route path="/Fundraising" component={Fundraising} />
                <Route path="/Gallery" component={Gallery} />
                <Route path="/Termdates" component={Termdates} />
                <Route path="/Contactus" component={Contactus} />
              </Switch>
              <div className="center">

                <img
                  src={DisableFriendly}
                  alt="Deasable Friendly"
                  className="center"
                />
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
