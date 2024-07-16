import React, { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { setFontColorBasedOnBrightness } from '../functions/fontcolorproject';

const projects = [
  { id: 1, name: 'Project 1', description: 'Description 1', link: '#', image: '/assets/images/projects/project1.png' },
  { id: 2, name: 'Project 2', description: 'Description 2', link: '#', image: '/assets/images/projects/project2.png' },
  { id: 3, name: 'Project 3', description: 'Description 3', link: '#', image: '/assets/images/projects/project3.png' },
  { id: 4, name: 'Project 4', description: 'Description 4', link: '#', image: '/assets/images/projects/project4.png' },
  { id: 5, name: 'Project 5', description: 'Description 5', link: '#', image: '/assets/images/projects/project5.png' },
];

const Projects = () => {
  const [startIndex, setStartIndex] = useState(0);

  const goToNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const goToPrevious = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const visibleProjects = [
    projects[startIndex],
    projects[(startIndex + 1) % projects.length],
    projects[(startIndex + 2) % projects.length]
  ];

  return (
    <div className="relative w-10/12 h-full">
      <h3 className='text-4xl py-2 font-bold mb-10'>Projects</h3>
      <div className="flex justify-center items-center space-x-4 w-full relative">
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300 z-10"
          onClick={goToPrevious}
        >
          <AiOutlineArrowLeft className="text-gray-600" />
        </button>
        <div className="flex flex-wrap justify-center gap-4 w-full h-2/4 project-main-card">
          {visibleProjects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-card ${index === 1 ? 'highlighted' : 'dimmed'}`}
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <img
                id={`image-${project.id}`}
                src={project.image}
                onLoad={setFontColorBasedOnBrightness}
                alt={project.name}
                className="hidden"
              />
              <div className="h-full">
                <div className="px-6 py-4 flex items-center justify-center h-full">
                  <div id={`text-${project.id}`} className="font-bold text-xl mb-2">
                    {/* {project.name} */} Under Maintenance
                  </div>
                  <p id={`description-${project.id}`} className="text-gray-700 text-base">
                    {/* {project.description} */}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
          onClick={goToNext}
        >
          <AiOutlineArrowRight className="text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default Projects;

