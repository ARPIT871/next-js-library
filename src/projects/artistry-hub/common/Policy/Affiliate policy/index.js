'use client'
import * as React from 'react';
import { Typography, Link, Container } from '@mui/material';
import { affiliatePolicyData } from '../../data/data';


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
            <Link href={item.link.href} underline={item.link.underline}>
              {item.link.text}
            </Link>
          )}
          {item.extraText}
          {item.links && item.links.map((linkItem, linkIndex) => (
            linkItem.href ? (
              <Link href={linkItem.href} underline={linkItem.underline} key={linkIndex}>
                {linkItem.text}
              </Link>
            ) : (
              linkItem.text
            )
          ))}
        </Typography>
      ))}
    </Container>
  );
}
