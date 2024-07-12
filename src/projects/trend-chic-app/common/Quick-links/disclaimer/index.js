'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { disclaimerData } from '../../data/data';
import CustomLink from '@/utils/customLink';
const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Disclaimer() {
  const renderContent = (content) => {
    return content.map((item, index) => {
      if (item.type === 'paragraph') {
        return (
          <Typography variant="body1" gutterBottom key={index} sx={{ textAlign: 'left' }}>
            {item.text}
            {item.link && (
              <CustomLink href={item.link.href} underline="hover" target={item.link.target}>
                {item.link.text}
              </CustomLink>
            )}
            {item.extraText}
          </Typography>
        );
      } else if (item.type === 'subsection') {
        return (
          <Item key={index}>
            <Typography variant="h6" gutterBottom sx={{color:'#000',fontWeight:'bold',textAlign:'left'}}>
              {item.title}
            </Typography>
            {renderContent(item.content)}
          </Item>
        );
      } else if (item.type === 'section') {
        return (
          <Grid item xs={12} md={8} key={index} >
            {renderContent(item.content)}
          </Grid>
        );
      }
      return null;
    });
  };

  return (

    <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', mt: 2 }}>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom sx={{ textAlign: 'left' }}>
            {disclaimerData.title}
          </Typography>
        </Grid>
        {renderContent(disclaimerData.content)}
      </Grid>
    </Box>
  );
}
