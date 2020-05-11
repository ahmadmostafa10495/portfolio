import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/home">Home</Link></li>
                        <li><a href="/home#about">About</a></li>
                        <li><a href="/home#projects">Projects</a></li>
                        <li><a href="/home#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Reach Out</h5>
                    <address>
		              123, Main Road<br />
		              Nasr City, Cairo<br />
		              Egypt<br />
		              <i className="fa fa-phone fa-lg"></i>: +123456789<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:a7mad53@ymail.com">
                         a7mad53@ymail.com</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-github mx-1" href="https://github.com/ahmadmostafa10495"><i className="fa fa-github"></i></a>
                        <a className="btn btn-social-icon btn-facebook mx-1" href="https://www.facebook.com/ahmed.mostafa.3939503"><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin mx-1" href="https://www.linkedin.com/in/ahmed--moustafa/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter mx-1" href="https://twitter.com/AhMadMostafa7"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google mx-1" href="https://www.youtube.com/channel/UCKiXWLA1CvSE8D0cT9d2lSA?"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon btn-instagram mx-1" href="https://www.instagram.com/ahmd_mostafa/"><i className="fa fa-instagram"></i></a>	          
                        <a className="btn btn-social-icon btn-soundcloud mx-1" href="https://soundcloud.com/ahmed-mostafa-1012"><i className="fa fa-soundcloud"></i></a>	          
                        <a className="btn btn-social-icon btn-yahoo mx-1" href="mailto:a7mad53@ymail.com"><i className="fa fa-yahoo"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2020 Ahmed Moustafa</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;