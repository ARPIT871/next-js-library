'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Home = () => {
  const [hostName, setHostName] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHostName(window.location.hostname);
    }
  }, []);

  useEffect(() => {
    if (hostName) {
      let path = '/v1'; // default path
      switch (hostName) {
        case 'localhost':
          path = '/v1';
          break;
        case 'celebzone.com':
          path = '/v2';
          break;
        default:
          path = '/v1';
          break;
      }
      router.push(path);
    }
  }, [hostName, router]);

  return (
    <div>
      {/* <h1>Host: {hostName}</h1> */}
    </div>
  );
};

export default Home;