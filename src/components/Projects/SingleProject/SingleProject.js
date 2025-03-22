import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';
import './SingleProject.css';

const SingleProject = ({ projectName, projectDesc, tags, code, demo, image }) => {
    return (
        <article className="project-card">
            <img src={image} alt={`${projectName} screenshot`} className="project-img" />
            <div className="project-content">
                <h3 className="project-title">{projectName}</h3>
                <p className="project-desc">{projectDesc}</p>
                <div className="project-icons">
                    <a href={code} target="_blank" rel="noreferrer" aria-label="GitHub">
                        <FaGithub className="icon" />
                    </a>
                    <a href={demo} target="_blank" rel="noreferrer" aria-label="Live Demo">
                        <FaLink className="icon" />
                    </a>
                </div>
                <div className="project-tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default SingleProject;