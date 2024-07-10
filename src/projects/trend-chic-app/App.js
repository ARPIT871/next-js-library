// src/App.js
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/common/header';
import Footer from './components/common/footer';
import LazyLoader from './components/utils/lazyloader';

// Lazy load your components
const Home = LazyLoader(React.lazy(() => import('./components/pages/home')));
const Lifestyle = LazyLoader(React.lazy(() => import('./components/pages/lifestyle')));
const Fashion = LazyLoader(React.lazy(() => import('./components/pages/fashion')));
const Beauty = LazyLoader(React.lazy(() => import('./components/pages/beauty')));
const Health = LazyLoader(React.lazy(() => import('./components/pages/health')));
const Sports = LazyLoader(React.lazy(() => import('./components/pages/sports')));
const Travel = LazyLoader(React.lazy(() => import('./components/pages/travel')));
const Finance = LazyLoader(React.lazy(() => import('./components/pages/finance')));
const Technology = LazyLoader(React.lazy(() => import('./components/pages/technology')));
const Food = LazyLoader(React.lazy(() => import('./components/pages/food')));
const DetailedView = LazyLoader(React.lazy(() => import('./components/sections/detailedview-blog')));
const PrivacyPolicy = LazyLoader(React.lazy(() => import('./components/common/Policy/Privacy Policy')));
const AffiliatePolicy = LazyLoader(React.lazy(() => import('./components/common/Policy/Affiliate policy')));
const ContactUs = LazyLoader(React.lazy(() => import('./components/common/Quick-links/ContactUs')));
const AboutUs = LazyLoader(React.lazy(() => import('./components/common/Quick-links/AboutUs')));
const Disclaimer = LazyLoader(React.lazy(() => import('./components/common/Quick-links/disclaimer')));
const TermsAndConditions = LazyLoader(React.lazy(() => import('./components/common/Quick-links/terms&conditions')));
const CookiePolicy = LazyLoader(React.lazy(() => import('./components/common/Policy/Cookie policy')));

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/lifestyle" element={<Lifestyle />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/health" element={<Health />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/food" element={<Food />} />
        <Route path="/details/:type/:id" element={<DetailedView />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/affiliatepolicy" element={<AffiliatePolicy />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/terms&conditions" element={<TermsAndConditions />} />
        <Route path="/cookiepolicy" element={<CookiePolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
