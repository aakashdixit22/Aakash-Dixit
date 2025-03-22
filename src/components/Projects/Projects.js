import React from 'react';
import SingleProject from './SingleProject/SingleProject';
import { projectsData } from '../../data/projectsData';
import './Projects.css';

const Projects = () => {
    return (
        <section className="projects-section">
            <h1 className="projects-title">Projects</h1>
            <div className="projects-container">
                {projectsData.map((project) => (
                    <SingleProject key={project.id} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;