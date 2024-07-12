import * as React from 'react';
import { Typography, Container } from '@mui/material';
import { affiliatePolicyData } from '../../data/data';
import CustomLink from '@/utils/customLink';


export default function AffiliatePolicy() {
  return (
    <Container sx={{marginTop:'40px'}}>
      <Typography variant="h5" gutterBottom>
        {affiliatePolicyData.title}
      </Typography>
      {affiliatePolicyData.content.map((item, index) => (
        <Typography variant="body1" key={index}>
          {item.text}
          {item.link && (
            <CustomLink href={item.link.href} underline={item.link.underline}>
              {item.link.text}
            </CustomLink>
          )}
          {item.extraText}
          {item.links && item.links.map((linkItem, linkIndex) => (
            linkItem.href ? (
              <CustomLink href={linkItem.href} underline={linkItem.underline} key={linkIndex}>
                {linkItem.text}
              </CustomLink>
            ) : (
              linkItem.text
            )
          ))}
        </Typography>
      ))}
    </Container>
  );
}
