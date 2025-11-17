import React from 'react';
import '../css/Certificates.css';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'MERN Stack',
      provider: 'C-DAC Patna',
      description: 'Comprehensive training in MERN development, including hooks, state management, and component architecture.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop',
      url: 'https://drive.google.com/file/d/1y6LYdFFpAJOdLkw3U9-M8zZS_wlDZcyg/view'
    },
    {
      id: 2,
      title: 'Full-Stack Web Development',
      provider: 'Udemy',
      description: 'Complete full-stack development course covering front-end and back-end technologies.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop',
      url: 'https://www.udemy.com/certificate/UC-97a20e2a-d1de-4830-a7b7-dcce4002d10f/ '
    },
  //   {
  //     id: 3,
  //     title: 'JavaScript Algorithms and Data Structures',
  //     provider: 'freeCodeCamp',
  //     description: 'Advanced JavaScript concepts, algorithms, and data structures for efficient programming.',
  //     image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop',
  //     url: 'https://freecodecamp.org/certificate/example3'
  //   },
  //   {
  //     id: 4,
  //     title: 'Node.js Developer Certification',
  //     provider: 'IBM',
  //     description: 'Server-side development with Node.js, including Express.js, databases, and API development.',
  //     image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop',
  //     url: 'https://ibm.com/certificate/example4'
  //   },
  //   {
  //     id: 5,
  //     title: 'MongoDB Developer Certification',
  //     provider: 'MongoDB University',
  //     description: 'Database design, aggregation framework, and performance optimization with MongoDB.',
  //     image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=250&fit=crop',
  //     url: 'https://university.mongodb.com/certificate/example5'
  //   },
  //   {
  //     id: 6,
  //     title: 'AWS Cloud Practitioner',
  //     provider: 'Amazon Web Services',
  //     description: 'Cloud computing fundamentals, AWS services, and cloud architecture best practices.',
  //     image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop',
  //     url: 'https://aws.amazon.com/certificate/example6'
  //   }
  ];

  return (
    <section className="certificates" id="certificates">
      <div className="container">
        <h2 className="section-title">
          Browse My<br />
          <span className="highlight">Recent Certificates</span>
        </h2>
        
        <div className="certificates-grid">
          {certificates.map((certificate) => (
            <div key={certificate.id} className="certificate-card">
              <div className="certificate-image">
                <img src={certificate.image} alt={certificate.title} />
                <div className="certificate-overlay">
                  <a href={certificate.url} target="_blank" rel="noopener noreferrer" className="view-certificate">
                    View Certificate
                  </a>
                </div>
              </div>
              
              <div className="certificate-content">
                <h3 className="certificate-title">{certificate.title}</h3>
                <p className="certificate-provider">{certificate.provider}</p>
                <p className="certificate-description">{certificate.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
