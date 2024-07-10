import React, { Suspense } from 'react';
import { CircularProgress, Box } from '@mui/material';

const LazyLoader = (Component) => (props) => (
  <Suspense fallback={
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" width="100vw">
      <CircularProgress />
    </Box>
  }>
    <Component {...props} />
  </Suspense>
);

export default LazyLoader;
