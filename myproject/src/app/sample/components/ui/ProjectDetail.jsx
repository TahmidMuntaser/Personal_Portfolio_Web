"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub, FaTimes, FaCheck, FaStar } from 'react-icons/fa';

const ProjectDetail = ({ project, isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Handle escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen || !project) return null;

    const getTagColor = (tag) => {
        const colors = {
            'React': 'bg-blue-600/20 text-blue-300 border-blue-500/30',
            'Next.js': 'bg-gray-600/20 text-gray-300 border-gray-500/30',
            'Tailwind CSS': 'bg-cyan-600/20 text-cyan-300 border-cyan-500/30',
            'JavaScript': 'bg-yellow-600/20 text-yellow-300 border-yellow-500/30',
            'TypeScript': 'bg-blue-500/20 text-blue-400 border-blue-400/30',
            'Node.js': 'bg-green-600/20 text-green-300 border-green-500/30',
            'Python': 'bg-yellow-500/20 text-yellow-400 border-yellow-400/30',
            'Django': 'bg-green-700/20 text-green-400 border-green-400/30',
            'MongoDB': 'bg-green-500/20 text-green-300 border-green-400/30',
            'Firebase': 'bg-orange-600/20 text-orange-300 border-orange-500/30'
        };
        return colors[tag] || 'bg-purple-600/20 text-purple-300 border-purple-500/30';
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={handleBackdropClick}
        >
            <div className="bg-gray-900 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-gray-700/50">
                
                {/* Header */}
                <div className="bg-gradient-to-b from-purple-900/45 to-purple-900/20 p-8 border-b border-gray-700">
                    <div className="flex items-start justify-between">
                        <div className="flex-1 pr-16">
                            <h1 className="text-4xl font-bold text-white mb-3 leading-tight">
                                {project.title}
                            </h1>
                            <p className="text-purple-200 text-xl leading-relaxed">
                                {project.description}
                            </p>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-all duration-200 p-3 hover:bg-gray-800 rounded-full hover:scale-110"
                            title="Close (ESC)"
                        >
                            <FaTimes className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="overflow-y-auto max-h-[calc(90vh-140px)] bg-gray-900 custom-scrollbar">
                    <div className="p-8 space-y-8">
                        
                        {/* Main Image */}
                        <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-xl group">
                            <Image
                                src={project.imageUrl}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>

                        {/* Two Column Layout */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            
                            {/* Main Content */}
                            <div className="lg:col-span-2 space-y-8">
                                
                                {/* Description */}
                                <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                                    <div className="flex items-center mb-6">
                                        <div className="w-1 h-8 bg-purple-500 rounded-full mr-4"></div>
                                        <h2 className="text-2xl font-bold text-white">About This Project</h2>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed text-lg">
                                        {project.fullDescription || project.description}
                                    </p>
                                </div>

                                {/* Enhanced Features */}
                                {project.features && (
                                    <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                                        <div className="flex items-center mb-8">
                                            <div className="w-1 h-8 bg-purple-500 rounded-full mr-4"></div>
                                            <h2 className="text-2xl font-bold text-white flex items-center">
                                                <FaStar className="mr-3 text-yellow-400" />
                                                Key Features
                                            </h2>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {project.features.map((feature, index) => (
                                                <div 
                                                    key={index} 
                                                    className="group relative bg-gradient-to-r from-gray-700/50 to-gray-600/50 hover:from-purple-900/30 hover:to-purple-800/30 rounded-xl p-6 border border-gray-600/30 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
                                                >
                                                    <div className="flex items-start space-x-4">
                                                        <div className="flex-shrink-0 mt-1">
                                                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                                <FaCheck className="w-4 h-4 text-white" />
                                                            </div>
                                                        </div>
                                                        <div className="flex-1">
                                                            <p className="text-gray-300 group-hover:text-white leading-relaxed transition-colors duration-300 font-medium">
                                                                {feature}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    {/* Subtle gradient border effect */}
                                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Enhanced Gallery */}
                                {project.gallery && project.gallery.length > 0 && (
                                    <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                                        <div className="flex items-center justify-between mb-8">
                                            <div className="flex items-center">
                                                <div className="w-1 h-8 bg-purple-500 rounded-full mr-4"></div>
                                                <h2 className="text-2xl font-bold text-white">Project Gallery</h2>
                                            </div>
                                            <span className="text-purple-300 bg-purple-500/20 px-4 py-2 rounded-full text-sm font-medium border border-purple-400/30">
                                                {project.gallery.length} images
                                            </span>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {project.gallery.map((image, index) => (
                                                <div 
                                                    key={index} 
                                                    className="relative h-64 rounded-xl overflow-hidden shadow-lg group cursor-pointer border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300"
                                                >
                                                    <Image
                                                        src={image}
                                                        alt={`${project.title} screenshot ${index + 1}`}
                                                        fill
                                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 backdrop-blur-sm rounded-full p-3">
                                                            <FaExternalLinkAlt className="w-5 h-5 text-white" />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Enhanced Sidebar */}
                            <div className="space-y-8">
                                
                                {/* Technologies */}
                                {project.tags && (
                                    <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                                        <h3 className="text-xl font-bold text-white mb-6">Technologies Used</h3>
                                        <div className="flex flex-wrap gap-3">
                                            {project.tags.map((tag, index) => (
                                                <span 
                                                    key={index}
                                                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 hover:scale-105 ${getTagColor(tag)}`}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Enhanced Links */}
                                <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                                    <h3 className="text-xl font-bold text-white mb-6">Project Links</h3>
                                    <div className="space-y-4">
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-4 rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg w-full font-semibold"
                                            >
                                                <FaExternalLinkAlt className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
                                                <span>View Live Project</span>
                                            </a>
                                        )}
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group flex items-center justify-center gap-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white px-6 py-4 rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg w-full font-semibold"
                                            >
                                                <FaGithub className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
                                                <span>View Source Code</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Scrollbar */}
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(55, 65, 81, 0.3);
                    border-radius: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(147, 51, 234, 0.6);
                    border-radius: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(147, 51, 234, 0.8);
                }
            `}</style>
        </div>
    );
};

export default ProjectDetail;