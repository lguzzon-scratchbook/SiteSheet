import React from 'react';
import { Button} from '@material-ui/core/'
import Exel from './exel.svg';
import  "./intro.css";
import Typewriter from 'typewriter-effect';

import {
   
    Link,
    
  } from "react-router-dom";

function Intro({}) {

  return (
    <>
   
    <div className="intro-bg" >
    <div className="intro-blankSpace">
          

         </div>
        <img src={Exel} alt="intro-exel-image" className="intro-exelImg"></img>
        

        <div className="intro-Buttons">
        

        </div>

    <h3 className="intro-typeWrite">
        <Typewriter
        options={{
            strings: ['API', 'Website','Fun Game'],
            autoStart: true,
            loop: true,
        }}
        
        /> 
        <Link to="/api" >
        <Button style={{
            
            borderRadius: 25,
            backgroundColor: "#47ff8c",
            color: "#787c7a",
            textDecoration: false,
            marginRight: 5,

            
    
        }} ><h3 className="intro-button-text">Convert into API</h3></Button> 
        </Link>
        <Link to="/webbuilder/">
        <Button
         style={{
            
            borderRadius: 25,
            backgroundColor: "#787c7a",
            color:"#47ff8c",
            borderWidth: 5,
            borderColor: "#787c7a",
            textDecoration: false,
            marginRight: 3,

            
    
        }}
        ><h3 className="intro-button-text">Convert into Website</h3></Button> 
        </Link>
        </h3>
      
        <h2 className="intro-h3">
           Convert Google Sheets into
        </h2>
       <h1 className="intro-h1">
           Site Sheet
      

        </h1>
  
    </div>
  
  

    

    </>
  );
}

export default Intro;
