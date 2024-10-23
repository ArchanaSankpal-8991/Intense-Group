import React from 'react';
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Slides from '../components/Slides';
import Growth from '../components/Growth';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';

import OurBusiness from '../components/OurBusiness';


export default function Home() {
  return (
    <>
    <div>

    
      <Header/>
      <Slides/>
      </div>
      <Growth/>
      <AboutUs/>
      <OurBusiness/>
      <Footer/>
      
   
    </>
  )
}