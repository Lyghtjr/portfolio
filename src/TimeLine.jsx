import React from 'react';
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import './home.css';

const TimeLine=(props)=>{
    return(
        <>
        <ul className="stepper stepper-vertical ">
                      <li className="completed"><a style={{textDecoration: "none"}} href="/">
                          <span className="circle">
                              <FontAwesome className="fas fa-briefcase"/>
                                 </span>
                                  <span className="label labelafter" >{props.position}</span>
                                  </a><div className="step-content grey lighten-3">
                                      <h4>{props.companyName}</h4>
                                      <h6>{props.duration}</h6>
                                      <p>{props.workInformation}</p>
                                      </div></li> </ul>
        </>
    )
}

export default TimeLine