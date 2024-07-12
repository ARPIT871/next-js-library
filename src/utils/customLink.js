// components/CustomLink.js
import Link from 'next/link';

const linkStyle = {
  textDecoration: 'none',
  color: 'inherit',
};

const CustomLink = ({ href, style, ...props }) => {
  let newHref = href;

  if (typeof href === 'string') {
    if (href === '/') {
      newHref = '/v1';
    } else if (href.startsWith('/') && href !== '/v1') {
      newHref = `/v1${href}`;
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