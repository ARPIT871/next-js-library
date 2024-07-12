import React from 'react';
import { sidecontentimages } from '../data/data';
import './index.css'; // Import the CSS file


const SideContent = () => {
  return (
    <div className="side-content" style={{marginTop:'60px'}}>
      {sidecontentimages.map(image => (
        <div key={image.id} className="image-container">
          <img src={image.url} alt={image.alt} />
        </div>
      ))}
    </div>
  );
}

export default SideContent;
