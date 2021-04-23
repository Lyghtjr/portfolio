import React from 'react';
import Footer from './Footer';
import './home.css';
import Project from './Project.jsx';

const Projects=()=>{
    return(
    <>
      <section id="portfolio" style={{marginTop:"80px"}}>
			<h1 className="section-heading text-center mb-0">
				<span style={{fontWeight:"300"}} >Projects</span>
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

export default Projects;