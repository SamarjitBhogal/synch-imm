import React from 'react';

import NavBar from "./NavBar.js"
import Footer from "./Footer.js"

export default function Layout({childern}) {
    return (
        <div>
            <NavBar/>
            <main>
                {childern}
            </main>
            <Footer/>
        </div>
    );
}