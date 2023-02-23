import React from "react"

import "../styles/homePageStyles.css"

export default function HomePage() {
    return (
        <div className="container d-flex justify-content-center">
            <img 
            src={require("../images/placeholder-center-img.jpg")}
            alt=""
            style={{ maxWidth: "100%", height: "auto" }}>
            </img>
        </div>
    );
}