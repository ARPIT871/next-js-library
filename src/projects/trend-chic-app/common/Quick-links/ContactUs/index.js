import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { contactUsData } from '../../data/data';


const ContactUs = () => {
  const { title, description, contactInformationTitle, address, email, map } = contactUsData;

  return (
    <Container maxWidth="lg" sx={{ marginTop: '40px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <Box sx={{ textAlign: 'left' }}>
            <Typography variant="h4" gutterBottom>
              {title}
            </Typography>
            {description.map((paragraph, index) => (
              <Typography variant="body1" paragraph key={index}>
                {paragraph}
              </Typography>
            ))}
            <Typography variant="h6" gutterBottom>
              {contactInformationTitle}
            </Typography>
            <Typography variant="body1">
              <LocationOnIcon /> {address.text}
            </Typography>
            <Typography variant="body1">
              <EmailIcon /> {email.text}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* Embedded Google Map iframe */}
            <iframe
              title={map.title}
              src={map.src}
              width={map.width}
              height={map.height}
              style={map.style}
              allowFullScreen={map.allowFullScreen}
              loading={map.loading}
            ></iframe>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ContactUs;
