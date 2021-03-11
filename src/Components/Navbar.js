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
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="nav-item">
                        <a href= "/">Kailee Smith</a>
                        </li>
                        <li className="nav-item">
                            <button
                                onClick={(e) => history.push("/about")}
                                className="btn"
                                name="about"
                            >About Me
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                    onClick={(e) => history.push("/work")}
                                    className="btn"
                                    name="work"
                                >Work
                                </button>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="./portfolio.html">Portfolio</a> */}
                        </li>
                    </ul>
                </div>
            </nav>
    )
}

export default Navbar;
