import React, { useState } from "react";
import "../styles/Profile_Card.css";



const Card = () => {
    const [name, setName] =useState("Your Name");
    const [job, setJob] =useState("Job Title");
    const [about, setAbout] =useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula nulla ut urna vestibulum. Fusce eget arcu vitae turpis fermentum. Curabitur blandit elit eget nibh. Vivamus tincidunt erat at odio convallis.");

    return (

        <div className="Card">
            <div className="left_container">
                <div className="image_container">
                <img id="profile_photo" src="assets/profile_photo.jpeg" alt="Profile" />
                </div>
            </div>
            <div className="right_container">
                <h2> {name}</h2>
                <h3> {job} </h3>
                <p> {about} </p>
                
                
            </div>

        </div>
    )
}

export default Card;