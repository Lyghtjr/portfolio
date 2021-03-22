import React from 'react';
import './home.css';
import Project from './Project';
import TimeLine from './TimeLine';
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import Skills from './Skills';
import abhi from './images/img1.jpeg';
import Footer from './Footer.jsx';

const Home=()=>{
    return (
        <>
<div className="bgattachedImage">
<div className="text-white text-center rgba-stylish-strong Home_banner__fFRb6">
    <h5 className="h5 primary-colour">
        <FontAwesome className="fas fa-briefcase mr-1"/>
            Portfolio</h5>
               
            <div className="TextAnimationh1 mt-5">
      <h1>
   <span
     className="txt-rotate helements"
     data-period="2000"
     data-rotate='[ "I am Developer"," I am Blogger" ]'
   ></span>
 </h1>
 </div>
 <div className="col-6 mx-auto mt-3">
 <p><FontAwesome className="fas fa-quote-left"/>Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.<FontAwesome className="fas fa-quote-right"/></p>
                     <a target="_blank" style={{textDecoration:"none",color:"#fff"}} className=" resumebtn primary-bgColour waves-effect waves-light" href="https://drive.google.com/file/d/1L-3JLCIuAW5VmGn2Zgs-3b2I50GAiyZD/view"><FontAwesome className="fas fa-clone left mr-1"/>
                             View Resume</a>
</div></div>
</div>
 <div className="Home_body__2gksT col-12 ">
      <div className="row">
      <div className="Home_mainBody__2p4-X col-7 mx-auto">
          <h1 className="mb-4 text-center secondary-colour font-weight-light">My Timeline</h1>
          <hr style={{margin: "0px 10%"}}/>
              <div className="row">
                  <div className="col-md-12">
                  <TimeLine position="InternShip" companyName="HenryHarvin India" duration="December 2020 - Februray 2021" />
                  <TimeLine position="Under Graduation" companyName="Dronacharya College Of Engineering" duration="August 2018 - Current"/>
                  <TimeLine position="Senior Secondary" companyName="Bala Pritam Guru Harkishan International Public School" duration="2016 - 2018"/>
                  <TimeLine position="High School" companyName="Bala Pritam Guru Harkishan International Public School" duration="2014 - 2016" />
                  </div></div>
    </div>
    <div className="Home_sideBody__2YMQ5 col-4 mx-auto">
        <div className="card testimonial-card mb-5">
            <div className="card-up secondary-bgColour lighten-1"></div>
            <div className="avatar mx-auto white">
                <img src={abhi} className="rounded-circle AboutCard_image__2w_OX" alt=".."/>
                </div><div className="card-body">
                    <h4 className="card-title">Abhinav Rai</h4>
                    <hr/>
                    <p>I am a passionate developer, I have an experience in front-end development, UI and I am currently exploring Backend Development,Native Development and AI.</p></div></div><div className="card mb-5"><h3 className="py-3 text-center">My Skills</h3>
                   <Skills skill="Languages" skill1="C Language" skill2="c+
                   +" skill3="Python" skill4="HTML" skill5="CSS" skill6="Java" skill7="Javascript" skill8="Dart"/>
                 
                   <Skills skill="Frameworks and Libraries" skill1="Numpy" skill2="pandas"
                   skill3="Reactjs" skill4="Ajax" skill5="Flutter" skill6="Bootstrap" />
                   
                   <Skills skill="IDEs and Editors" skill1="Sublime Text" skill2="Visual Studio" skill3="Netbeans" skill4="PyCharm" skill5="Eclipse" />
                  
                   <Skills skill="Tools" skill1="Git" skill2="Firebase"
                   skill3="jupiter Notebook"/>
                  
                   <Skills skill="DataBase" skill1="MySql"/>
                 
                   <Skills skill="Operating System" skill1="Windows" skill2="Linux" Skill3="MacOs"/>
                    </div></div></div></div>


  <section id="portfolio">
			<h1 className="section-heading text-center mb-0">
        
				<span style={{fontWeight:"300"}}> Projects</span>
			</h1>
      <hr style={{width:"60%"}}/>
			<div className="portfolio-container mx-auto">
				
                <Project project="Fitness_App"/>
                
                <Project project="To_Do_Web"/>
                
                <Project project="Play_Snake"/>
                
                <Project project="E_Learning_React"/>
                
                <Project project="Car-Racing"/>
                
                <Project project="Pokemon_UI"/>

                
            </div>
          
			

			
		</section>

        <Footer/>

        </>
    )
}

var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 150 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName("txt-rotate");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-rotate");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML =
      ".txt-rotate > .wrap { border-right: 0.08em solid #fff }";
    document.body.appendChild(css);
  };

export default Home;