
// import React,{ useContext } from 'react';
// import Marquee from "react-fast-marquee";

// import './Skills.css'

// import { ThemeContext } from '../../contexts/ThemeContext';
// import { skillsData } from '../../data/skillsData'
// import { skillsImage } from '../../utils/skillsImage'

// function Skills() {

//     const { theme } = useContext(ThemeContext);

//     const skillBoxStyle = {
//         backgroundColor: theme.secondary,
//         boxShadow: `0px 0px 30px ${theme.primary30}`
//     }
    
//     // Split the skillsData array into two halves
//     const firstHalf = skillsData.slice(0, Math.ceil(skillsData.length / 2));
//     const secondHalf = skillsData.slice(Math.ceil(skillsData.length / 2));

//     return (
//         <div className="skills" style={{backgroundColor: theme.secondary}}>
//             <div className="skillsHeader">
//                 <h2 style={{color: theme.primary}}>Skills</h2>
//             </div>
//             <div className="skillsContainer">
//                 <div className="skill--scroll">
//                     <Marquee 
//                         gradient={false} 
//                         speed={80} 
//                         pauseOnHover={true}
//                         pauseOnClick={true} 
//                         delay={0}
//                         play={true} 
//                         direction="left"
//                     >
//                         {firstHalf.map((skill, id) => (
//                             <div className="skill--box" key={id} style={skillBoxStyle}>
//                                 <img src={skillsImage(skill)} alt={skill} />
//                                 <h3 style={{color: theme.tertiary}}>
//                                     {skill}
//                                 </h3>
//                             </div>
//                         ))}
//                     </Marquee>
//                 </div>
                
//                 <div className="skill--scroll" style={{marginTop: '40px'}}>
//                     <Marquee 
//                         gradient={false} 
//                         speed={80} 
//                         pauseOnHover={true}
//                         pauseOnClick={true} 
//                         delay={0}
//                         play={true} 
//                         direction="right"
//                     >
//                         {secondHalf.map((skill, id) => (
//                             <div className="skill--box" key={id} style={skillBoxStyle}>
//                                 <img src={skillsImage(skill)} alt={skill} />
//                                 <h3 style={{color: theme.tertiary}}>
//                                     {skill}
//                                 </h3>
//                             </div>
//                         ))}
//                     </Marquee>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Skills



// import React, { useContext } from 'react';
// import Marquee from "react-fast-marquee";

// import './Skills.css';

// import { ThemeContext } from '../../contexts/ThemeContext';
// import { skillsData } from '../../data/skillsData';
// import { skillsImage } from '../../utils/skillsImage';

// function Skills() {
//     const { theme } = useContext(ThemeContext);

//     const skillBoxStyle = {
//         backgroundColor: theme.secondary,
//         boxShadow: `0px 0px 30px ${theme.primary30}`
//     };

//     return (
//         <div className="skills" style={{ backgroundColor: theme.secondary }}>
//             <div className="skillsHeader">
//                 <h2 style={{ color: theme.primary }}>Skills</h2>
//             </div>
//             <div className="skillsContainer">
//                 <div className="skill--scroll">
//                     <Marquee 
//                         gradient={false} 
//                         speed={80} 
//                         pauseOnHover 
//                         pauseOnClick 
//                         direction="left"
//                     >
//                         {skillsData.map((skill, index) => (
//                             <div className="skill--box" key={`${skill}-${index}`} style={skillBoxStyle}>
//                                 <img src={skillsImage(skill)} alt={skill} loading="lazy" />
//                                 <h3 style={{ color: theme.tertiary }}>{skill}</h3>
//                             </div>
//                         ))}
//                     </Marquee>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Skills;


// import React, { useContext } from 'react';
// import Marquee from "react-fast-marquee";

// import './Skills.css';

// import { ThemeContext } from '../../contexts/ThemeContext';
// import { skillsData } from '../../data/skillsData';
// import { skillsImage } from '../../utils/skillsImage';

// function Skills() {
//     const { theme } = useContext(ThemeContext);

//     const skillBoxStyle = {
//         backgroundColor: theme.secondary,
//         boxShadow: `0px 10px 20px rgba(0, 0, 0, 0.12)`
//     };

//     // Duplicate the skills data to ensure seamless scrolling
//     const duplicatedSkills = [...skillsData, ...skillsData];

//     // Split the duplicated skills data into two halves
//     const midIndex = Math.ceil(duplicatedSkills.length / 2);
//     const firstRowSkills = duplicatedSkills.slice(0, midIndex);
//     const secondRowSkills = duplicatedSkills.slice(midIndex);

//     return (
//         <div className="skills" style={{ backgroundColor: theme.secondary }}>
//             <div className="skillsHeader">
//                 <h2 style={{ color: theme.primary }}>Skills</h2>
//             </div>
//             <div className="skillsContainer">
//                 {/* First Row */}
//                 <div className="skill--scroll">
//                     <Marquee
//                         gradient={false}
//                         speed={80} // Adjust speed for smooth scrolling
//                         pauseOnHover={true} // Pause on hover
//                         pauseOnClick={true} // Pause on click
//                         delay={0} // No delay before starting
//                         play={true} // Ensure the marquee is always playing
//                         direction="left" // Scroll direction
//                         loop={0} // Infinite loop (0 means infinite)
//                     >
//                         {firstRowSkills.map((skill, index) => (
//                             <div className="skill--box" key={`first-${skill}-${index}`} style={skillBoxStyle}>
//                                 <img src={skillsImage(skill)} alt={skill} loading="lazy" />
//                                 <h3 style={{ color: theme.tertiary }}>{skill}</h3>
//                             </div>
//                         ))}
//                     </Marquee>
//                 </div>

//                 {/* Second Row (Opposite Direction) */}
//                 <div className="skill--scroll">
//                     <Marquee
//                         gradient={false}
//                         speed={80} // Adjust speed for smooth scrolling
//                         pauseOnHover={true} // Pause on hover
//                         pauseOnClick={true} // Pause on click
//                         delay={0} // No delay before starting
//                         play={true} // Ensure the marquee is always playing
//                         direction="right" // Scroll direction
//                         loop={0} // Infinite loop (0 means infinite)
//                     >
//                         {secondRowSkills.map((skill, index) => (
//                             <div className="skill--box" key={`second-${skill}-${index}`} style={skillBoxStyle}>
//                                 <img src={skillsImage(skill)} alt={skill} loading="lazy" />
//                                 <h3 style={{ color: theme.tertiary }}>{skill}</h3>
//                             </div>
//                         ))}
//                     </Marquee>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Skills;


import React, { useContext } from 'react';
import Marquee from "react-fast-marquee";

import './Skills.css';

import { ThemeContext } from '../../contexts/ThemeContext';
import { skillsData } from '../../data/skillsData';
import { skillsImage } from '../../utils/skillsImage';

function Skills() {
    const { theme } = useContext(ThemeContext);

    const skillBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 10px 20px rgba(0, 0, 0, 0.12)`
    };

    // Split skillsData into two unique halves
    const midIndex = Math.ceil(skillsData.length / 2);
    const firstRowSkills = skillsData.slice(0, midIndex); // First half of skills
    const secondRowSkills = skillsData.slice(midIndex); // Second half of skills

    // Duplicate each half to ensure seamless scrolling
    const duplicatedFirstRowSkills = [...firstRowSkills, ...firstRowSkills];
    const duplicatedSecondRowSkills = [...secondRowSkills, ...secondRowSkills];

    return (
        <div className="skills" style={{ backgroundColor: theme.secondary }}>
            <div className="skillsHeader">
                <h2 style={{ color: theme.primary }}>Skills</h2>
            </div>
            <div className="skillsContainer">
                {/* First Row */}
                <div className="skill--scroll">
                    <Marquee
                        gradient={false}
                        speed={80} // Adjust speed for smooth scrolling
                        pauseOnHover={true} // Pause on hover
                        pauseOnClick={true} // Pause on click
                        delay={0} // No delay before starting
                        play={true} // Ensure the marquee is always playing
                        direction="left" // Scroll direction
                        loop={0} // Infinite loop (0 means infinite)
                    >
                        {duplicatedFirstRowSkills.map((skill, index) => (
                            <div className="skill--box" key={`first-${skill}-${index}`} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} loading="lazy" />
                                <h3 style={{ color: theme.tertiary }}>{skill}</h3>
                            </div>
                        ))}
                    </Marquee>
                </div>

                {/* Second Row (Opposite Direction) */}
                <div className="skill--scroll">
                    <Marquee
                        gradient={false}
                        speed={80} // Adjust speed for smooth scrolling
                        pauseOnHover={true} // Pause on hover
                        pauseOnClick={true} // Pause on click
                        delay={0} // No delay before starting
                        play={true} // Ensure the marquee is always playing
                        direction="right" // Scroll direction
                        loop={0} // Infinite loop (0 means infinite)
                    >
                        {duplicatedSecondRowSkills.map((skill, index) => (
                            <div className="skill--box" key={`second-${skill}-${index}`} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} loading="lazy" />
                                <h3 style={{ color: theme.tertiary }}>{skill}</h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    );
}

export default Skills;