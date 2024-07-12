'use client'
import  React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container, useMediaQuery, useTheme } from '@mui/material';
import { advertisements3 } from '../../../common/data/data';
import { data } from '../../../common/data/data';
import CustomLink from '@/utils/customLink';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  boxShadow: 'none',
}));

export default function Blog() {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 6);
  };


  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Container sx={{ marginTop: '40px' }}>
        <Typography sx={{ color: '#353535', marginTop: '40px', fontWeight: 'bold' }}>Fashion & Beauty</Typography>
        <Typography sx={{ color: '#353535', marginBottom: '40px' }}>
          Discover all the trending fashion and beauty updates to be the fashion frolics and beauty nazis of the world around you.
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {data.slice(0, visibleCount).map((item, index) => (
              <Grid item xs={12} sm={12} md={6} lg={6} key={index}>
                <Item>
                  <Grid container spacing={2}>
                    {isSmallScreen ? (
                      <>
                        <Grid item xs={12}>
                          <div style={{ position: 'relative' }}>
                          <CustomLink href={`/details/blog/${index}`} style={{ textDecoration: 'none' }}>
                            <img src={item.image} alt="product" style={{ width: '100%', height: 'auto' }} />
                          </CustomLink>
                          <CustomLink href={item.link}>
                            <Button variant="contained" sx={{ position: 'absolute', bottom: 5, left: 0, padding: '0px 8px', fontSize: '11px', textTransform: 'none', borderRadius: '0px', margin: '0px', bgcolor: '#D4000E', '&:hover': { bgcolor: '#A3000A' } }}>
                              {item.button}
                            </Button>
                            </CustomLink>
                          </div>
                        </Grid>
                        <Grid item xs={12}>
                           <CustomLink href={`/details/blog/${index}`} style={{ textDecoration: 'none' }}>
                          <Typography variant="subtitle1" gutterBottom sx={{ color: '#161616', fontWeight: 'bold' }}>
                            {item.title}
                          </Typography>
                          </CustomLink>
                          <Typography variant="body2" gutterBottom sx={{ color: '#505050' }}>
                          {item.description ? `${item.description.substring(0, 100)}...` : ''}
                          </Typography>
                        </Grid>
                      </>
                    ) : (
                      <>
                        <Grid item xs={4}>
                          <div style={{ position: 'relative' }}>
                          <CustomLink href={`/details/blog/${index}`} style={{ textDecoration: 'none' }}>
                            <img src={item.image} alt="product" style={{ width: '100%', height: 'auto' }} />
                            </CustomLink>
                            <CustomLink href={item.link}>
                            <Button  variant="contained" sx={{ position: 'absolute', bottom: 5, left: 0, padding: '0px 8px', fontSize: '11px', textTransform: 'none', borderRadius: '0px', margin: '0px', bgcolor: '#D4000E', '&:hover': { bgcolor: '#A3000A' } }}>
                              {item.button}
                            </Button>
                            </CustomLink>
                          </div>
                        </Grid>
                        <Grid item xs={8}>
                          <CustomLink href={`/details/blog/${index}`} style={{ textDecoration: 'none' }}>
                            <Typography variant="subtitle1" gutterBottom sx={{ color: '#161616', fontWeight: 'bold' }}>
                              {item.title}
                            </Typography>
                          </CustomLink>
                          <Typography variant="body2" gutterBottom sx={{ color: '#505050' }}>
                            {item.description ? `${item.description.substring(0, 100)}...` : ''}
                          </Typography>
                        </Grid>
                      </>
                    )}
                  </Grid>
                </Item>
              </Grid>
            ))}
          </Grid>
          {visibleCount < data.length && (
                <Box display="flex" justifyContent="center" mt={2}>
                  <Button
                    variant="contained"
                    sx={{ textTransform: 'none', bgcolor: '#D4000E', '&:hover': { bgcolor: '#A3000A' } }}
                    onClick={handleLoadMore}
                  >
                    View More
                  </Button>
                </Box>
              )}
        </Box>
      </Container>
      <Container sx={{ padding: '20px', backgroundColor: '#f8f8f8',marginTop:'40px' }}>
      <Typography sx={{ textAlign: 'center', color: '#353535', marginTop: '20px', marginBottom: '30px' }}>Advertisement</Typography>
      <Grid container spacing={2} justifyContent="center">
      {advertisements3.map((advertisement3, index) => (
      <Grid item key={advertisement3.image} xs={12} sm={6} md={4} lg={3}>
      <Box sx={{ mb: 2 }}>
      <CustomLink href={advertisements3.link || '#'} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>

      <img src={advertisement3.image} alt="" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} /></CustomLink>
      </Box>
      </Grid>
      ))}
      </Grid>
            </Container>
          </>
        );
      }
