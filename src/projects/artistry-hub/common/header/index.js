import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Toolbar } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link, useLocation } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Menu } from '@mui/material';
import {MenuItem} from '@mui/material';
import { Container } from '@mui/material';
const pages = [
  { name: 'Creative Directors', to: '/creativedirector' },
  { name: 'Digital Designers', to: '/digitaldesigner' },
  { name: 'Digital Artists', to: '/digitalartist' },
  { name: 'UI Designers', to: '/uidesigner' },
  { name: 'Web Designers', to: '/webdesigner' },
  { name: 'Logo Designers', to: '/logodesigner' },
  { name: 'Brand Designers', to: '/branddesigner' },
  { name: 'UX Designers', to: '/uxdesigner' },

]




function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const location = useLocation();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleMenuClose = () => {
    setAnchorEl(null);
  };

 
  return (
    <Container>
    <AppBar position="static" sx={{ bgcolor: '#FFFFFF', color: '#000000', boxShadow: 'none' }}>
      <Toolbar>
        <Grid container alignItems="center" spacing={2}>
          <Grid direction="column">
          {/* Logo Section */}
          <Grid item xs={4} sm={2}>
            <Box sx={{ display: 'flex', alignItems: 'center',marginTop:'20px' }}>
            <Typography
                  component={Link}
                  to="/"
                >
                  <img src="/assets/logo.png" alt="logo" style={{ width: '100%', height: 'auto',maxWidth:'250px' }} />
                </Typography>           
                 </Box>
          </Grid>

          {/* Menu Section */}
          <Grid item xs={8} sm={8} md={10} >
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'left',marginTop:'20px' }}>
              <Box sx={{ display: { xs: 'none', sm: 'none',md:'flex',lg:'flex' }, gap: 2,marginBottom:'20px' }}>
                {pages.map((page) => (
                  <Typography
                    key={page.name}
                    component={Link}
                    to={page.to}
                    sx={{
                      textDecoration: 'none',
                      fontSize:'16px',
                      color: location.pathname === page.to ? 'red' : '#000000',
                      fontWeight: location.pathname === page.to ? 'bold' : 'normal',
                  
                    }}
                  >
                    {page.name}
                  </Typography>
                ))}
              </Box>
           
            </Box>
            </Grid>
            {/* Mobile Menu Icon */}
            <Box sx={{ display: { xs: 'flex', sm: 'flex',md:'none',lg:'none' }, flexGrow: 1, justifyContent: 'flex-end' }}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={handleMenuClose}>
                    <Typography
                      component={Link}
                      to={page.to}
                      sx={{
                        textDecoration: 'none',
                        color: location.pathname === page.to ? 'red' : '#000000',
                      fontWeight: location.pathname === page.to ? 'bold' : 'normal',
                   '&:hover': {
                    color: 'red',
                 fontWeight: 'bold',
                  },
                    }}
                  >
                    
                      {page.name}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
    </Container>
  );
}

export default Header;
