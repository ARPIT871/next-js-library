import  React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
import { Container } from '@mui/material';
import SideContent from "../../common/sidecontent";
import { healthblog } from '../../common/data/data';
import { Link } from 'react-router-dom';
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

const Health = () => {
    const [visibleCount, setVisibleCount] = useState(6);
  
    const handleLoadMore = () => {
      setVisibleCount(prevCount => prevCount + 6);
    };
  

  const stripHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  return (
    <Box>
      <Container maxWidth="lg"sx={{marginTop:'40px'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <div>
              <h2>Health Blog</h2>
              <p>This is the main content of your health blog.</p>
            </div>
            <Box sx={{ flexGrow: 1, overflow: 'hidden', bgcolor: 'background.paper' }}>
              <Grid container spacing={4}>
                {healthblog.slice(0, visibleCount).map((image, index) => (
                  <Grid item key={index} xs={12} sm={6} md={6} lg={6}>
                    <Item>
                    <div style={{ position: 'relative' }}>
                    <RouterLink to={`/details/healthblog/${index}`} style={{ textDecoration: 'none' }}>
                            <img src={image.img} alt="product" style={{ width: '100%', height: 'auto' }} />
                            </RouterLink>
                            <Link to={image.link}>
                            <Button variant="contained" sx={{ position: 'absolute', bottom: 5, left: 0, padding: '0px 8px', fontSize: '11px', textTransform: 'none', borderRadius: '0px', margin: '0px', bgcolor: '#D4000E','&:hover': { bgcolor: '#A3000A'} }}>
                             Health
                            </Button>
                            </Link>
                          </div>
                      <ContentContainer sx={{ textAlign: 'left' }}>
                      <RouterLink to={`/details/healthblog/${index}`} style={{ textDecoration: 'none' }}>
                        <Typography variant="h6" component="div" sx={{color:'#161616',fontWeight:'bold'}}>{image.title}</Typography>
                        </RouterLink>
                        <Typography variant="body2" color="text.secondary" component="div" sx={{color:'#505050'}}>
                        {image.description ? `${stripHtmlTags(image.description).substring(0, 100)}...` : ''}
                        </Typography>
                        <RouterLink to={`/details/healthblog/${index}`} style={{ textDecoration: 'none' }}>
                        <Button variant="text"  sx={{textTransform:'none', color:'#D4000E'}}>
                          Read More
                        </Button>
                        </RouterLink>
                      </ContentContainer>
                    </Item>
                   
                  </Grid>
                  
                  
                ))}
              </Grid>
              {visibleCount < healthblog.length && (
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
          
          <Grid item xs={12} md={4} lg={4} sm={12} className="side-content-container" >
          <Box style={{ height: '100%', overflowY: 'auto', marginBottom: '50px' }}>
            <SideContent />
          </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Health;
