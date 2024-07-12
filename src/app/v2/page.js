import React from 'react'
import Intro from '@/projects/artistry-hub/sections/home-section/intro'
import CreativeDirectorBlog from '@/projects/artistry-hub/sections/home-section/creativedirector-s'
import DigitalDesignerBlog from '@/projects/artistry-hub/sections/home-section/digitaldesigner-s'
import DigitalArtistBlog from '@/projects/artistry-hub/sections/home-section/digitalartist-s'
import UIDesignerBlog from '@/projects/artistry-hub/sections/home-section/ui-designer-s'
import WebDesignerBlog from '@/projects/artistry-hub/sections/home-section/webdesigner-s'
import LogoDesignerBlog from '@/projects/artistry-hub/sections/home-section/logodesigner-s'
import BrandDesignerBlog from '@/projects/artistry-hub/sections/home-section/branddesigner-s'
import UXDesignerBlog from '@/projects/artistry-hub/sections/home-section/ux-designer-s'




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