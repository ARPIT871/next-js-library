'use client'
import React from 'react';
import { Container, Grid, Card, CardMedia, Box, Button } from '@mui/material';
import Link from 'next/link';
import { articles } from '../../../common/data/data';

const Intro = () => {
  return (
    <Container sx={{ marginTop: '40px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
          <Grid container spacing={2}>
            {articles.slice(0).map((article, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card sx={{ position: 'relative', height: { xs: 'auto', sm: '300px' }, overflow: 'hidden' }}>
                  {article.link && (
                    <Link href={article.link} style={{ textDecoration: 'none', color: '#fff' }}>
                      <CardMedia
                        component="img"
                        sx={{
                          height: 'auto',
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
                  )}
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
                    {article.link && (
                      <Button
                        variant="contained"
                        display="block"
                        gutterBottom
                        sx={{
                          bgcolor: '#D4000E',
                          margin: '0px 0px 6px',
                          padding: '0px 8px',
                          fontSize: '11px',
                          textTransform: 'none',
                          '&:hover': { bgcolor: '#A3000A' },
                        }}
                        component={Link}
                        href={article.link}
                      >
                        {article.category}
                      </Button>
                    )}
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
