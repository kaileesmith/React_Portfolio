import React from 'react';
import burgerImg from "../../Utils/Eat-Da-Burger1.jpg";
import galaxyImg  from "../../Utils/GalaxyDashboard.gif";
import schedulerImg from "../../Utils/schedulerPicture.JPG";
import moodImg from "../../Utils/startscreen.JPG";
import fitnessImg from "../../Utils/Dashboard.JPG";
import quizImg from "../../Utils/codequiz.JPG";
import myPet from "../../Utils/MyPet.gif";

function WorkContainer() {
    return (
        <div className= "workCont">
                    <div className="jumbotron">
                        <div className= "container">
                                <h3 className="workTitle">MY WORK</h3>
                            </div>
                            <main className="container projects">
                                <div className="row">
                                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img className="d-block w-100" src={myPet} alt="First slide"></img>
                                                <h5>My Pet</h5>
                                                    <p>A timed quiz that tests a user's knowledge of coding through a vanilla javascript application.</p>
                                                    <p><a href="https://my-pet-app-1.herokuapp.com/" target="_blank" rel="noreferrer" className=
                                                    "deployLink">Deployed App</a></p>
                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100" src={galaxyImg} alt="Second slide"></img>
                                                <h5>Galaxy Scheduler</h5>
                                                    <p>A full-stack application designed to make household planning easier while utilizing CRUD functionality and server-side authentication/functionality.</p>
                                                    <p><a href="https://guarded-forest-74765.herokuapp.com/" target="_blank" rel="noreferrer" className=
                                                    "deployLink">Deployed App</a></p>
                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100" src={burgerImg} alt="Third slide"></img>
                                                <h5>Eat-Da-Burger!</h5>
                                                    <p>This applicationa acts as a burger logger with MySQL, Node, Express, Handlebars and ORM. It allows user to input a burger then select which burger to devour. Once devoured the burger then moves to the devoured list. All burgers inputted are saved to the database.</p>
                                                    <p><a href="https://limitless-badlands-01738.herokuapp.com/" target="_blank" rel="noreferrer" className=
                                                    "deployLink">Deployed App</a></p>
                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100" src={fitnessImg} alt="Forth slide"></img>
                                                <h5>Fitness Tracker</h5>
                                                    <p>A fintess tracker that allows a user to create, complete and track workouts. The application utilizes a Mongo database with a Mongoose schema and handles routes with Express.</p>
                                                    <p><a href="https://pacific-lake-49703.herokuapp.com/" target="_blank" rel="noreferrer" className=
                                                    "deployLink">Deployed App</a></p>
                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100" src={schedulerImg} alt="Fifth slide"></img>
                                                <h5>Work Day Scheduler</h5>
                                                    <p>This work day scheduler tracks the current time/date and allows user input for timeslots to be saved via local storage.</p>
                                                    <p><a href="https://kaileesmith.github.io/Scheduler/" target="_blank" rel="noreferrer" className=
                                                    "deployLink">Deployed App</a></p>
                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100" src={moodImg} alt="Sixth slide"></img>
                                                <h5>Mood Brew</h5>
                                                    <p>A random food and drink generator based off of the users selected mood option for the 3 provided categories at the top of the UI.</p>
                                                    <p><a href="https://kaileesmith.github.io/Mood_Brew/" target="_blank" rel="noreferrer" className=
                                                    "deployLink">Deployed App</a></p>
                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100" src={quizImg} alt="Seventh slide"></img>
                                                <h5>Code Quiz</h5>
                                                    <p>A timed quiz that tests a user's knowledge of coding through a vanilla javascript application.</p>
                                                    <p><a href="https://kaileesmith.github.io/Code_Quiz/" target="_blank" rel="noreferrer" className=
                                                    "deployLink">Deployed App</a></p>
                                            </div>
                                        </div>
                                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                            </main>
                        </div>
                </div>

               
    )
}

export default WorkContainer
