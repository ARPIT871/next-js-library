import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Button, Box, Grid,IconButton } from '@mui/material';
import { data, images, articles,foodblog, lifestyleblog, sportsblog, financeblog, technologyblog, beautyblog, fashionblog, healthblog,categories} from '../../common/data/data';
import SideContent from '../../common/sidecontent';
import {  ArrowBack,Facebook, Twitter, Pinterest, LinkedIn, WhatsApp, Email} from '@mui/icons-material';


const handleShare = (platform) => {
  // Define your share logic here
  console.log(`Share to ${platform}`);
};
const DetailedView = () => {
  const { type, id } = useParams();

  // Determine the correct item based on type
  let item = null;
  if (type === 'travel' || type === 'intro') {
    item = images[parseInt(id, 10)];
  } else if (type === 'articles') {
    item = articles[parseInt(id, 10)];
  } else if (type === 'foodblog') {
    item = foodblog[parseInt(id, 10)];
  } else if (type === 'lifestyleblog') {
    item = lifestyleblog[parseInt(id, 10)];
  } else if (type === 'sportsblog') {
    item = sportsblog[parseInt(id, 10)];
  } else if (type === 'financeblog') {
    item = financeblog[parseInt(id, 10)];
  } else if (type === 'technologyblog') {
    item = technologyblog[parseInt(id, 10)];
  } else if (type === 'beautyblog') {
    item = beautyblog[parseInt(id, 10)];
  } else if (type === 'fashionblog') {
    item = fashionblog[parseInt(id, 10)];
  } else if (type === 'healthblog') {
    item = healthblog[parseInt(id, 10)];
  } else if (type === 'categories') {
    item = categories[parseInt(id, 10)];
  } else {
    item = data[parseInt(id, 10)];
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
       
        <Grid item lg={2} md={2} sm={12} xs={12} sx={{display:{sm:'none',xs:'none',lg:'block', md:'block'}}}>
        <Box display="flex" flexDirection="column" alignItems="center" gap={0}>
        <Typography>Share</Typography>
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
    </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
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
    </Container>
  );
};

export default DetailedView;
