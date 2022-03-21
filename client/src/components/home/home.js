import React from "react";
import "./home.css";
import popcorn from "../../assets/popcorn.png"
import Header from "../header/header";

const Home = () => {

    return(
        <div className="home">
            <Header/>
            <div className="about">
                <h2 style={{color: "antiquewhite"}}>Welcome to</h2>
                <h1 style={{color: "yellow"}}>Website Name</h1>
                <br/>
                <h3 style={{color: "antiquewhite"}}>Hard time finding the right movie?</h3>
                <h2 style={{color: "lightgreen"}}>We Got You!</h2>
                <br/>
                <img src={popcorn} alt="popcorn" />
            </div>
        </div>
    )
}

export default Home;