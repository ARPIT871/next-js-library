'use client';
import React from 'react';
import { Box, Typography, IconButton, Grid, Container } from '@mui/material';
import { Facebook, Instagram, Pinterest, Twitter } from '@mui/icons-material';
import CustomLink from '@/utils/customLink';

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
              Mail Us: <CustomLink href="mailto:hello@feedhour.com" color="inherit">hello@feedhour.com</CustomLink>
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
            <CustomLink href="/lifestyle" sx={{textDecoration:'none',color:'#fff'}}><Typography>Lifestyle</Typography></CustomLink>
            <CustomLink href="/fashion" sx={{textDecoration:'none',color:'#fff'}}><Typography>Fashion</Typography></CustomLink>
            <CustomLink href="/beauty" sx={{textDecoration:'none',color:'#fff'}}><Typography>Beauty</Typography></CustomLink>
            <CustomLink href="/health" sx={{textDecoration:'none',color:'#fff'}}><Typography>Health</Typography></CustomLink>
            <CustomLink href="/sports" sx={{textDecoration:'none',color:'#fff'}}><Typography>Sports</Typography></CustomLink>
            <CustomLink href="/travel" sx={{textDecoration:'none',color:'#fff'}}><Typography>Travel</Typography></CustomLink>
            <CustomLink href="/technology" sx={{textDecoration:'none',color:'#fff'}}><Typography>Technology</Typography></CustomLink>
            <CustomLink href="/food" sx={{textDecoration:'none',color:'#fff'}}><Typography>Food</Typography></CustomLink>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ marginBottom: '20px' }}>
            <Typography variant="h6">Our Policy</Typography>
            <Typography>
              <CustomLink href="/privacypolicy" color="inherit"  sx={{textDecoration:'none',color:'#fff'}}>Privacy Policy</CustomLink>
            </Typography>
            <Typography>
              <CustomLink href="/affiliatepolicy" color="inherit"  sx={{textDecoration:'none',color:'#fff'}}>Affiliate Policy</CustomLink>
            </Typography>
            <Typography>
              <CustomLink href="/cookiepolicy" color="inherit"  sx={{textDecoration:'none',color:'#fff'}}>Cookie Policy</CustomLink>
            </Typography>
           
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ marginBottom: '20px' }}>
            <Typography variant="h6">Quick Links</Typography>
            <Typography>
              <CustomLink href="/aboutus" color="inherit"  sx={{textDecoration:'none',color:'#fff'}}>About Us</CustomLink>
            </Typography>
            <Typography>
              <CustomLink href="/contactus" color="inherit"  sx={{textDecoration:'none',color:'#fff'}}>Contact Us</CustomLink>
            </Typography>
            <Typography>
              <CustomLink href="/disclaimer" color="inherit"  sx={{textDecoration:'none',color:'#fff'}}>Disclaimer</CustomLink>
            </Typography>
            <Typography>
              <CustomLink href="/terms&conditions" color="inherit"  sx={{textDecoration:'none',color:'#fff'}}>Terms and Conditions</CustomLink>
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
