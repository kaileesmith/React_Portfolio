import React from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import myPic from "../Utils/AboutMePic.jpg";

function Home() {
    return (
    <div className="App">
      <Navbar/>
        <div className="jumbotron">
        <div className= "container">
          <div className="row">
            <h3 className="homeTitle">ABOUT ME</h3>
          </div>
            <div className="row">
              <img className="myPic" src={myPic} alt="Woman standing in museum smiling"></img>
              <aside className="col-md-8">
                <p className="lead homeBody">Hi guys, gals and everyone in between! I'm Kailee Smith, a full stack web developer currently based in Las Vegas. I have a background in customer service, sales and brand management. I love being creative whether that is creating a website or stitching an embroidery hoop. 
                </p>
                <p className="lead homeBody">
                I grew up in Southern California and am a lover of all things Artsy, Disney and Sports.My hobbies include embroidery, hiking, music and anything creative. A fun fact about me is I have perfomed for the Queen of England in the London New Years Day parade!</p>
                <p className="lead homeBody">
                In my past roles, I learned many valuable skills that assist me in being excellent at organizing and problem-solving. As well, my relationship-based personality allows me to thrive in team settings. Aftering working in the entertainment industry for many years, including at the Walt Disney Company and Angels Baseball, making magic and creating one of a kind experinces is something I strive to bring to any team I am apart of. I am hoping to bring my new skills to a creative career that allows me to access my full potential.
                </p>
                </aside>
            </div>
          </div> 
          </div>   
      <Footer/>
    </div>
    )
}

export default Home
