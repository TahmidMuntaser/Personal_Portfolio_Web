import React from 'react';
import { notFound } from 'next/navigation';
import Navbar from '../../sample/components/ui/Navbar';
import Footer from '../../sample/components/ui/Footer';
import ProjectDetail from '../../sample/components/ui/ProjectDetail';
import { getProjectBySlug } from '../../data/projects';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return { title: project ? `${project.title} — Tahmid Muntaser` : 'Project not found' };
}

const ProjectPage = async ({ params }) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main>
        <ProjectDetail project={project} />
      </main>
      <Footer />
    </>
  );
};

export default ProjectPage;