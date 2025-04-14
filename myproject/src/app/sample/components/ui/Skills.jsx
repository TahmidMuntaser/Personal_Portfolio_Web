import React from "react";

const Skills = () => {
    return(
        <section id="skills" className="bg-gradient-to-b from-purple-900/45 to-purple-900/20 py-20 px-4 md:px-20">
            <div className="text-center mb-12">
                <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-800 to-purple-100 bg-clip-text" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    My Skills
                </h2>
                <p className="text-gray-300"> These are the technologies and languages I work with.</p>
            </div>
        </section>

    );
};

export default Skills;