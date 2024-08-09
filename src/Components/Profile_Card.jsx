import React, { useState } from "react";
import "../styles/Profile_Card.css";



const Card = () => {

    return (

        <div className="Card">
            <div className="left_container">
                <div className="image_container">
                <img id="profile_photo" src="assets/profile_photo.jpeg" alt="Profile" />
                </div>
            </div>
            <div className="right_container">
                <h2>Name </h2>
                <h3> Job </h3>
                <p> About </p>
                
                
            </div>

        </div>
    )
}

export default Card;