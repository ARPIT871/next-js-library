'use client'
import React from 'react';
import { Box, Typography, Grid, Container,Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { advertisements2 } from '../../../common/data/data';
import { categories } from '../../../common/data/data';
import { advertisements } from '../../../common/data/data';
import Link from 'next/link';
import CustomLink from '@/utils/customLink';





  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark'? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const Advertisement = () => {
  // Function to chunk advertisements into 2x2 grid
  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
      arr.slice(index * size, index * size + size)
    );
  };

  const chunkedAdvertisements = chunkArray(advertisements, 2);

  return (
    <Container sx={{marginTop:'40px'}}>
      <Box sx={{ padding: '20px', backgroundColor: '#f8f8f8' }}>
        {chunkedAdvertisements.map((row, rowIndex) => (
          <Grid container spacing={2} key={rowIndex} justifyContent="center">
            {row.map((ad, columnIndex) => (
              <Grid item xs={12} sm={6} key={rowIndex * 2 + columnIndex} sx={{ textAlign: 'center', marginBottom: '16px' }}>
                <Box>
                <CustomLink  href={advertisements.link || '#'} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                  <img src={ad.image} alt={`Advertisement ${rowIndex * 2 + columnIndex + 1}`} style={{ maxWidth: '100%' }} /></CustomLink>
                  <Typography variant="body2" color="textSecondary">Advertisement </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        ))}
        <Grid container spacing={2} justifyContent="center" marginTop={4}>
          {categories.map((category, index) => (
            <CustomLink href={categories[0].link}>
             <Grid item xs={6} sm={4} md={2} key={category.name} sx={{ textAlign: 'center', marginBottom: '16px' }}>
              <Box >
               
              <CustomLink  href={category.link || '#'} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                  <img src={category.image} alt={category.name} style={{ width: '100%', borderRadius: '8px' }} />
                  <Typography variant="h6" sx={{ marginTop: '10px', color: '#000' }}>{category.name}</Typography>
                </CustomLink>
              </Box>
            </Grid>
            </CustomLink>
           
          ))} 
        </Grid>
      </Box>
      {/* ---------------------- */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item sx={{ backgroundColor: '#353535', color: '#fff', padding: '20px', textAlign: 'center' }}>
              <Container>
                <Typography variant="h4" gutterBottom>
                  Latest Worldwide Updates and Insights
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Stay updated with the latest updates and happenings around the world across multiple niches including Insights, food, travel, sports, fashion, beauty and much more. Get details every hour, every minute and every second.
                </Typography>
              </Container>
            </Item>
          </Grid>
          <Container sx={{ padding: '20px', backgroundColor: '#f8f8f8' }}>
            <Typography sx={{ textAlign: 'center', color: '#353535', marginTop: '20px', marginBottom: '30px' }}>Advertisement</Typography>
            <Grid container spacing={2} justifyContent="center">
              {advertisements2.map((advertisement2, index) => (
                <Grid item key={advertisement2.image} xs={12} sm={6} md={4} lg={3}>
                  <Box sx={{ mb: 2 }}>
                  <CustomLink  href={advertisements2.link || '#'} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>

                    <img src={advertisement2.image} alt="" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                    </CustomLink>
                  </Box>
                </Grid>
              ))}
            </Grid>
            
          </Container>
        </Grid>
      </Box>
    </Container>
  );
};

export default Advertisement;
