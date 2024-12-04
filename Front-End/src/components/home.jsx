import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import './home.css';

const materials = [
  { name: 'Iron', imgSrc: '/iron.jpg', altText: 'Iron Image', description: 'Used in construction for reinforcement and framework.' },
  { name: 'Cement', imgSrc: '/ceme.webp', altText: 'Cement Image', description: 'A binding material used in construction for making concrete.' },
  { name: 'Bricks', imgSrc: '/Bricks.jpg', altText: 'Bricks Image', description: 'Commonly used for building walls and foundations.' },
  { name: 'Furniture', imgSrc: '/furni.jpg', altText: 'Furniture Image', description: 'Used for interior design and functional needs in buildings.' },
  { name: 'Sand', imgSrc: '/beach-sand.jpg', altText: 'Sand Image', description: 'Used in making concrete, plaster, and for other construction purposes.' },
  { name: 'Marbles', imgSrc: '/marble.jpg', altText: 'Marbles Image', description: 'A decorative stone used in flooring, countertops, and sculptures.' },
  { name: 'Tiles', imgSrc: '/tiless.webp', altText: 'Tiles Image', description: 'Used for covering roofs, floors, walls, steps and countertops.' },
  { name: 'Paint', imgSrc: '/Paints.jpg', altText: 'Paint Image', description: 'Applied on surfaces for decoration, protection, and waterproofing.' },
  { name: 'Raw-Materials', imgSrc: '/raw.jpeg', altText: 'Raw Materials', description: 'Essential steel are crucial for creating strong and durable structures' }
];

const workers = [
  { name: 'Plumbers', imgSrc: '/plumbing.jpg', altText: 'Plumber Image' },
  { name: 'Painters', imgSrc: '/lpainter.jpg', altText: 'Painter Image' },
  { name: 'Designers', imgSrc: '/designers.jpg', altText: 'Designer Image' },
  { name: 'Electricians', imgSrc: '/electrian.jpg', altText: 'Electrician Image' },
];

const transportation = [
  { name: 'Truck', imgSrc: '/truck.jpeg', altText: 'Truck Image' },
  { name: 'Van', imgSrc: '/van.png', altText: 'Van Image' },
  { name: 'Lorry', imgSrc: '/lorry.jpg', altText: 'Lorry Image' },
];

const Home = () => {
  const { logout } = useAuth0();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter materials based on the search query
  const filteredMaterials = materials.filter(material =>
    material.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Ga+Maamli&display=swap" rel="stylesheet" />
      </Helmet>

      {/* Header Section */}
      <header className="header">
        <div className="logo-container">
          <h1 className="logo">BuildXpert</h1>
        </div>
        <nav className="navigation">
          <ul className="nav-list">
            <li className="nav-item"><a href="#hero">Home</a></li>
            <li className="nav-item"><a href="#about">About</a></li>
            <li className="nav-item"><a href="#materials">Services</a></li>
            <li className="nav-item"><a href="#contact">Contact</a></li>
            <li className='nav-item'>
              <input
                type="text"
                className="search-input"
                placeholder="Search Materials"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </li>
            <li className='nav-item'>
              <button className='lg-btn' onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-overlay"></div>
        <div className="content">
          <h1>
            <span className="highlight">We Construct</span>
            <br />
            your <span className="dream">Dream</span>
          </h1>
          <button className="contact-button">Contact us</button>
        </div>
      </section>

      {/* Materials Section */}
      <section id="materials" className="materials">
        <h2 className="section-title">MATERIALS</h2>
        <div className="materials-grid">
          {filteredMaterials.map((material, index) => (
            <div key={index} className="material-card">
              <div className="material-card-content">
                <img src={material.imgSrc} alt={material.altText} className="material-image" />
                <h5 className="material-title">{material.name}</h5>
                <p className="material-description">{material.description}</p>
                <div className="button-wrapper">
                  <Link to={`/details/${material.name.toLowerCase()}`}>
                    <button className="btn fill">View Details</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Sections (Workers, Transportation, About, Contact, Footer) */}
      {/* (No changes here for brevity) */}

    </div>
  );
};

export default Home;
