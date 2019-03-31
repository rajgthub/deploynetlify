import React from 'react'
import "./Footer.css";
import Ofested from "../../images/all_saints_pre-school_hw_2016_17009022.png";
import HarrowCouncil from "../../images/all_saints_pre-school_hw_2016_17009023.png";
import LearningAlliance  from "../../images/all_saints_pre-school_hw_2016_17009025.png";

const Footer = () => {
  return (
   

<footer className="page-footer col s12 m12 l12 pink lighten-5 ">
<div className="container ">
  <div className="row foot">
    <div className="col l6 s12">
      <h5 className="grey-text">Allsaints Pre School</h5>
      <p className="grey-text text-darken-5"> Blackwell Hall, 90 Uxbridge Road
            Harrow Weald, HA3 6DQ </p>
      <p className="grey-text text-darken-5">Call us on 0208 954 9061</p>
      <p className="grey-text text-darken-5">Mobile: 07531511388</p>

    </div>
    <div className="col l3 offset-l2 s12 right">
     <div className="container">
      <ul>
       <li><a className="grey-text text-lighten-5" href="#!"><img src={HarrowCouncil} alt="Harrow Council Logo"/></a></li>
       <li><a className="grey-text text-lighten-5" href="#!"><img src={LearningAlliance} alt="Learning alliance logo"/></a></li> 
       <li><a className="grey-text text-lighten-5" href="#!"><img src={Ofested} alt="Ofested logo"/></a></li>
      </ul>
     </div>
    </div>
  </div>
</div>
<div className="footer-copyright">
  <div className="container">
     <p className="blue-text text-darken-4">© All Saints Pre-School is a registered charity #1027855</p>
     <p className="blue-text text-darken-4">Copyright (C) 2015 All Saints Pre-School Harrow Weald, Inc. All Rights Reserved</p>

  </div>
</div>
</footer>
  )
}

export default Footer
