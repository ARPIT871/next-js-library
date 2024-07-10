import React from 'react';
import { Container, Grid, Card, Typography, CardMedia, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { articles } from '../../../common/data/data';

const Intro = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={6}>
          <Card sx={{ position: 'relative', height: '618px', width: '100%', overflow: 'hidden' }}>
          <Link to={`/details/articles/0`} style={{ textDecoration: 'none',color:'#fff' }}>
            <CardMedia
              component="img"
              sx={{
                height: '100%',
                width: '100%',
                objectFit: 'cover',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
              image={articles[0].image}
              alt={articles[0].title}
            />
            </Link>
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                color: 'white',
                background: 'transparent',
                padding: '20px',
              }}
            >
              <Button variant="contained" display="block" gutterBottom sx={{ bgcolor: '#D4000E', margin: '0px 0px 6px', padding: '0px 8px', fontSize: '11px', textTransform: 'none', '&:hover': { bgcolor: '#A3000A' } }}
                component={Link}
                to={articles[0].link}>
                {articles[0].category}
              </Button>
              <Link to={`/details/articles/0`} style={{ textDecoration: 'none',color:'#fff' }}>
                <Typography variant="h5" sx={{fontWeight: 'bold'}}>{articles[0].title}</Typography>
              </Link>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}> {articles.description ? `${articles[0].description.substring(0,0)}...` : ''}</Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Grid container spacing={2}>
            {articles.slice(1).map((article, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card sx={{ position: 'relative', height: { xs: 'auto', sm: '300px' }, overflow: 'hidden' }}>
                <Link to={`/details/articles/${index + 1}`} style={{ textDecoration: 'none',color:'#fff' }}>
                  <CardMedia
                    component="img"
                    sx={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.1)',
                      },
                    }}
                    image={article.image}
                    alt={article.title}
                  />
                  </Link>
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      color: 'white',
                      background: 'transparent',
                      padding: '10px',
                    }}
                  >
                    <Button variant="contained" display="block" gutterBottom sx={{ bgcolor: '#D4000E', margin: '0px 0px 6px', padding: '0px 8px', fontSize: '11px', textTransform: 'none', '&:hover': { bgcolor: '#A3000A' } }}
                      component={Link}
                      to={article.link}>
                      {article.category}
                    </Button>
                    <Link to={`/details/articles/${index + 1}`} style={{ textDecoration: 'none',color:'#fff' }}>
                      <Typography variant="h6" sx={{fontWeight:'bold'}}>{article.title}</Typography>
                    </Link>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}> {article.description ? `${article.description.substring(0,0)}...` : ''}</Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Intro;
