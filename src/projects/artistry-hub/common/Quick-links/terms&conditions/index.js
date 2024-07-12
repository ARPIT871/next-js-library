'use client'
import * as React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { termsData } from '../../data/data';
const TermsAndConditions = () => {
  return (
    <Container>
      <Box sx={{ p: 2, bgcolor: 'background.paper' }}>
        <Typography variant="h4" gutterBottom>
          {termsData.title}
        </Typography>
        {termsData.introduction.map((paragraph, index) => (
          <Typography variant="body1" gutterBottom key={index}>
            {paragraph}   
          </Typography>
        ))}
        {termsData.sections.map((section, index) => (
          <Box key={index} sx={{ mt: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              {section.title}
            </Typography>
            {section.content && (
              <Typography variant="body1" gutterBottom>
                {section.content}
              </Typography>
            )}
            {section.list && (
              <ul>
                {section.list.map((item, idx) => (
                  <li key={idx}>
                    <Typography variant="body1" gutterBottom>
                      {item}
                    </Typography>
                  </li>
                ))}
              </ul>
            )}
            {section.subpoints && (
              <ul>
                {section.subpoints.map((subpoint, idx) => (
                  <li key={idx}>
                    <Typography variant="body1" gutterBottom>
                      {subpoint}
                    </Typography>
                  </li>
                ))}
              </ul>
            )}
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default TermsAndConditions;
