"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub, FaTimes, FaCheck, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProjectDetail = ({ project, isOpen, onClose }) => {
    const [selectedImage, setSelectedImage] = useState(null);

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

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                if (selectedImage) {
                    setSelectedImage(null);
                } else {
                    onClose();
                }
            }
            if (selectedImage && project) {
                if (e.key === 'ArrowLeft' && selectedImage.index > 0) {
                    openImageModal(project.gallery[selectedImage.index - 1], selectedImage.index - 1);
                }
                if (e.key === 'ArrowRight' && selectedImage.index < project.gallery.length - 1) {
                    openImageModal(project.gallery[selectedImage.index + 1], selectedImage.index + 1);
                }
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose, selectedImage]);

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

    const openImageModal = (image, index) => {
        setSelectedImage({ src: image, index });
    };

    const closeImageModal = () => {
        setSelectedImage(null);
    };

    return (
        <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-lg z-50 flex items-center justify-center p-3 sm:p-6"
            onClick={handleBackdropClick}
        >
            {/* Modal - Bold Design */}
            <div className="bg-black w-full max-w-5xl max-h-[95vh] rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/20 border-2 border-purple-500/40">
                
                {/* Compact Hero Header with Image Background */}
                <div className="relative h-40 sm:h-48 overflow-hidden border-b-4 border-purple-500">
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40"></div>
                    
                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-red-600 hover:bg-red-700 text-white p-2 rounded-xl transition-all duration-200 hover:scale-110 shadow-xl"
                            title="Close (ESC)"
                        >
                            <FaTimes className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>

                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-2 drop-shadow-2xl">
                            {project.title}
                        </h1>
                        <p className="text-sm sm:text-base text-gray-200 max-w-3xl drop-shadow-lg line-clamp-1">
                            {project.description}
                        </p>
                    </div>
                </div>

                {/* Content Area */}
                <div className="overflow-y-auto max-h-[calc(95vh-11rem)] sm:max-h-[calc(95vh-13rem)] custom-scrollbar">
                    <div className="p-6 sm:p-10 space-y-10">
                        
                        {/* Action Buttons - Top */}
                        <div className="flex flex-wrap gap-4">
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 min-w-[200px] flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
                                >
                                    <FaExternalLinkAlt className="w-5 h-5" />
                                    <span>VIEW LIVE PROJECT</span>
                                </a>
                            )}
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 min-w-[200px] flex items-center justify-center gap-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                                >
                                    <FaGithub className="w-5 h-5" />
                                    <span>VIEW SOURCE CODE</span>
                                </a>
                            )}
                        </div>

                        {/* Content Sections */}
                        <div className="space-y-10">
                            
                            {/* About & Tech Stack - Two Column */}
                            <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8">
                                
                                {/* About Section */}
                                <div>
                                    <h2 className="text-3xl font-black text-white mb-6 pb-3 border-b-4 border-purple-500 inline-block">
                                        ABOUT PROJECT
                                    </h2>
                                    <p className="text-gray-300 text-lg leading-relaxed">
                                        {project.fullDescription || project.description}
                                    </p>
                                </div>
                                
                                {/* Tech Stack */}
                                {project.tags && project.tags.length > 0 && (
                                    <div>
                                        <h2 className="text-3xl font-black text-white mb-6 pb-3 border-b-4 border-purple-500 inline-block">
                                            TECH STACK
                                        </h2>
                                        <div className="flex flex-wrap gap-3">
                                            {project.tags.map((tag, index) => (
                                                <span 
                                                    key={index}
                                                    className={`px-4 py-2 rounded-lg text-sm font-bold border-2 transition-all duration-200 hover:scale-110 ${getTagColor(tag)}`}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                                {/* Features */}
                                {project.features && project.features.length > 0 && (
                                    <div>
                                        <h2 className="text-3xl font-black text-white mb-6 pb-3 border-b-4 border-purple-500 flex items-center gap-3 w-fit">
                                            <FaStar className="text-yellow-500" />
                                            KEY FEATURES
                                        </h2>
                                        <div className="space-y-4">
                                            {project.features.map((feature, index) => (
                                                <div 
                                                    key={index} 
                                                    className="group flex items-start gap-4 bg-gradient-to-r from-purple-900/30 to-transparent p-5 rounded-xl border-l-4 border-purple-500 hover:border-yellow-500 hover:bg-purple-900/50 transition-all duration-300"
                                                >
                                                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center text-white text-lg font-black shadow-lg">
                                                        {index + 1}
                                                    </div>
                                                    <p className="text-gray-300 text-lg leading-relaxed flex-1 pt-1">
                                                        {feature}
                                                    </p>
                                                    <FaCheck className="w-6 h-6 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-2" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                
                                {/* Gallery */}
                                {project.gallery && project.gallery.length > 0 && (
                                    <div>
                                        <h2 className="text-3xl font-black text-white mb-6 pb-3 border-b-4 border-purple-500 inline-block">
                                            PROJECT GALLERY
                                        </h2>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                            {project.gallery.map((image, index) => (
                                                <div 
                                                    key={index} 
                                                    className="relative h-36 sm:h-44 rounded-xl overflow-hidden cursor-pointer group border-2 border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
                                                    onClick={() => openImageModal(image, index)}
                                                >
                                                    <Image
                                                        src={image}
                                                        alt={`Screenshot ${index + 1}`}
                                                        fill
                                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                        <div className="text-center">
                                                            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                                                </svg>
                                                            </div>
                                                            <span className="text-white font-bold">EXPAND</span>
                                                        </div>
                                                    </div>
                                                    <div className="absolute top-2 left-2 bg-black/80 text-white px-2 py-1 rounded-md text-xs font-bold">
                                                        {index + 1}/{project.gallery.length}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Modal */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[60] flex items-center justify-center p-4" onClick={closeImageModal}>
                    <div className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                        {/* Close Button */}
                        <button
                            onClick={closeImageModal}
                            className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition-colors z-10"
                            title="Close (ESC)"
                        >
                            <FaTimes className="w-5 h-5" />
                        </button>

                        {/* Navigation */}
                        {selectedImage.index > 0 && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    openImageModal(project.gallery[selectedImage.index - 1], selectedImage.index - 1);
                                }}
                                className="absolute left-2 sm:left-4 bg-black/70 hover:bg-purple-600 text-white p-3 rounded-lg transition-colors z-10"
                            >
                                <FaChevronLeft className="w-6 h-6" />
                            </button>
                        )}

                        {selectedImage.index < project.gallery.length - 1 && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    openImageModal(project.gallery[selectedImage.index + 1], selectedImage.index + 1);
                                }}
                                className="absolute right-2 sm:right-4 bg-black/70 hover:bg-purple-600 text-white p-3 rounded-lg transition-colors z-10"
                            >
                                <FaChevronRight className="w-6 h-6" />
                            </button>
                        )}

                        {/* Image */}
                        <div className="relative w-full h-full">
                            <Image
                                src={selectedImage.src}
                                alt={`Screenshot ${selectedImage.index + 1}`}
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>

                        {/* Counter */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-lg">
                            <span className="text-sm font-medium">
                                {selectedImage.index + 1} / {project.gallery.length}
                            </span>
                        </div>
                    </div>
                </div>
            )}

            {/* Styles */}
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(31, 41, 55, 0.5);
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