import React from 'react';
import './home.css'
const Skills=(props)=>{
 return(
     <>
                   <div className="px-4 ">
                        <h5 className="labelafter">{props.skill}</h5>
                        <span style={{padding:"0.50em 0.6em"}} className="SkillsCard_badge__3sjqg badge primary-bgColour">{props.skill1}</span><span style={{padding:"0.50em 0.6em"}} className="SkillsCard_badge__3sjqg badge primary-bgColour">{props.skill2}</span><span style={{padding:"0.50em 0.6em"}} className="SkillsCard_badge__3sjqg badge primary-bgColour">{props.skill3}</span>
                        <span style={{padding:"0.50em 0.6em"}} className="SkillsCard_badge__3sjqg badge primary-bgColour">{props.skill4}</span><span style={{padding:"0.50em 0.6em"}} className="SkillsCard_badge__3sjqg badge primary-bgColour">{props.skill5}</span><span style={{padding:"0.50em 0.6em"}} className="SkillsCard_badge__3sjqg badge primary-bgColour">{props.skill6}</span>
                        <span style={{padding:"0.50em 0.6em"}} className="SkillsCard_badge__3sjqg badge primary-bgColour">{props.skill7}</span><span style={{padding:"0.50em 0.6em"}} className="SkillsCard_badge__3sjqg badge primary-bgColour">{props.skill8}</span><hr/></div>
                           
     </>
 )
}

export default Skills;