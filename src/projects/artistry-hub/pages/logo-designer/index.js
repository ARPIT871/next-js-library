import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import LogoDesignerBlog from '../../sections/home-section/logodesigner-s';



const LogoDesigner = () => {
 
  return (
    <>
    <Box>
      <Container maxWidth="lg"sx={{marginTop:'40px'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <LogoDesignerBlog/>
             </Grid>
        
        </Grid>
      </Container>
    </Box>
    </>
  );
};

export default LogoDesigner
