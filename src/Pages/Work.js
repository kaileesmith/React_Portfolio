import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import WorkContainer from '../Components/Card/WorkContainer';

function Work() {
    return (
        <div className="work">
           <Navbar/>
            <WorkContainer/>
            <Footer/> 
        </div>
    )
}

export default Work
