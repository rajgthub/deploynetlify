
import React from 'react'
import Building from "../images/all_saints_pre-school_hw_2016_17009003.jpg"
import Facebook from "../images/all_saints_pre-school_hw_2016_17009019.gif"
const Contactus = () => {
  return (
    <div className="col s12 homeWrapper">
      <h5 className="blue-text text-lighten-2">Contact Us</h5>
       
       <p className="grey-text text-darken-2">
        Please contact us if you require any information regarding place availability for the next intake of pupils or would like to speak/email All Saints Pre-School.
       </p>
       <p className="grey-text text-darken-2">
         We endeavour to contact you within two working days by a member of staff.
       </p>
        <br/>
       <p className="grey-text text-darken-2">
        If you would like to visit/view our preschool this is by mutual appointment only. 
       </p>
       <br/>

       <p className="grey-text text-darken-2">
         Look forward to hearing from you. 
       </p>
        <br/>
       <p className="grey-text text-darken-2">
          Deepa Sharma - All Saints Pre-School Manager
       </p>
       <br/>
       <p className="grey-text text-darken-2"><i className="material-icons">phone_iphone</i>: 07531511388</p>
       <p className="grey-text text-darken-2"><i className="material-icons">phone</i>: 0208 954 9061</p>
       <p className="grey-text text-darken-2"><i className="material-icons">email</i>: allsaintspreschoolhw@live.co.uk</p>



      <div className="col s12 m7 l6">
          <h5 className="header blue-text text-lighten-2">By Post</h5>
          <div className="card horizontal">
            <div className="card-image">
               <img src={Building} alt="Allsiants pre-school building"/>
            </div>
            <div className="card-stacked">
               <div className="card-content">
                   <p className="grey-text text-darken-2">Blackwell Hall,</p> 
                   <p className="grey-text text-darken-2">90 Uxbridge Road</p>
                   <p className="grey-text text-darken-2">Harrow Weald,</p>
                   <p className="grey-text text-darken-2">HA3 6DQ</p>
               </div>
               <div className="card-action">
                  <a href="https://www.google.co.uk/maps/place/90+Uxbridge+Rd/@51.611969,-0.3352911,17z/data=!3m1!4b1!4m2!3m1!1s0x4876148920455fed:0x41c6d3cee5200a6c">Find Us on Google Map</a>
               </div>
            </div>
      </div>
          
      </div>
      <div className="col s12 m7 l6 ">
       <h5 className="header blue-text text-lighten-2">Other Links</h5>
          <div className="card horizontal">
            <div className="card-image">
               <a href="https://www.facebook.com/pages/All-Saints-Preschool-Harrow-Weald/784189691667551"><img src={Facebook} alt="face book logo"/></a>
            </div>
            <div className="card-stacked">
                <div className="card-content">
                    <a href="https://www.facebook.com/pages/All-Saints-Preschool-Harrow-Weald/784189691667551">All Saints Preschool Harrow Weald</a>
                </div>
               <div className="card-action">
                  <ul>
                      <li className="collection-item"><a href="https://blackwellhall.com/">Visit The Blackwell Hall Website</a></li>
                      <li className="collection-item"><a href="http://www.ashw.org.uk/">Visit All Saints Harrow Weald Church Website</a></li>
                  </ul> 
                  
               </div>
            </div> 
          </div>
      </div>    
  </div>
  )
}
                     
export default Contactus
