import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/header';
import Footer from './components/common/footer';
import LazyLoader from './components/utils/lazyloading';

// Lazy-loaded components
const Home = React.lazy(() => import('./components/pages/home'));
const CreativeDirector = React.lazy(() => import('./components/pages/creative-director'));
const DigitalDesigner = React.lazy(() => import('./components/pages/digital-designer'));
const DigitalArtist = React.lazy(() => import('./components/pages/digital-artist'));
const UIDesigner = React.lazy(() => import('./components/pages/ui-designer'));
const WebDesigner = React.lazy(() => import('./components/pages/web-designer'));
const LogoDesigner = React.lazy(() => import('./components/pages/logo-designer'));
const BrandDesigner = React.lazy(() => import('./components/pages/brand-designer'));
const UXDesigner = React.lazy(() => import('./components/pages/ux-designer'));
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
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/creativedirector" element={<CreativeDirector/>} />
          <Route path="/digitaldesigner" element={<DigitalDesigner />} />
          <Route path="/digitalartist" element={<DigitalArtist />} />
          <Route path="/uidesigner" element={<UIDesigner />} />
          <Route path="/webdesigner" element={<WebDesigner />} />
          <Route path="/logodesigner" element={<LogoDesigner />} />
          <Route path="/branddesigner" element={<BrandDesigner />} />
          <Route path="/uxdesigner" element={<UXDesigner />} />
          <Route path="/details/:type/:id" element={<DetailedView />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/affiliatepolicy" element={<AffiliatePolicy />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/terms&conditions" element={<TermsAndConditions />} />
          <Route path="/cookiepolicy" element={<CookiePolicy />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
