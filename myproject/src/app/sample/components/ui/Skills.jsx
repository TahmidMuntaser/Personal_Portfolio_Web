import React from "react";

const Skills = ({ skills }) => {
    return(
        <section id="skills" className="bg-gradient-to-b from-purple-900/45 to-purple-900/20 py-12 md:py-20 px-4 md:px-8 lg:px-20 scroll-mt-52">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-purple-800 to-purple-100 bg-clip-text" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        My Skills
                    </h2>
                    <p className="text-gray-300 text-sm md:text-base"> These are the technologies and languages I work with.</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
                    {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="bg-gray-950 hover:border-purple-500 border border-gray-700 rounded-xl p-4 md:p-6 lg:p-8 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                    >
                        <div className="text-purple-400 mb-2 md:mb-3 lg:mb-4 text-2xl md:text-3xl lg:text-4xl">{skill.icon}</div>
                        <p className="text-white font-semibold text-xs md:text-sm lg:text-base text-center">{skill.name}</p>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;