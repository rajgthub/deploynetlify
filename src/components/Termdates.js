import React from 'react'

const Termdates = () => {
  return (
    <div className="col s12 homeWrapper">
       <h5 className="blue-text text-lighten-2">Term Dates</h5>
        <p className="grey-text text-darken-2"> Term Dates for next Year Sept 2018 - July 2019</p>
         <br/>
         <span className="termDates-header">Autumn Term</span><br/>
         <i>Monday 3rd Sept setting up (No Children in)</i>
          <ul  className=" list grey-text text-darken-2">
            <li><i class=" tiny material-icons">child_care</i>Tuesday 4 Sept – Fri 19 Oct </li>
            <li><i class=" tiny material-icons">child_care</i>Mon 22 Oct – Fri 26 Oct 1 week half term closed</li>
            <li><i class=" tiny material-icons">child_care</i>Mon 29 Oct – Fri 14 Dec </li>
            <li><i class=" tiny material-icons">child_care</i>Mon 17 Dec – Fri 4 Jan  3 weeks Christmas closed</li>
          </ul> 
          <span className="termDates-header">Spring Term</span><br/>
          <i>Monday 7th Jan setting up (No Children in)</i>
          <ul  className=" list grey-text text-darken-2"> 
            <li><i class=" tiny material-icons">child_care</i>Tuesday 8 Jan –Fri 15 Feb </li>
            <li><i class=" tiny material-icons">child_care</i>Mon 18 Feb – Fri 22 Feb 1 week half term closed</li>
            <li><i class=" tiny material-icons">child_care</i>Mon 25 Feb – Fri 5 April </li>
            <li><i class=" tiny material-icons">child_care</i>Fri 8 April – Fri 19 Apr 2 weeks Easter closed</li>
          </ul>  
          <span className="termDates-header">Summer Term</span><br/>
          <i>Monday 22 April & 3rd June setting up (No Children in)</i>
          <ul  className=" list grey-text text-darken-2"> 
            <li><i class=" tiny material-icons">child_care</i>Tue 23 Apr – Fri 24 May </li>
            <li><i class=" tiny material-icons">child_care</i>6th May is a Bank Holiday</li>
            <li><i class=" tiny material-icons">child_care</i>Mon 27 May – 31 May 1 week half term closed</li>
            <li><i class=" tiny material-icons">child_care</i>Tues 4 Jun – Fri 19 Jul</li>
          </ul>
           <br/>
           <p className="grey-text text-darken-2">
               <span className="termDates-header">*</span>All children and parents are all invited to the Friday mornings Party Days. 
               All younger siblings and parents only. Sorry no other relations invited.
           </p>
           <br/>
           <ul className=" list grey-text text-darken-2">
                <li><i class=" tiny material-icons">child_care</i>Christmas Party<span>  </span>Friday 14 Dec</li>
                <li><i class=" tiny material-icons">child_care</i>Easter Party<span>  </span>Friday 5th March</li>
                <li><i class=" tiny material-icons">child_care</i>Bank Holiday<span>  </span>Monday 6th May</li>
                <li><i class=" tiny material-icons">child_care</i>Leavers Party<span>  </span>Friday 12 July</li>
           </ul>

   </div>
  )
}

export default Termdates
