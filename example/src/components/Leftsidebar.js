import React from 'react'
import JSGanttComponent from 'react-jsgantt';
import logo from '../images/logoss.svg';
import iconleft from '../images/ii1.svg';
import iconleft2 from '../images/ii2.svg';
import iconleft3 from '../images/ii3.svg';
import iconleft4 from '../images/ii4.svg';
import iconleft5 from '../images/ii5.svg';
import iconleft6 from '../images/ii6.svg';
import iconleft7 from '../images/ii7.svg';
import iconleft8 from '../images/ii8.svg';
import iconleft9 from '../images/ii9.svg';
import iconleft10 from '../images/ii10.svg';
import iconleft11 from '../images/ii11.svg';
import { Link } from "react-router-dom";

import { Nav } from 'react-bootstrap';

export default function Leftsidebar() {
  return (
    <>
    
    
     
          <div className='left__sidebar'>
          <div className='logo__admin'>
        <a href='#'>
        <img src={logo} alt="Logo" />

        </a>
            
          </div>


          <div className='link__links'>
            <ul>

 



              <li className='active_110'>
              <Link to="/">
               <img src={iconleft} alt="iconleft" />
                </Link>
                </li>
              <li>
              <Link to="/createobs"><img src={iconleft2} alt="iconleft" /></Link></li>

             
              <li>


              <Link to="/universalconstruction"><img src={iconleft3} alt="iconleft" /></Link>
                
             </li>


             
              <li><Link to="/schedule"><img src={iconleft4} alt="iconleft" /></Link></li>


              
              <li><Link to="/createyourprojectschedule"><img src={iconleft5} alt="iconleft" /></Link></li>



              
              <li><Link to="/gantt_chart_universal"><img src={iconleft6} alt="iconleft" /></Link></li>


              
              <li>
                <Link to="/wbs">
              <img src={iconleft7} alt="iconleft" /></Link>
              
              </li>
              <li>
              
                
              <Link to="/Ganttchatv"><img src={iconleft8} alt="iconleft" /></Link></li>

<li>
              <Link to="/Ganttchatv2"><img src={iconleft9} alt="iconleft" /></Link></li>


<li>
              <Link to="/calender"><img src={iconleft10} alt="iconleft" /></Link></li>



              
            
              <li><a href="#"><img src={iconleft11} alt="iconleft" /></a></li>
            </ul>
          </div>
          </div>
       
 
 
  
    </>
  )
}
