import React, { Component } from "react";
import Navigation from "../Navigation";
import Logo from "../../images/all_saints_pre-school_hw_2016_17009026.png";

export default class Header extends Component {
  state = {
    fixdeNav: false
  };
  navRef = React.createRef()
  scrollHandler = () => {
    if (!this.fixedNav && this.navRef.current.getBoundingClientRect().top < -200) {
      this.setState({ fixedNav: true });
    } else {
      this.setState({ fixedNav: false });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.scrollHandler);
  }
  // componentDidUpdate() {
  // }
  componenetWillUnmount() {
    window.removeEventListener("scroll", this.scrollHandler);
  }
  render() {
    return (
      <div className="col pink lighten-5 s12 m12 l12  head">
        <img ref={this.navRef} src={Logo} className="brand-logo center" alt="logo" />
        <Navigation fixedNav={this.state.fixedNav} />
      </div>
    );
  }
}
