import React from 'react';
import '../css/Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'FeePay - A Payment Gateway',
      description: 'A full-stack payment gateway application with user authentication, payment integration, and admin dashboard with reciept generation.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
      githubUrl: 'https://github.com/AadityaIsBack/Online-Fee-Payment-and-Reciept-System',
      liveUrl: 'https://online-fee-payment-and-reciept-syst.vercel.app/'
    },
    {
      id: 2,
      title: 'Code Snippet Library',
      description: 'A modern, full-stack web application for storing, managing, and executing code snippets across 40+ programming languages. Built with the MERN stack and featuring real-time code execution, gamification, and social features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      technologies: ['React', 'Express', 'Bcrypt', 'JWT', 'Chart'],
      githubUrl: 'https://github.com/aaditya248659/Code-Snippet-Library',
      liveUrl: 'https://code-snippet-lib.netlify.app/'
    },
    {
      id: 3,
      title: 'BookBazzar - BookStore App',
      description: 'A full-stack MERN (MongoDB, Express.js, React.js, Node.js) e-commerce application for buying and selling books online. Features include user authentication, shopping cart, order management, payment gateway integration, admin panel, and more.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
      technologies: ['React', 'Express', 'Bcrypt', 'React Toastify', 'JWT'],
      githubUrl: 'https://github.com/aaditya248659/BookBazaar-Bookstore-App',
      liveUrl: 'https://book-bazaar-bookstore-app-xdwf.vercel.app/'
    },
    {
      id: 4,
      title: 'BlogSphere - Blogging Platform',
      description: 'A full-stack blogging platform built with the MERN stack (MongoDB, Express.js, React, Node.js).',
      image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=500&h=300&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'React - Quill', 'Cloudinary'],
      githubUrl: 'https://github.com/aaditya248659/BlogSphere-Blogging-Platform',
      liveUrl: 'https://blog-sphere-blogging-platform.vercel.app/'
    },
    // {
    //   id: 5,
    //   title: 'Portfolio Website',
    //   description: 'A modern and responsive portfolio website showcasing projects, skills, and professional experience.',
    //   image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
    //   technologies: ['React', 'CSS3', 'Framer Motion', 'Responsive Design'],
    //   githubUrl: 'https://github.com/yourusername/portfolio',
    //   liveUrl: 'https://your-portfolio-demo.com'
    // }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">
          Browse My Recent<br />
          <span className="highlight">Projects</span>
        </h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fab fa-github"></i>
                      Github
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i>
                      Demo
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
