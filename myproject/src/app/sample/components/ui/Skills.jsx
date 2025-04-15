import React from "react";

const Skills = ({ skills }) => {
    return(
        <section id="skills" className="bg-gradient-to-b from-purple-900/45 to-purple-900/20 py-20 px-4 md:px-20">
            <div className="text-center mb-12">
                <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-800 to-purple-100 bg-clip-text" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    My Skills
                </h2>
                <p className="text-gray-300"> These are the technologies and languages I work with.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                {skills.map((skill, index) => (
                <div
                    key={index}
                    className="bg-gray-900 hover:border-purple-500 border border-gray-700 rounded-xl p-8 flex flex-col items-center justify-center transition-all duration-300"
                >
                    <div className="text-purple-400 mb-4">{skill.icon}</div>
                    <p className="text-white font-semibold">{skill.name}</p>
                </div>
                ))}
            </div>
        </section>

    );
};

export default Skills;