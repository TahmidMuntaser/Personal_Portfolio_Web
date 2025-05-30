import React from 'react';
import WorkCard from './WorkCard';
const Works = ({projects}) => {
    return(
        <section id='works' className='text-white py-16 px-4 md:px-16 bg-gradient-to-b from-purple-900/45 to-purple-900/20'>
            <div className="text-center mb-10">
                <h2 className='text-5xl font-bold mb-4 bg-gradient-to-r from-purple-800 to-purple-100 bg-clip-text' style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>My Recent Works</h2>
                <p className="text-gray-300">We turn your ideas and dreams into a unique online experience that captivates you and your audience.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project) =>(
                    <WorkCard key={project.id} {...project} />)
                )}
            </div>
        </section>
    );
};

export default Works;