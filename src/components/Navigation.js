import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";

const Navigation = ({ fixedNav }) => {
  let classes = "pink lighten-5 blue-text text-darken-4";
  return (
    <Fragment>
      <nav
        className={fixedNav ? classes + " fixed-nav-top" : classes}
        style={{ textAlign: "center" }}
      >
        <div className="nav-wrapper">

          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul className="navList center blue-text text-lighten-4 s12 m12 l12  hide-on-med-and-down">
            {fixedNav && (
              <li>
                <NavLink to="/" className="blue-text text-lighten-2" activeClassName="nav-active">
                  IMAGE
            </NavLink>
              </li>
            )}
            <li>
              <NavLink exact to="/" className="blue-text text-lighten-2" activeClassName="nav-active">
                Home
          </NavLink>
            </li>
            <li>
              <NavLink to="/Earlyyears" className="blue-text text-lighten-2" activeClassName="nav-active">
                Early years foundation stage
          </NavLink>
            </li>
            <li>
              <NavLink to="/Ofested" className="blue-text text-lighten-2" activeClassName="nav-active">
                Ofsted
          </NavLink>
            </li>
            <li>
              <NavLink to="/Funding" className="blue-text text-lighten-2" activeClassName="nav-active">
                Funding
          </NavLink>
            </li>
            <li>
              <NavLink to="/Testimonials" className="blue-text text-lighten-2" activeClassName="nav-active">
                Testimonials
          </NavLink>
            </li>
            <li>
              <NavLink to="/Fundraising" className="blue-text text-lighten-2" activeClassName="nav-active">
                Fundraising
          </NavLink>
            </li>
            <li>
              <NavLink to="/Gallery" className="blue-text text-lighten-2" activeClassName="nav-active">
                Gallery
          </NavLink>
            </li>
            <li>
              <NavLink to="/Termdates" className="blue-text text-lighten-2" activeClassName="nav-active">
                Term Dates
          </NavLink>
            </li>
            <li>
              <NavLink to="/Contactus" className="blue-text text-lighten-2" activeClassName="nav-active">
                Contact Us
          </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <NavLink exact to="/" className="blue-text text-lighten-2 sidenav-close" activeClassName="nav-active">
            Home
            </NavLink>
        </li>
        <li>
          <NavLink to="/Earlyyears" className="blue-text text-lighten-2 sidenav-close" activeClassName="nav-active">
            Early tyears foundation stage
            </NavLink>
        </li>
        <li>
          <NavLink to="/Ofested" className="blue-text text-lighten-2 sidenav-close" activeClassName="nav-active">
            Ofsted
            </NavLink>
        </li>
        <li>
          <NavLink to="/Funding" className="blue-text text-lighten-2 sidenav-close">
            Funding
            </NavLink>
        </li>
        <li>
          <NavLink to="/Testimonials" className="blue-text text-lighten-2 sidenav-close" activeClassName="nav-active">
            Testimonials
          </NavLink>
        </li>
        <li>
          <NavLink to="/Fundraising" className="blue-text text-lighten-2 sidenav-close" activeClassName="nav-active">
            Fundraising
          </NavLink>
        </li>
        <li>
          <NavLink to="/Gallery" className="blue-text text-lighten-2 sidenav-close" activeClassName="nav-active">
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to="/Termdates" className="blue-text text-lighten-2 sidenav-close" activeClassName="nav-active">
            Term Dates
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contactus" className="blue-text text-lighten-2 sidenav-close" activeClassName="nav-active">
            Contact Us
          </NavLink>
        </li>
      </ul>
    </Fragment>
  );
};

export default Navigation;
