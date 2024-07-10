import React from 'react';
import { Box, Typography, Link, IconButton, Grid, Container } from '@mui/material';
import { Facebook, Instagram, Pinterest, Twitter } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#1c1c1c', color: 'white', padding: '20px 0',marginTop:'40px' }}>
      <Container>
      <Grid container spacing={2} justifyContent="center" sx={{ padding: '0 20px' }}>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ marginBottom: '20px' }}>
            <Typography variant="h6">Contact</Typography>
            <Typography>United Kingdom</Typography>
            <Typography>
              Mail Us: <Link href="mailto:hello@feedhour.com" color="inherit">hello@feedhour.com</Link>
            </Typography>
            <Typography>Follow us</Typography>
            <Box sx={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              <IconButton href="#" color="inherit">
                <Facebook />
              </IconButton>
              <IconButton href="#" color="inherit">
                <Instagram />
              </IconButton>
              <IconButton href="#" color="inherit">
                <Pinterest />
              </IconButton>
              <IconButton href="#" color="inherit">
                <Twitter />
              </IconButton>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ marginBottom: '20px' }}>
            <Typography variant="h6">Trending Topics</Typography>
            <Link href="/lifestyle" sx={{textDecoration:'none',color:'#fff'}}><Typography>Lifestyle</Typography></Link>
            <Link href="/fashion" sx={{textDecoration:'none',color:'#fff'}}><Typography>Fashion</Typography></Link>
            <Link href="/beauty" sx={{textDecoration:'none',color:'#fff'}}><Typography>Beauty</Typography></Link>
            <Link href="/health" sx={{textDecoration:'none',color:'#fff'}}><Typography>Health</Typography></Link>
            <Link href="/sports" sx={{textDecoration:'none',color:'#fff'}}><Typography>Sports</Typography></Link>
            <Link href="/travel" sx={{textDecoration:'none',color:'#fff'}}><Typography>Travel</Typography></Link>
            <Link href="/technology" sx={{textDecoration:'none',color:'#fff'}}><Typography>Technology</Typography></Link>
            <Link href="/food" sx={{textDecoration:'none',color:'#fff'}}><Typography>Food</Typography></Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ marginBottom: '20px' }}>
            <Typography variant="h6">Our Policy</Typography>
            <Typography>
              <Link href="/privacypolicy" color="inherit"  sx={{textDecoration:'none',color:'#fff'}}>Privacy Policy</Link>
            </Typography>
            <Typography>
              <Link href="/affiliatepolicy" color="inherit"  sx={{textDecoration:'none',color:'#fff'}}>Affiliate Policy</Link>
            </Typography>
            <Typography>
              <Link href="/cookiepolicy" color="inherit"  sx={{textDecoration:'none',color:'#fff'}}>Cookie Policy</Link>
            </Typography>
           
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ marginBottom: '20px' }}>
            <Typography variant="h6">Quick Links</Typography>
            <Typography>
              <Link href="/aboutus" color="inherit"  sx={{textDecoration:'none',color:'#fff'}}>About Us</Link>
            </Typography>
            <Typography>
              <Link href="/contactus" color="inherit"  sx={{textDecoration:'none',color:'#fff'}}>Contact Us</Link>
            </Typography>
            <Typography>
              <Link href="/disclaimer" color="inherit"  sx={{textDecoration:'none',color:'#fff'}}>Disclaimer</Link>
            </Typography>
            <Typography>
              <Link href="/terms&conditions" color="inherit"  sx={{textDecoration:'none',color:'#fff'}}>Terms and Conditions</Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: 'center', borderTop: '1px solid #333', padding: '10px 0' }}>
        <Typography>&copy; 2024 Feedhour. All Rights Reserved.</Typography>
      </Box>
      </Container>
    </Box>
  );
}

export default Footer;
