"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub, FaTimes, FaCheck, FaStar } from 'react-icons/fa';

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

    // Handle escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                if (selectedImage) {
                    setSelectedImage(null);
                } else {
                    onClose();
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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={handleBackdropClick}
        >
            <div className="bg-gray-900 mb-8 pb-8 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-gray-700/50">
                
                {/* Header */}
                <div className="relative bg-gradient-to-br from-purple-900/60 via-purp-900/40 to-indigo-900/50 p-8 border-b border-gray-700/50">
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-blue-500/25 to-purple-500/25 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>
                    
                    {/* Decorative Grid Pattern */}
                    <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}></div>
                
                    <div className="relative z-10 flex items-start justify-between">
                        <div className="flex-1 pr-16">
                            {/* Project Category Badge */}
                            <div className="mb-4">
                                <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 border border-purple-400/30 backdrop-blur-sm">
                                    <svg className="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                    Featured Project
                                </span>
                            </div>
                
                            {/* Project Title with Gradient Text */}
                            <h1 className="text-2xl lg:text-4xl font-black mb-4 leading-tight">
                                <span className="bg-gradient-to-r from-white via-purple-100 to-blue-100 bg-clip-text text-transparent">
                                    {project.title}
                                </span>
                            </h1>
                
                            {/* Project Description */}
                            <p className="text-purple-100/90 text-lg lg:text-xl leading-relaxed font-light max-w-3xl">
                                {project.description}
                            </p>
                 
                        </div>
                
                        {/* Enhanced Close Button */}
                        <div className="flex flex-col items-end space-y-4">
                            <button
                                onClick={onClose}
                                className="group relative text-gray-400 hover:text-white transition-all duration-300 p-4 hover:bg-white/10 rounded-2xl hover:scale-110 backdrop-blur-sm border border-gray-600/30 hover:border-purple-400/50"
                                title="Close (ESC)"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/20 group-hover:to-blue-500/20 rounded-2xl transition-all duration-300"></div>
                                <FaTimes className="w-6 h-6 relative z-10 group-hover:rotate-90 transition-transform duration-300" />
                            </button>
                
                        </div>
                    </div>
                
                    {/* Bottom Accent Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 opacity-60"></div>
                </div>

                {/* Content */}
                <div className="overflow-y-auto max-h-[calc(90vh-140px)] bg-[#001] custom-scrollbar">
                    <div className="p-8 space-y-8">
                        
                        {/* Main Image */}
                        <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-xl group">
                            <Image
                                src={project.imageUrl}
                                alt={project.title}
                                fill
                                className="object-contain transition-transform duration-500 group-hover:scale-105"
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
                                    <div className="bg-[#001] backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 relative overflow-hidden">
                                        {/* Animated background gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 animate-pulse"></div>
                                        
                                        <div className="relative z-10">
                                            <div className="flex items-center justify-between mb-8">
                                                <div className="flex items-center">
                                                    <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full mr-4"></div>
                                                    <h2 className="text-2xl font-bold text-white flex items-center">
                                                        <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                                                            <FaStar className="w-5 h-5 text-white" />
                                                        </div>
                                                        Key Features
                                                    </h2>
                                                </div>
                                                {/* Feature count indicator - moved to top right */}
                                                <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-500/30">
                                                    <span className="text-purple-300 font-medium text-sm">
                                                        {project.features.length} Features
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Innovative Feature Cards */}
                                            <div className="space-y-4">
                                                {project.features.map((feature, index) => (
                                                    <div 
                                                        key={index} 
                                                        className="group relative bg-gradient-to-r from-gray-900/80 to-gray-800/80 rounded-2xl p-6 border-l-4 border-transparent hover:border-purple-500 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-1"
                                                        style={{
                                                            animationDelay: `${index * 0.1}s`
                                                        }}
                                                    >
                                                        {/* Animated number badge */}
                                                        <div className="absolute -left-2 top-6">
                                                            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg group-hover:scale-125 transition-transform duration-300">
                                                                {index + 1}
                                                            </div>
                                                        </div>

                                                        {/* Feature content */}
                                                        <div className="ml-8">
                                                            <div className="flex items-start justify-between">
                                                                <div className="flex-1">
                                                                    <p className="text-gray-300 group-hover:text-white leading-relaxed transition-all duration-300 font-medium text-lg">
                                                                        {feature}
                                                                    </p>
                                                                </div>
                                                                
                                                                {/* Animated check icon */}
                                                                <div className="ml-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                                                                    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                                                                        <FaCheck className="w-4 h-4 text-white" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Hover effect overlay */}
                                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
                                                        
                                                        {/* Animated border */}
                                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                                
                                {/* Enhanced Gallery */}
                                {project.gallery && project.gallery.length > 0 && (
                                    <div className="bg-[#001] backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                                        <div className="flex items-center justify-between mb-8">
                                            <div className="flex items-center">
                                                <div className="w-1 h-8 bg-purple-500 rounded-full mr-4"></div>
                                                <h2 className="text-2xl font-bold text-white flex items-center">
                                                    <svg className="w-6 h-6 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                    Project Gallery
                                                </h2>
                                            </div>
                                            <span className="text-purple-300 bg-purple-500/20 px-4 py-2 rounded-full text-sm font-medium border border-purple-400/30">
                                                {project.gallery.length} screenshots
                                            </span>
                                        </div>

                                        {/* Masonry-style Gallery Grid */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {project.gallery.map((image, index) => (
                                                <div 
                                                    key={index} 
                                                    className={`relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer border border-gray-600/30 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 ${
                                                        index === 0 ? 'md:col-span-2 h-80' : 'h-64'
                                                    }`}
                                                    onClick={() => openImageModal(image, index)}
                                                >
                                                    <Image
                                                        src={image}
                                                        alt={`${project.title} screenshot ${index + 1}`}
                                                        fill
                                                        className="object-cover transition-all duration-700 group-hover:scale-110"
                                                    />
                                                    
                                                    {/* Gradient Overlay */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                                    
                                                    {/* Enhanced Hover Content */}
                                                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                                        {/* Expand Icon */}
                                                        <div className="bg-white/20 backdrop-blur-lg rounded-full p-4 mb-4 transform scale-75 group-hover:scale-100 transition-transform duration-500">
                                                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                                            </svg>
                                                        </div>
                                                        
                                                        {/* Image Counter */}
                                                        <div className="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                                                            <span className="text-white text-sm font-medium">
                                                                {index + 1} of {project.gallery.length}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    {/* Corner Badge for Featured Image */}
                                                    {index === 0 && (
                                                        <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                                            Featured
                                                        </div>
                                                    )}

                                                    {/* Image Number Badge */}
                                                    <div className="absolute top-4 right-4 w-8 h-8 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                        <span className="text-white text-sm font-bold">{index + 1}</span>
                                                    </div>

                                                    {/* Bottom Info Bar */}
                                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-white text-sm font-medium">
                                                                Screenshot {index + 1}
                                                            </span>
                                                            <div className="flex items-center space-x-2">
                                                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                                                <span className="text-green-400 text-xs">Click to expand</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Gallery Footer */}
                                        <div className="mt-8 pt-6 pb-6 border-t border-gray-700/50">
                                            <div className="flex items-center justify-center">
                                                <div className="flex items-center space-x-4 text-gray-400 text-sm">
                                                    <div className="flex items-center space-x-2">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                        </svg>
                                                        <span>Click any image to view full size</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Enhanced Sidebar */}
                            <div className="space-y-8">
                                
                                {/* Technologies */}
                                {project.tags && (
                                    <div className="bg-[#001] backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
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
                                <div className="bg-[#001] backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
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

            {/* Image Modal */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black/90  backdrop-blur-sm z-[60] flex items-center justify-center p-4" onClick={closeImageModal}>
                    <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                        {/* Close Button */}
                        <button
                            onClick={closeImageModal}
                            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200 p-3 hover:bg-black/50 rounded-full z-10"
                            title="Close (ESC)"
                        >
                            <FaTimes className="w-6 h-6" />
                        </button>

                        {/* Image Navigation */}
                        {selectedImage.index > 0 && (
                            <button
                                onClick={() => openImageModal(project.gallery[selectedImage.index - 1], selectedImage.index - 1)}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 p-3 hover:bg-black/50 rounded-full z-10"
                                title="Previous image"
                            >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                        )}

                        {selectedImage.index < project.gallery.length - 1 && (
                            <button
                                onClick={() => openImageModal(project.gallery[selectedImage.index + 1], selectedImage.index + 1)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 p-3 hover:bg-black/50 rounded-full z-10"
                                title="Next image"
                            >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        )}

                        {/* Full Size Image */}
                        <div className="relative w-full h-full flex items-center justify-center">
                            <Image
                                src={selectedImage.src}
                                alt={`${project.title} screenshot ${selectedImage.index + 1}`}
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>

                        {/* Image Info */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-6 py-3 rounded-full border border-white/20">
                            <span className="text-sm font-medium">
                                {selectedImage.index + 1} of {project.gallery.length} - Screenshot {selectedImage.index + 1}
                            </span>
                        </div>
                    </div>
                </div>
            )}

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