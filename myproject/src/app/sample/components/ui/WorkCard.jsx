import React from "react";
import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub, FaEye } from 'react-icons/fa';

const WorkCard = ({id, title, description, fullDescription, imageUrl, link, github, tags, features, gallery, onProjectClick }) => {
    
    const getTagColor = (tag) => {
        const colors = {
            'React': 'bg-blue-600/20 text-blue-300',
            'Next.js': 'bg-gray-600/20 text-gray-300',
            'Tailwind CSS': 'bg-cyan-600/20 text-cyan-300',
            'JavaScript': 'bg-yellow-600/20 text-yellow-300',
            'TypeScript': 'bg-blue-500/20 text-blue-400',
            'Node.js': 'bg-green-600/20 text-green-300',
            'Python': 'bg-yellow-500/20 text-yellow-400',
            'Django': 'bg-green-700/20 text-green-400',
            'MongoDB': 'bg-green-500/20 text-green-300',
            'Firebase': 'bg-orange-600/20 text-orange-300'
        };
        return colors[tag] || 'bg-purple-600/20 text-purple-300'; 
    };

    // Create complete project object with ALL properties
    const project = { 
        id, 
        title, 
        description, 
        fullDescription, 
        imageUrl, 
        link, 
        github, 
        tags, 
        features, 
        gallery 
    };
    
    return(
        <div className="relative bg-gray-900 rounded-xl overflow-hidden group shadow-2xl transition-all duration-500 hover:shadow-purple-500/20 hover:-translate-y-2 w-full max-w-sm mx-auto">
            
            {/* Image Container - Fixed aspect ratio */}
            <div className="relative w-full h-48 overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                        {link && (
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition-all duration-200 transform hover:scale-110 shadow-lg"
                                title="View Live Project"
                            >
                                <FaEye className="w-5 h-5" />
                            </a>
                        )}
                        {github && (
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-all duration-200 transform hover:scale-110 shadow-lg"
                                title="View Source Code"
                            >
                                <FaGithub className="w-5 h-5" />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-5 bg-gradient-to-b from-purple-900/45 to-purple-900/20 min-h-[200px]">
                <div className="flex flex-col h-full">
                    <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300 line-clamp-2">
                            {title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                            {description}
                        </p>
                        
                        {/* Dynamic Technology tags */}
                        {tags && tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                                {tags.slice(0, 3).map((tag, index) => (
                                    <span 
                                        key={index}
                                        className={`px-2 py-1 rounded-full text-xs font-medium ${getTagColor(tag)}`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                                {tags.length > 3 && (
                                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-600/20 text-gray-400">
                                        +{tags.length - 3}
                                    </span>
                                )}
                            </div>
                        )}
                    </div>
                    
                    {/* External link icon - Bottom right */}
                    <div className="flex justify-end">
                        <button
                            onClick={() => {
                                console.log('Clicking with project:', project);
                                onProjectClick && onProjectClick(project);
                            }}
                            className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                            title="View Project Details"
                        >
                            <FaExternalLinkAlt className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Subtle border glow on hover */}
            <div className="absolute inset-0 rounded-xl border border-purple-500/0 group-hover:border-purple-500/30 transition-all duration-300 pointer-events-none"></div>
        </div>
    )
}

export default WorkCard;