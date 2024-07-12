import React from 'react'
import Intro from '../../sections/home-section/intro'
import CreativeDirectorBlog from '../../sections/home-section/creativedirector-s'
import DigitalDesignerBlog from '../../sections/home-section/digitaldesigner-s'
import DigitalArtistBlog from '../../sections/home-section/digitalartist-s'
import UIDesignerBlog from '../../sections/home-section/ui-designer-s'
import WebDesignerBlog from '../../sections/home-section/webdesigner-s'
import LogoDesignerBlog from '../../sections/home-section/logodesigner-s'
import BrandDesignerBlog from '../../sections/home-section/branddesigner-s'
import UXDesignerBlog from '../../sections/home-section/ux-designer-s'




const Home = () => {
  return (
    <><Intro /> 
    <CreativeDirectorBlog/>
    <DigitalDesignerBlog/>
    <DigitalArtistBlog/>
    <UIDesignerBlog/>
    <WebDesignerBlog/>
    <LogoDesignerBlog/>
    <BrandDesignerBlog/>
    <UXDesignerBlog/>
    </>
  )
}

export default Home