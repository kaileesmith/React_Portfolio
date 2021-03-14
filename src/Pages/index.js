import React from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Home() {
    return (
    <div className="App">
      <Navbar/>
            <div className="jumbotron bg-info">
                <h3 className="display-4">Hello, world!</h3>
                <aside className="col-md-8">
                <p className="lead homeBody">Hi guys, gals and everyone in between! My name is Kailee Smith and I am a future web developer from Las Vegas. I have a background in customer service, sales and brand management. I love being creative whether that is creating a website or stitching an embroidery hoop. My hobbies include embroidery, hiking, watching/attending sporting events and anything Disney related. I have worked in the entertainment industry for many years including at the Walt Disney Company and Angels Baseball. My dream is to apply my new skills to a new career in the entertainment industry. </p>
                </aside>
            </div>   
      <Footer/>
    </div>
    )
}

export default Home
