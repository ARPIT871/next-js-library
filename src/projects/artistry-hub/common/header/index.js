'use client'
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import useCustomPathname from "@/utils/customPathname";

const pages = [
  { name: 'Creative Directors', to: '/creativedirector' },
  { name: 'Digital Designers', to: '/digitaldesigner' },
  { name: 'Digital Artists', to: '/digitalartist' },
  { name: 'UI Designers', to: '/uidesigner' },
  { name: 'Web Designers', to: '/webdesigner' },
  { name: 'Logo Designers', to: '/logodesigner' },
  { name: 'Brand Designers', to: '/branddesigner' },
  { name: 'UX Designers', to: '/uxdesigner' },
];

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const pathname = useCustomPathname();
  console.log(pathname, "sasd");

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: '#FFFFFF', color: '#000000', boxShadow: 'none' }}>
      <Container>
        <Toolbar disableGutters>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={8} sm={6} md={4}>
              {/* Logo Section */}
              <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                <Typography component={Link} href="/">
                  <img src="/artistry-hub-logo.png" alt="logo" style={{ width: '100%', height: 'auto', maxWidth: '250px' }} />
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={2} sm={4} md={8} display={{ xs: 'flex', sm: 'flex', md: 'none' }} justifyContent="flex-end">
              {/* Mobile Menu Icon */}
              <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleMenuClick}>
                <MenuIcon />
              </IconButton>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={handleMenuClose}>
                    <Typography
                      component={Link}
                      href={page.to}
                      sx={{
                        textDecoration: 'none',
                        color: pathname === page.to ? 'red' : '#000000',
                        fontWeight: pathname === page.to ? 'bold' : 'normal',
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
            </Grid>
            <Grid item xs={12} display={{ xs: 'none', md: 'flex' }} justifyContent="flex-end">
              {/* Desktop Menu */}
              <Box sx={{ display: 'flex', gap: 2, marginTop: '20px', marginBottom: '20px' }}>
                {pages.map((page) => (
                  <Typography
                    key={page.name}
                    component={Link}
                    href={page.to}
                    sx={{
                      textDecoration: 'none',
                      fontSize: '16px',
                      color: pathname === page.to ? 'red' : '#000000',
                      fontWeight: pathname === page.to ? 'bold' : 'normal',
                    }}
                  >
                    {page.name}
                  </Typography>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
