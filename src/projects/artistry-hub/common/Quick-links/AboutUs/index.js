import React from 'react';
import {styled} from '@mui/material'
import { Grid, Box, Typography, Container} from '@mui/material';
import { aboutus } from '../../data/data';

const ColorTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.getContrastText(theme.palette.error.main),
    backgroundColor: theme.palette.error.main,
    padding: '5px 10px',
    borderRadius: '4px',
    display: 'inline-block',
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
    },
  }));
const ArticleCard = () => {
  return (
    <Container>
      <Grid container justifyContent="center">
        <Grid item sx={12}>
          <Box
            sx={{
              position: 'relative',
              height: '100%',
              width: '100%',
              overflow: 'hidden',
              backgroundImage: `url(${aboutus[0].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '0px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              color: 'white',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px',padding:'50px 50px 10px 80px' }}>
              {aboutus[0].title}
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold',padding:'10px 50px 50px 80px' }}>
              {aboutus[0].description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ marginTop: '20px', textAlign: 'left' }}>
        <ColorTypography variant="body1">
          ABOUT US | WHO WE ARE | HOW WE WORK | WHAT WE DO
        </ColorTypography>
      </Box>
    </Container>
  );
};

export default ArticleCard;
