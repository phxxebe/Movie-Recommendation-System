import React from "react";
import "../support/support.css";
import Header from "../header/header";
import vaishnavi from "../../assets/vaishnaviphoto.jpg";
import rutuja from "../../assets/rutujaphoto.jpg";
import maithili from "../../assets/maithiliphoto.jpg";

const Support = () => {   

    return(
        <div className="support">
            <Header/>
            <div className="about">
                <h1 style={{color: "yellow"}}>We have got your back!</h1>
                <h3 style={{color: "antiquewhite"}}>Stuck Somewhere? Can't find what you were looking for?</h3>
                <br/>
                <h2 style={{color: "lightgreen"}}>Get in touch with a friendly member of our team!</h2>
                <br/>
                <a href="mailto: rutujamore2791@gmail.com"><img src={rutuja} alt="Rutuja More"/></a>
                <a href="mailto: ms.vaishnavipawar@gmail.com"><img src={vaishnavi} alt="Vaishnavi Pawar"/></a>
                <a href="mailto: maithilisatara@gmail.com"><img src={maithili} alt="Maithili Sakhawalker"/></a>
            </div>
        </div>
    )
}

export default Support;