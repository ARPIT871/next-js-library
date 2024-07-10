import React from 'react';
import { sidecontentimages } from '../data/data';
import './index.css'; 
import { Link } from 'react-router-dom';


const SideContent = () => {
  return (
    <div className="side-content" style={{marginTop:'60px'}}>
      {sidecontentimages.map(image => (
        <div key={image.id} className="image-container">
          <Link to={image.link}>
          <img src={image.url} alt={image.alt} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default SideContent;
