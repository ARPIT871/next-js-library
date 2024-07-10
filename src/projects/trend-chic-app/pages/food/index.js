import React from 'react';
import SideContent from '../../common/sidecontent';
import { Container, Grid, Box } from '@mui/material';
import './index.css';
import FoodBlog from '../../sections/home-section/food-blog';

const Food = () => {
  return (
    <Container style={{ overflowY: 'auto' }}>
      <Grid container spacing={2} >
        <Grid item xs={12} md={8}  style={{ overflowY: 'auto'}} className="lifestyle-blog-container">
           <Box style={{ height: '100%', overflowY: 'auto',marginBottom:'50px' }}>
          <FoodBlog/>
          </Box>
        </Grid>
        <Grid 
          item 
          xs={12} 
          md={4} 
          lg={4} 
          sm={12} 
          className="side-content-container" 
          style={{ 
            position: 'sticky', 
            top: 0, 
            height: '100vh' 
          }}
        >
          <Box style={{ height: '100%', overflowY: 'auto',marginBottom:'50px' }}>
            <SideContent />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Food;
