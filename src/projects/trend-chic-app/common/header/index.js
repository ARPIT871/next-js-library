"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Grid from "@mui/material/Grid";
import { styled, alpha } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Container } from "@mui/material";
import { usePathname } from "next/navigation";
import CustomLink from "@/utils/customLink";
import useCustomPathname from "@/utils/customPathname";

const pages = [
  { name: "Home", to: "/" },
  { name: "Lifestyle", to: "/lifestyle" },
  { name: "Fashion", to: "/fashion" },
  { name: "Beauty", to: "/beauty" },
  { name: "Health", to: "/health" },
  { name: "Sports", to: "/sports" },
  { name: "Travel", to: "/travel" },
  { name: "Finance", to: "/finance" },
  { name: "Technology", to: "/technology" },
  { name: "Food", to: "/food" },
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

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
    <Container>
      <AppBar
        position="static"
        sx={{ bgcolor: "#FFFFFF", color: "#000000", boxShadow: "none" }}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={2}>
            {/* Logo Section */}
            <Grid item xs={4} sm={2}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <CustomLink href={pages[0].to}>
                  <Typography>
                    <img
                      src="/trend-chic-logo.png"
                      alt="logo"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Typography>
                </CustomLink>
              </Box>
            </Grid>

            {/* Menu Section */}
            <Grid item xs={8} sm={8} md={10}>
              <Box
                sx={{
                  display: { xs: "none", sm: "flex" },
                  justifyContent: "left",
                }}
              >
                <Box
                  sx={{
                    display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
                    gap: 3,
                  }}
                >
                  {pages.map((page) => (
                    <CustomLink href={page.to} key={page.name}>
                    <Typography
                      key={page.name}
                      sx={{
                        textDecoration: "none",
                        color: pathname === page.to ? "red" : "#000000",
                        fontWeight: pathname === page.to ? "bold" : "normal",
                        "&:hover": {
                          color: "red",
                          fontWeight: "bold",
                        },
                      }}
                    >
                      {page.name}
                    </Typography>
                    </CustomLink>
                  ))}
                </Box>

                {/* Search icon */}
                <Search
                  sx={{
                    display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
                    justifyContent: "flex-end",
                  }}
                >
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                  <SearchIconWrapper>
                    <i className="fas fa-search" aria-hidden="true"></i>
                  </SearchIconWrapper>
                </Search>
              </Box>

              {/* Mobile Menu Icon */}
              <Box
                sx={{
                  display: { xs: "flex", sm: "flex", md: "none", lg: "none" },
                  flexGrow: 1,
                  justifyContent: "flex-end",
                }}
              >
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
                      <CustomLink href={page.to}>
                        <Typography
                          sx={{
                            textDecoration: "none",
                            color: pathname === page.to ? "red" : "#000000",
                            fontWeight:
                              pathname === page.to ? "bold" : "normal",
                            "&:hover": {
                              color: "red",
                              fontWeight: "bold",
                            },
                          }}
                        >
                          {page.name}
                        </Typography>
                      </CustomLink>
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
