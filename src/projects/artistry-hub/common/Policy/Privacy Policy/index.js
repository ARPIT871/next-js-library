import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { privacyPolicy } from '../../data/data';


const PrivacyPolicy = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {Object.keys(privacyPolicy).map((sectionKey, index) => (
          <Grid item xs={12} key={index}>
            <Typography variant="h5" gutterBottom>
              {privacyPolicy[sectionKey].title}
            </Typography>
            {privacyPolicy[sectionKey].content.map((content, contentIndex) => (
              <Typography paragraph key={contentIndex}>
                {content.term && <strong>{content.term}: </strong>}
                {content.text && <>{content.text}<br /></>}
                {content.items && (
                  <ul>
                    {content.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                )}
                {content.purpose && (
                  <div>
                    <strong>Purpose: </strong>
                    {content.purpose}
                  </div>
                )}
                {content.cookieType && (
                  <div>
                    <strong>Cookie Type: </strong>
                    {content.cookieType}
                  </div>
                )}
                {content.administeredBy && (
                  <div>
                    <strong>Administered By: </strong>
                    {content.administeredBy}
                  </div>
                )}
              </Typography>
            ))}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PrivacyPolicy;
