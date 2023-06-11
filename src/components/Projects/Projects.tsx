import React, { useState } from 'react';
import './Projects.css';
import { projects } from './metadata';
import useWindowDimensions from '../../hooks/getWindowDimensions';
import { Button } from '@mui/material';

type IReference = {
  title: string,
  url: string,
}

type IProject = {
  key: string,
  title: string,
  description: string,
  preview_image: string,
  type: string,
  references: IReference[]
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState('ff');
  const { width } = useWindowDimensions();

  function ProjectsList({ projects }: { projects: IProject[] }) {
    return <div className="projects">
      {
        projects.map(project => {
          return (
            <div className="project" style={selectedProject === project.key ? { color: "#fdf420" } : {}} key={project.key} onClick={() => setSelectedProject(project.key)}>
              <h5>{project.title}</h5>
            </div>
          );
        }
        )
      }
    </div>
  };
  function ProjectReferences({ references }: { references: IReference[] | undefined }) {
    if (references === undefined) {
      return null
    }
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {references.map(reference => {
          return (
            <Button className='reference-button' variant="contained" href={reference.url} target="_blank" rel="noopener noreferrer" sx={{
              backgroundColor: "#fdf420", color: "black", marginRight: 2, ':hover': {
                bgcolor: 'black',
                color: '#fdf420',
              },
            }}>
              {reference.title}
            </Button>
          )
        })}
      </div>
    )
  }
  function ProjectDetails({ project }: { project: IProject | undefined }) {
    return (
      <div key={project?.key} className='project-details' style={{ backgroundColor: 'transparent' }}>
        <h6 style={{ textTransform: "capitalize" }}>{(project?.type) + " Project"}</h6>
        <div style={{ color: "white", paddingLeft: 0 }}>
          <h4>{project?.title}</h4>
          <p>{project?.description}</p>
        </div>
        <img alt={project?.title} src={require("./images/" + project?.preview_image)} style={{ width: "100%", marginBottom: 15, borderRadius: 12 }} />
        <ProjectReferences references={project?.references} />
      </div >
    )
  };

  if (width < 650) {
    return (
      <div className='projects-container'>
        <div className="projects-slider">
          {projects.map(project => <ProjectDetails project={project} />)}
        </div>
        <div className='swipe-hint'>
          <p style={{ color: "#fdf420", margin: "5px 0 0 0" }}>SWIPE</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="180" height="100">
            <defs>
              <marker fill='#fdf420' id="arrowhead" markerWidth="12" markerHeight="6"
                refX="0" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" />
              </marker>
            </defs>
            <line x1="50" y1="55" x2="120" y2="55" stroke="#fdf420"
              strokeWidth="2" markerEnd="url(#arrowhead)" />
          </svg>
        </div>
      </div>
    )
  }


  return (
    <div className="projects-container">
      <div className="projects-list">
        <h6>Key Projects</h6>
        <ProjectsList projects={projects.filter((project) => project.type === 'key')} />
        <h6>Minor Projects</h6>
        <ProjectsList projects={projects.filter((project) => project.type === 'minor')} />
      </div>
      <ProjectDetails project={projects.find(p => p.key === selectedProject)} />
    </div>
  );
}