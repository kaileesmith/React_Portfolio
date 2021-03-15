import React from 'react';

const ContactContainer = () => {
    return (
        <div className= "contactCont">
                <div className="jumbotron">
                    <div class="container">
                        <h4 className="contactTitle">LETS WORK TOGETHER</h4>
                        <main>
                            <h5>Email: Kaileesmith1501@gmail.com</h5>
                            <h5>Phone: (951) 970-1909</h5>
                            <div className="links">
                                <ul className="linkedin">
                                    <a href="https://www.linkedin.com/in/kaileesmith/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin fa-3x"></i></a>
                                </ul>
                                <ul className="github">
                                    <a href="https://www.github.com/kaileesmith" target="_blank" rel="noreferrer"><i className="fab fa-github-square fa-3x"></i></a> 
                                </ul>
                                <ul>
                                <a href="" target="_blank" rel="noreferrer"><i className="fas fa-file-download fa-3x"></i></a> 
                                </ul>
                            </div>
                        </main>
                    </div>
                </div>
        </div>
    )
}

export default ContactContainer
