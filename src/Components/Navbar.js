import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <span className="navbar-brand mb-1 h1">Kailee Smith</span> 
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="nav-item">
                        {/* <button classNameName="nav-link" href="./index.html">Home</button> */}
                        </li>
                        <li className="nav-item">
                            {/* <a class="nav-link" href="./contact.html">Contact</a> */}
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="./portfolio.html">Portfolio</a> */}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
