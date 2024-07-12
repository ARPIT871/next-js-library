'use client';
import React from 'react';
import { sidecontentimages } from '../data/data';
import './index.css'; 
import CustomLink from '@/utils/customLink';


const SideContent = () => {
  return (
    <div className="side-content" style={{marginTop:'60px'}}>
      {sidecontentimages.map(image => (
        <div key={image.id} className="image-container">
          <CustomLink href={image.CustomLink}>
          <img src={image.url} alt={image.alt} />
          </CustomLink>
        </div>
      ))}
    </div>
  );
}

export default SideContent;
