import React from 'react';
import {NavLink} from 'react-router-dom';
import  'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

const NavBar=()=>{
    return (
        <>
        <div >
            <div >
                <div >
                    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar fixed-top scrolling-navbar Navbar_bgDark__3RVsz top-nav-collapse">
                        <NavLink className="navbar-brand mx-auto" exact to="/" style={{padding:"10px",fontFamily:"'Berkshire Swash',cursive",fontSize:"1.8rem"}}>LyghtJr</NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="Collapse navbar-collapse " id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <NavLink className="nav-link" exact activeClassName="menu_active" to="/home">Home <span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item ">
                                    <NavLink className="nav-link" exact activeClassName="menu_active" to="/projects">Projects </NavLink>
                                </li>
                               
                                <li className="nav-item">
                                    <NavLink className="nav-link" exact activeClassName="menu_active" to="/blogs">Blogs</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" exact activeClassName="menu_active" to="/experiences">Experiences</NavLink>
                                </li>
                            </ul>
                        </div>

                    </nav>
                </div>
            </div>
        </div>
        </>
    )
}
export default NavBar;