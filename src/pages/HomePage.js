import React from "react"

import "../styles/homePageStyles.css"

export default function HomePage() {
    return (
        <div className="container d-flex justify-content-center" style={{ color: "green"}}>
            <img 
            src={require("../images/placeholder-center-img.jpg")}
            alt="">
            </img>
        </div>
    );
}