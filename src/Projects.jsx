import React from 'react';
import Footer from './Footer';
import './home.css';
import Project from './Project.jsx';

const Projects = () => {
    return (
        <>
            <section id="portfolio" style={{ marginTop: "80px" }}>
                <h1 className="section-heading text-center mb-0">
                    <span style={{ fontWeight: "300" }} >Projects</span>
                </h1>
                <hr style={{ width: "60%" }} />
                <div className="projectbg">
                    <div className="portfolio-container ">
                        <Project project="Fitness_App" projecthref="https://github.com/Lyghtjr/Fitness_app" />

                        <Project project="To_Do_Web" projecthref="https://lyghtjr.github.io/TO_DO_WEB/" />

                        <Project project="Play_Snake" projecthref="https://github.com/Lyghtjr/play_snake" />
                    </div>
                </div>
                <div className="projectbg">
                    <div className="portfolio-container ">
                        <Project project="E_Learning_React" projecthref=" https://lyghtjr.github.io/e_learning_react/" />

                        <Project project="Car-Racing" projecthref="https://lyghtjr.github.io/Car-racing/" />

                        <Project project="Pokemon_UI" projecthref="https://github.com/Lyghtjr/Pokemon_ui" />



                    </div>
                </div>




            </section>

            <Footer />
        </>
    )
}

export default Projects;