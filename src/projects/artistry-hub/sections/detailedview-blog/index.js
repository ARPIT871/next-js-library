import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Button, Box, Grid,IconButton } from '@mui/material';
import { articles, 
  branddesignerblog,
  creativedirectorblog,  
  digitalartistblog, 
  digitaldesignerblog, 
  logodesignerblog , 
  uidesignerblog ,
  uxdesignerblog,
  relatedblog,
  webdesignerblog
} from '../../common/data/data';
import {  ArrowBack,Facebook, Twitter, Pinterest, LinkedIn, WhatsApp, Email} from '@mui/icons-material';
import SideContent from '../../common/sidecontent';
import RelatedBlog from '../../common/relatedblog';

const handleShare = (platform) => {
  // Define your share logic here
  console.log(`Share to ${platform}`);
};
const DetailedView = () => {
  const { type, id } = useParams();

  // Determine the correct item based on type
  let item = null;
  if (type === 'articles') {
    item = articles[parseInt(id, 10)];
  } else if (type === 'branddesignerblog') {
    item = branddesignerblog[parseInt(id, 10)];
  } else if (type === 'digitaldesignerblog') {
    item = digitaldesignerblog[parseInt(id, 10)];
  } else if (type === 'digitalartistblog') {
    item = digitalartistblog[parseInt(id, 10)];
  } else if (type === 'creativedirectorblog') {
    item = creativedirectorblog[parseInt(id, 10)];
  } else if (type === 'logodesignerblog') {
    item = logodesignerblog[parseInt(id, 10)];
  } else if (type === 'uidesignerblog') {
    item = uidesignerblog[parseInt(id, 10)];
  } else if (type === 'uxdesignerblog') {
    item = uxdesignerblog[parseInt(id, 10)];
  } else if (type === 'webdesignerblog') {
    item = webdesignerblog[parseInt(id, 10)];
  } else if (type === 'relatedblog') {
    item = relatedblog[parseInt(id, 10)];
  
  } else {
    item = articles[parseInt(id, 10)];
  }

  if (!item) {
    return <Typography>Item not found</Typography>;
  }

  return (
    <Container sx={{ marginTop: '40px' }}>
      <Button onClick={() => window.history.back()} variant="text" sx={{ marginBottom: '20px', color:'#000'}}>
      <ArrowBack />
      </Button>
      <Grid container spacing={2} sx={{ textAlign: 'center' }}>
        <Grid item xs={12}>
          <Box
            component="img"
            src={item.img || item.image } // Use item.img if available, otherwise fall back to item.image
            alt={item.title}
            sx={{ width: '100%', height: 'auto', maxWidth: '600px' }}
          />
        </Grid>
        <Grid container spacing={4} sx={{ textAlign: 'center' }} marginTop={4}>
       
        
        <Grid item lg={8} md={8} sm={12} xs={12}>
          <Typography variant="h4" sx={{ marginTop: { xs: '20px', md: 0 }, color: '#161616', fontWeight: 'bold' }}>
            {item.title}
          </Typography>
           {/* Render description with paragraphs */}
           <Box sx={{ marginTop: '20px', textAlign: 'left' }}>
            {item.description.split('\n').map((paragraph, index) => (
              <Typography key={index} variant="body1" sx={{ marginBottom: '10px', color: '#505050' }} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={4} lg={4} sm={12} className="side-content-container" >
          <Box style={{ height: '100%', overflowY: 'auto', marginBottom: '50px' }}>
            <SideContent />
          </Box>
          </Grid>
        </Grid>
      </Grid>
      <Typography>Share</Typography>
      <Box display="flex" alignItems="left">
      
      <IconButton onClick={() => handleShare('Facebook')} color="primary" sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}>
          <Facebook />
        </IconButton>
        <IconButton onClick={() => handleShare('Twitter')} color="primary" sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}>
          <Twitter />
        </IconButton>
        <IconButton onClick={() => handleShare('Pinterest')} sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, color: '#E60023' }}>
          <Pinterest />
        </IconButton>
        <IconButton onClick={() => handleShare('LinkedIn')} color="primary" sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}>
          <LinkedIn />
        </IconButton>
        <IconButton onClick={() => handleShare('WhatsApp')} sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, color: '#25D366' }}>
          <WhatsApp />
        </IconButton>
        <IconButton onClick={() => handleShare('Email')} sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, color: 'black' }}>
          <Email />
        </IconButton>
    </Box>
    <RelatedBlog/>
    </Container>
    
  );
};

export default DetailedView;
