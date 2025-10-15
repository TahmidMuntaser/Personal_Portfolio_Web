"use client";

import React, { useState } from 'react';
import WorkCard from './WorkCard';
import ProjectDetail from './ProjectDetail';

const Works = ({ projects }) => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <section id='works' className='text-white py-16 px-4 md:px-16 bg-gradient-to-b from-purple-900/45 to-purple-900/20'>
            <div className="text-center mb-10">
                <h2 className='text-5xl font-bold mb-4 bg-gradient-to-r from-purple-800 to-purple-100 bg-clip-text' style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>My Recent Works</h2>
                <p className="text-gray-300">We turn your ideas and dreams into a unique online experience that captivates you and your audience.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {projects.map((project) => (
                    <WorkCard 
                        key={project.id} 
                        {...project} 
                        onProjectClick={handleProjectClick}
                    />
                ))}
            </div>

            <ProjectDetail
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </section>
    );
};

export default Works;