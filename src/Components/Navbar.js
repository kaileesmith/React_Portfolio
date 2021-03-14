import React from 'react';
import {Link, useHistory} from "react-router-dom";

const Navbar = () => {
    const history= useHistory();
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a href="/"><i className="fas fa-home fa-3x"></i></a>
                        </li>
                        <li className="nav-item">
                            <button
                                    onClick={() => history.push("/work")}
                                    className="btn"
                                    name="work"
                                >Work
                                </button>
                        </li>
                        <li className="nav-item">
                            <button
                                onClick={() => history.push("/contact")}
                                className="btn"
                                name="contact"
                            >Contact
                            </button>
                        </li>
                        <li className="nav-item">
                        <a href="https://www.linkedin.com/in/kaileesmith/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin fa-3x"></i></a>
                        </li>
                        <li className="nav-item">
                        <a href="https://www.github.com/kaileesmith" target="_blank" rel="noreferrer"><i className="fab fa-github-square fa-3x"></i></a> 
                        </li>
                    </ul>
                </div>
            </nav>
    )
}

export default Navbar;
