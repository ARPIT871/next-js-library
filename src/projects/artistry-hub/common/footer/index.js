import React from 'react';
import { Box, Typography, Link, IconButton, Grid, Container } from '@mui/material';
import { Facebook, Instagram, Pinterest, Twitter } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#0000000D', color: '#000000F2', padding: '20px 0',marginTop:'40px' }}>
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
            <Typography variant="h6">Trending Topics</Typography><br/>
            <Link href="/creativedirector" sx={{textDecoration:'none',color:'#000000F2'}}><Typography>Creative Directors</Typography></Link><br/>
            <Link href="/digitaldesigner" sx={{textDecoration:'none',color:'#000000F2'}}><Typography>Digital Designers</Typography></Link><br/>
            <Link href="/digitalartist" sx={{textDecoration:'none',color:'#000000F2'}}><Typography>Digital Artists</Typography></Link><br/>
            <Link href="/uidesigner" sx={{textDecoration:'none',color:'#000000F2'}}><Typography>UI Designers</Typography></Link><br/>
            <Link href="/webdesigner" sx={{textDecoration:'none',color:'#000000F2'}}><Typography>Web Designers</Typography></Link><br/>
            <Link href="/logodesigner" sx={{textDecoration:'none',color:'#000000F2'}}><Typography>Logo Designers</Typography></Link><br/>
            <Link href="/branddesigner" sx={{textDecoration:'none',color:'#000000F2'}}><Typography>Brand Designers</Typography></Link><br/>
            <Link href="/uxdesigner" sx={{textDecoration:'none',color:'#000000F2'}}><Typography>UX Designers</Typography></Link><br/>

          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ marginBottom: '20px' }}>
            <Typography variant="h6">Our Policy</Typography><br/>
            <Typography>
              <Link href="/privacypolicy" color="inherit"  sx={{textDecoration:'none',color:'#000000F2'}}>Privacy Policy</Link><br/><br/>
            </Typography>
            <Typography>
              <Link href="/affiliatepolicy" color="inherit"  sx={{textDecoration:'none',color:'#000000F2'}}>Affiliate Policy</Link><br/><br/>
            </Typography>
            <Typography>
              <Link href="/cookiepolicy" color="inherit"  sx={{textDecoration:'none',color:'#000000F2'}}>Cookie Policy</Link><br/><br/>
            </Typography>
           
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ marginBottom: '20px' }}>
            <Typography variant="h6">Quick Links</Typography><br/>
            <Typography>
              <Link href="/aboutus" color="inherit"  sx={{textDecoration:'none',color:'#000000F2'}}>About Us</Link><br/><br/>
            </Typography>
            <Typography>
              <Link href="/contactus" color="inherit"  sx={{textDecoration:'none',color:'#000000F2'}}>Contact Us</Link><br/><br/>
            </Typography>
            <Typography>
              <Link href="/disclaimer" color="inherit"  sx={{textDecoration:'none',color:'#000000F2'}}>Disclaimer</Link><br/><br/>
            </Typography>
            <Typography>
              <Link href="/terms&conditions" color="inherit"  sx={{textDecoration:'none',color:'#000000F2'}}>Terms and Conditions</Link><br/>
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
