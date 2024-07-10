import React from 'react';
import FinanceBlog from '../../sections/home-section/finance-blog';
import SideContent from '../../common/sidecontent';
import { Container, Grid, Box } from '@mui/material';
import './index.css';

const Finance = () => {
  return (
    <Container style={{ overflowY: 'auto' }}>
      <Grid container spacing={2}>
        <Grid 
          item 
          xs={12} 
          md={8} 
          className="lifestyle-blog-container" 
          style={{ overflowY: 'auto' }}
        >
          <Box style={{ height: '100%', overflowY: 'auto', marginBottom: '50px' }}>
            <FinanceBlog />
          </Box>
        </Grid>
        <Grid 
          item 
          xs={12} 
          md={4} 
          lg={4} 
          sm={12} 
          className="side-content-container" 
        >
          <Box style={{ height: '100%', overflowY: 'auto', marginBottom: '50px' }}>
            <SideContent />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Finance;
