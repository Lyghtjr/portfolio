import React from 'react';
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import './home.css';

const Footer = () => {
    return (
        <>
            <footer className="page-footer font-small footerbackground">
                <div className="container">
                    <div className="row text-center d-flex justify-content-center pt-5 mb-3">
                        <div className="col-md-2 mb-3">
                            <h6 className="text-uppercase font-weight-bold">
                                <a aria-current="page" className="active" href="/">Home</a>
                            </h6>
                        </div>
                        <div className="col-md-2 mb-3">
                            <h6 className="text-uppercase font-weight-bold">
                                <a href="/projects">Projects</a>
                            </h6>
                        </div>
                        <div className="col-md-2 mb-3">
                            <h6 className="text-uppercase font-weight-bold">
                                <a href="/videos">Videos</a>
                            </h6></div><div className="col-md-2 mb-3">
                            <h6 className="text-uppercase font-weight-bold">
                                <a href="/blogs">Blogs</a>
                            </h6>
                        </div>
                        <div className="col-md-2 mb-3">
                            <h6 className="text-uppercase font-weight-bold">
                                <a href="/experiences">Experiences</a>
                            </h6></div></div>
                    <hr className="rgba-white-light" style={{ margin: "0px 15%" }} />
                    <div className="row d-flex text-center justify-content-center mb-md-0 mb-4"><div className="col-md-8 col-12 mt-5">
                        <p >If something is important enough, even if the odds are stacked against you, you should still do it.</p>
                        <p >Want to connect with me,connect over any of the platform links given below</p>
                    </div>
                    </div>
                    <hr className="clearfix d-md-none rgba-white-light" style={{ margin: "10% 15% 5%" }} />

                    <div>
          <div className="col-md-4 mx-auto">
            <div className="social-links">
              <ul className="row">
                <li className="facebook">
                  <a href="#"
                    ><FontAwesome className="fa fa-facebook" aria-hidden="true"/>
                  </a>
                </li>
                <li className="linkedin">
                  <a href="#"><FontAwesome className="fa fa-linkedin" aria-hidden="true"/> </a>
                </li>
                <li className="youtube">
                  <a href="#"><FontAwesome className="fa fa-youtube-play" aria-hidden="true"/>
                  </a>
                </li>
                <li className="instagram">
                  <a href="#"><FontAwesome className="fa fa-instagram" aria-hidden="true"/> </a>
                </li>
                <li className="whatsapp">
                  <a href="#"><FontAwesome className="fa fa-whatsapp" aria-hidden="true"/> </a>
                </li>
              </ul>
            </div>
          </div>
        </div>


</div>
                <div className="footer-copyright text-center py-3" >© 2021 Copyright:
                <a href="/"> Abhinav </a>
                <br/>
                <p>Front-end Developer || Web Developer || Android Developer <FontAwesome className="fas fa-cogs"/></p>
                </div>
               
                                                                                            
            </footer>
        </>
    )
}

export default Footer;