'use client'
import React,{useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { lifestyleblog } from '../../../common/data/data';
import { Container } from '@mui/material';
import CustomLink from '@/utils/customLink';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100%',
  boxShadow: 'none', // Remove the shadow
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const LifestyleBlog = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 6);
  };


  const stripHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };
  return (
    <Container sx={{marginTop:'40px'}}>
    <Box sx={{ backgroundColor: '#353535', color: '#fff', padding: '20px', textAlign: 'center' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div>
              <h2>Lifestyle Blog</h2>
              <p>This is the main content of your Lifestyle blog.</p>
            </div>
            <Box sx={{ flexGrow: 1, overflow: 'hidden', bgcolor: 'background.paper' }}>
              <Grid container spacing={4}>
                {lifestyleblog.slice(0, visibleCount).map((image, index) => (
                  <Grid item key={index} xs={12} sm={6} md={6} lg={6}>
                    <Item>
                    <div style={{ position: 'relative' }}>
                           <CustomLink href={`/details/lifestyleblog/${index}`} style={{ textDecoration: 'none' }}>
                            <img src={image.img} alt="product" style={{ width: '100%', height: 'auto' }} />
                            </CustomLink>
                            <CustomLink href={image.link}>
                            <Button variant="contained" sx={{ position: 'absolute', bottom: 4, left: 0, padding: '0px 8px', fontSize: '11px', textTransform: 'none', borderRadius: '0px', margin: '0px', bgcolor: '#D4000E','&:hover': { bgcolor: '#A3000A'} }}>
                            Lifestyle
                            </Button>
                            </CustomLink>
                          </div>
                      <ContentContainer sx={{ textAlign: 'left' }}>
                      <CustomLink href={`/details/lifestyleblog/${index}`} style={{ textDecoration: 'none' }}>
                        <Typography variant="h6" component="div" sx={{color:'#161616',fontWeight:'bold'}}>{image.title}</Typography>
                        </CustomLink>
                        <Typography variant="body2" color="text.secondary" component="div" sx={{color:'#505050'}}>
                        {image.description ? `${stripHtmlTags(image.description).substring(0, 100)}...` : ''}
                        </Typography>
                        <CustomLink href={`/details/lifestyleblog/${index}`} style={{ textDecoration: 'none' }}>
                        <Button variant="text"   sx={{textTransform:'none', color:'#D4000E'}}>
                          Read More
                        </Button>
                        </CustomLink>
                      </ContentContainer>
                    </Item>
                  </Grid>
                ))}
              </Grid>
              {visibleCount < lifestyleblog.length && (
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
          </Grid>
        </Grid>
    </Box>
    </Container>
  );
};

export default LifestyleBlog;
