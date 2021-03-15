import React from 'react';
import {Link, useHistory} from "react-router-dom";

const Navbar = () => {
    const history= useHistory();
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <span class="navbar-brand mb-1 h1">Kailee Smith</span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="nav navbar-nav navbar-right">
                        <li className="nav-item">
                        <a 
                            onClick={() => history.push("/")}
                                        className="btn"
                                        name="home"
                                        >Home
                        </a>
                        </li>
                        <li className="nav-item">
                            <a
                                    onClick={() => history.push("/work")}
                                    className="btn"
                                    name="work"
                                >Work
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                onClick={() => history.push("/contact")}
                                className="btn"
                                name="contact"
                            >Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}

export default Navbar;
