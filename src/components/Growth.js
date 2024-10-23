import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightDots } from '@fortawesome/free-solid-svg-icons';
import { faCity } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import {faUsers } from '@fortawesome/free-solid-svg-icons';



export default function Growth(){
    return(
    <>
    {/* By bootstrap way */}

<div className='container-fluid new-Comp-top-margin'>
  <h1 className='text-center growh-element-title'>An Overview of Excellence in INTENSE TECHNOLOGIES</h1><br></br>
  <div className="container text-center">
  <div className="row excicon-row">
    <div className="col">
      
        
        <div className='row growth-element-img'><FontAwesomeIcon icon={faPeopleGroup} /></div>
        <div className='growh-element-num'>1K+</div>
        <div className='text-dark growth-element-exp'>Happy Customers</div>
      
    </div>

    <div className="col">
      
        
        <div className='row growth-element-img'><FontAwesomeIcon icon={faArrowUpRightDots} /></div>
        <div className='growh-element-num'>1</div>
        <div className='text-dark growth-element-exp'>ANNUAL GROWTH RATE</div>
      
    </div>

    <div className="col text-center">
      
    <div className='row growth-element-img '><FontAwesomeIcon icon={faCity} /></div>
        <div className='growh-element-num'>4+</div>
        <div className='text-dark growth-element-exp'>CITIES</div>
      
    </div>

    <div className="col">
      
    <div className='row growth-element-img'><FontAwesomeIcon icon={faUsers} /></div>
        <div className=' growh-element-num'>14+</div>
        <div className=' text-dark growth-element-exp'>Happy Employees</div>
      
    </div>


   </div>
</div>
</div>
    
    </>
    )
}