'use  client'
import React from 'react';
import { Typography, Box,  List, ListItem, ListItemText, Container } from '@mui/material';
import { cookiePolicyData } from '../../data/data';


const CookiePolicy = () => {
  const { cookiePolicy } = cookiePolicyData;

  const renderContent = (content) => {
    return content.map((item, index) => {
      switch (item.type) {
        case 'paragraph':
          return (
            <Typography variant="body1" gutterBottom key={index}>
              {item.text}
            </Typography>
          );
        case 'section':
          return (
            <Box key={index}>
              <Typography variant="h5" gutterBottom>
                {item.title}
              </Typography>
              {renderContent(item.content)}
            </Box>
          );
        case 'list':
          return (
            <List key={index}>
              {item.items.map((listItem, listIndex) => (
                <ListItem key={listIndex}>
                  <ListItemText
                    primary={listItem.primary}
                    secondary={listItem.secondary}
                  />
                </ListItem>
              ))}
            </List>
          );
        default:
          return null;
      }
    });
  };

  return (
    <Container>
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" align="left" gutterBottom>
        {cookiePolicy.title}
      </Typography>
      {renderContent(cookiePolicy.content)}
    </Box>
    </Container>
  );
};

export default CookiePolicy;
