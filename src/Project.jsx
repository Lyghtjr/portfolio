import React from 'react';
import './home.css';

const Project=(props)=>{
    return (
        <>
         <div className="portfolio-image-container ">
					<img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000024_1550237299_codezen.png" alt=""/>
					<p className="portfolio-inside-text"><a href="#">{props.project}</a></p>
				</div>
        </>
    )
}

export default Project;