"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub, FaTimes, FaCheck, FaStar, FaChevronLeft, FaChevronRight, FaRocket } from 'react-icons/fa';

const ProjectDetail = ({ project, isOpen, onClose }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setIsAnimating(true);
        } else {
            document.body.style.overflow = 'unset';
            setIsAnimating(false);
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
            'React.js': 'bg-blue-600/20 text-blue-300 border-blue-500/30',
            'Next.js': 'bg-gray-600/20 text-gray-300 border-gray-500/30',
            'Tailwind CSS': 'bg-cyan-600/20 text-cyan-300 border-cyan-500/30',
            'JavaScript': 'bg-yellow-600/20 text-yellow-300 border-yellow-500/30',
            'TypeScript': 'bg-blue-500/20 text-blue-400 border-blue-400/30',
            'Node.js': 'bg-green-600/20 text-green-300 border-green-500/30',
            'Express.js': 'bg-gray-700/20 text-gray-300 border-gray-600/30',
            'Python': 'bg-yellow-500/20 text-yellow-400 border-yellow-400/30',
            'Django': 'bg-green-700/20 text-green-400 border-green-600/30',
            'MongoDB': 'bg-green-500/20 text-green-300 border-green-400/30',
            'Firebase': 'bg-orange-600/20 text-orange-300 border-orange-500/30',
            'MySQL': 'bg-blue-700/20 text-blue-400 border-blue-600/30',
            'SQLite3': 'bg-blue-700/20 text-blue-400 border-blue-600/30',
            'Html': 'bg-orange-500/20 text-orange-300 border-orange-400/30',
            'HTML': 'bg-orange-500/20 text-orange-300 border-orange-400/30',
            'CSS': 'bg-blue-400/20 text-blue-300 border-blue-300/30',
            'Vite': 'bg-purple-600/20 text-purple-300 border-purple-500/30',
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
            className={`fixed inset-0 bg-black/70 backdrop-blur-xl z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
            onClick={handleBackdropClick}
        >
            {/* Modal Container with Glassmorphism - Full Scroll */}
            <div className={`relative bg-gradient-to-br from-gray-900/95 via-black/95 to-gray-900/95 backdrop-blur-2xl w-full max-w-6xl max-h-[96vh] rounded-3xl shadow-2xl border border-white/10 transition-all duration-500 overflow-y-auto custom-scrollbar ${isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                
                {/* Animated Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-purple-700/5 to-purple-500/5 animate-gradient pointer-events-none"></div>
                
                {/* Close Button - Fixed Position */}
                <div className="sticky top-0 z-50 flex justify-end p-4 pointer-events-none">
                    <button
                        onClick={onClose}
                        className="bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-90 shadow-lg shadow-red-500/50 backdrop-blur-sm pointer-events-auto"
                        title="Close (ESC)"
                    >
                        <FaTimes className="w-5 h-5" />
                    </button>
                </div>

                {/* Hero Section - Compact & Modern */}
                <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden -mt-20">
                    {/* Background Image with Blur */}
                    <div className="absolute inset-0">
                        <Image
                            src={project.imageUrl}
                            alt={project.title}
                            fill
                            className="object-cover scale-110 blur-sm"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
                    </div>
                    
                    {/* Hero Content */}
                    <div className="relative h-full flex flex-col justify-end p-6 sm:p-8 md:p-10">
                        {/* Title with Gradient */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-100 via-purple-200 to-white bg-clip-text text-transparent mb-3 drop-shadow-2xl animate-fadeIn">
                            {project.title}
                        </h1>
                        
                        {/* Description */}
                        <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl line-clamp-2 drop-shadow-lg animate-fadeIn animation-delay-100">
                            {project.description}
                        </p>
                        
                        {/* Decorative Line */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-600 to-transparent"></div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="relative p-4 sm:p-6 md:p-8 space-y-8">
                        
                        {/* Action Buttons - Modern Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative overflow-hidden bg-gradient-to-br from-purple-700 to-purple-900 hover:from-purple-600 hover:to-purple-800 text-white p-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50"
                                >
                                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                    <div className="relative flex items-center justify-center gap-2">
                                        <FaRocket className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                                        <span className="text-sm sm:text-base">View Live Demo</span>
                                        <FaExternalLinkAlt className="w-3 h-3" />
                                    </div>
                                </a>
                            )}
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white p-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-gray-500/50"
                                >
                                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                    <div className="relative flex items-center justify-center gap-2">
                                        <FaGithub className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                        <span className="text-sm sm:text-base">View Source Code</span>
                                    </div>
                                </a>
                            )}
                        </div>

                        {/* Tech Stack - Clean & Simple */}
                        {project.tags && project.tags.length > 0 && (
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                <h2 className="text-2xl font-bold text-white mb-4">
                                    Technologies Used
                                </h2>
                                
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, index) => (
                                        <span 
                                            key={index}
                                            className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 hover:scale-105 ${getTagColor(tag)}`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* About Section - Glassmorphism Card */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-1 h-8 bg-gradient-to-b from-purple-600 to-purple-900 rounded-full"></div>
                                <h2 className="text-2xl font-bold text-white">
                                    About This Project
                                </h2>
                            </div>
                            <p className="text-gray-300 text-base leading-relaxed">
                                {project.fullDescription || project.description}
                            </p>
                        </div>

                        {/* Key Features - Enhanced Cards */}
                        {project.features && project.features.length > 0 && (
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                                        <FaStar className="text-white w-5 h-5" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-white">
                                        Key Features
                                    </h2>
                                </div>
                                <div className="grid gap-4">
                                    {project.features.map((feature, index) => (
                                        <div 
                                            key={index} 
                                            className="group relative overflow-hidden bg-gradient-to-r from-white/5 to-white/10 hover:from-purple-900/20 hover:to-purple-700/20 p-5 rounded-xl border border-white/10 hover:border-purple-600/50 transition-all duration-300 hover:scale-[1.02]"
                                            style={{ animationDelay: `${index * 100}ms` }}
                                        >
                                            {/* Number Badge */}
                                                    <div className="absolute top-3 right-3 w-8 h-8 bg-gradient-to-br from-purple-700 to-purple-900 rounded-lg flex items-center justify-center text-white text-sm font-bold shadow-lg opacity-60 group-hover:opacity-100 transition-opacity">
                                                {index + 1}
                                            </div>
                                            
                                            <div className="flex items-start gap-4 pr-10">
                                                {/* Check Icon */}
                                                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mt-0.5">
                                                    <FaCheck className="w-3 h-3 text-white" />
                                                </div>
                                                
                                                {/* Feature Text */}
                                                <p className="text-gray-300 text-base leading-relaxed flex-1">
                                                    {feature}
                                                </p>
                                            </div>
                                            
                                            {/* Hover Effect Line */}
                                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-700 to-purple-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        
                        {/* Project Gallery - Modern Grid */}
                        {project.gallery && project.gallery.length > 0 && (
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-1 h-8 bg-gradient-to-b from-purple-600 to-purple-900 rounded-full"></div>
                                    <h2 className="text-2xl font-bold text-white">
                                        Project Gallery
                                    </h2>
                                    <span className="ml-auto text-sm text-gray-400 bg-white/10 px-3 py-1 rounded-full">
                                        {project.gallery.length} {project.gallery.length === 1 ? 'Image' : 'Images'}
                                    </span>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                                    {project.gallery.map((image, index) => (
                                        <div 
                                            key={index} 
                                                    className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer border-2 border-white/10 hover:border-purple-600/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-600/30"
                                            onClick={() => openImageModal(image, index)}
                                            style={{ animationDelay: `${index * 50}ms` }}
                                        >
                                            {/* Image */}
                                            <Image
                                                src={image}
                                                alt={`Screenshot ${index + 1}`}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            
                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                    {/* Zoom Icon */}
                                                            <div className="w-12 h-12 bg-gradient-to-br from-purple-700 to-purple-900 rounded-full flex items-center justify-center mb-2 transform scale-75 group-hover:scale-100 transition-transform">
                                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-white font-bold text-sm">View Full Size</span>
                                                </div>
                                            </div>
                                            
                                            {/* Counter Badge */}
                                            <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-xs font-bold border border-white/20">
                                                {index + 1}/{project.gallery.length}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                </div>
            </div>

            {/* Image Lightbox Modal - Enhanced */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[60] flex items-center justify-center p-4 animate-fadeIn" 
                    onClick={closeImageModal}
                >
                    <div className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                        
                        {/* Close Button */}
                        <button
                            onClick={closeImageModal}
                            className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-90 shadow-lg shadow-red-500/50"
                            title="Close (ESC)"
                        >
                            <FaTimes className="w-5 h-5" />
                        </button>

                        {/* Navigation Buttons */}
                        {selectedImage.index > 0 && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    openImageModal(project.gallery[selectedImage.index - 1], selectedImage.index - 1);
                                }}
                                className="absolute left-2 sm:left-4 z-10 bg-white/10 backdrop-blur-md hover:bg-purple-600 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 shadow-xl"
                                title="Previous (←)"
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
                                className="absolute right-2 sm:right-4 z-10 bg-white/10 backdrop-blur-md hover:bg-purple-600 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 shadow-xl"
                                title="Next (→)"
                            >
                                <FaChevronRight className="w-6 h-6" />
                            </button>
                        )}

                        {/* Image Container */}
                        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                            <Image
                                src={selectedImage.src}
                                alt={`Screenshot ${selectedImage.index + 1}`}
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>

                        {/* Image Counter */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md text-white px-6 py-3 rounded-full border border-white/20 shadow-xl">
                            <span className="text-sm font-bold">
                                {selectedImage.index + 1} / {project.gallery.length}
                            </span>
                        </div>
                    </div>
                </div>
            )}

            {/* Custom Styles */}
            <style jsx>{`
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 15s ease infinite;
                }
                
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-in;
                }
                
                .animation-delay-100 {
                    animation-delay: 100ms;
                }

                .custom-scrollbar {
                    scrollbar-width: thin;
                    scrollbar-color: rgba(109, 40, 217, 0.6) rgba(31, 41, 55, 0.3);
                }
                
                .custom-scrollbar::-webkit-scrollbar {
                    width: 10px;
                }
                
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(31, 41, 55, 0.3);
                    border-radius: 10px;
                }
                
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: linear-gradient(180deg, rgba(109, 40, 217, 0.8), rgba(147, 51, 234, 0.8));
                    border-radius: 10px;
                    border: 2px solid rgba(31, 41, 55, 0.3);
                }
                
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: linear-gradient(180deg, rgba(109, 40, 217, 1), rgba(147, 51, 234, 1));
                }
            `}</style>
        </div>
    );
};

export default ProjectDetail;