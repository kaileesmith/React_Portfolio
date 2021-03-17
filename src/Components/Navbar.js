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
                            <Link 
                                    to="/"
                                    className="btn"
                                        >Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                    to="/work"
                                    className="btn"
                                >Work
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                    to= "/contact"  
                                    className="btn"
                            >Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}

export default Navbar;
