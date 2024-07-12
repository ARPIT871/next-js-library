'use client';
// components/CustomLink.js
import Link from 'next/link';
import { useSelector } from 'react-redux';

const linkStyle = {
  textDecoration: 'none',
  color: 'inherit',
};

const CustomLink = ({ href, style, ...props }) => {
  const pathName=sessionStorage.getItem("pathname").split("/")[1]
  let newHref = href;

  // const path=getPathName();
 

  if (typeof href === 'string') {
    if (href === '/') {
      newHref = `/${pathName}`;
    } else if (href.startsWith('/') && href !== `/${pathName}`) {
      newHref = `/${pathName}${href}`;
    }
  }
  
  return (
    <Link 
      href={newHref || '#'} 
      style={{
        ...linkStyle,
        ...style,
      }}
      {...props} 
    />
  );
};

export default CustomLink;