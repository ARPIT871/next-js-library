import React from 'react'
import Intro from '../../sections/home-section/intro'
import Advertisement from '../../sections/home-section/advertisement'
import Blog from '../../sections/home-section/blogs'
import TravelBlog from '../../sections/home-section/travel-blog'
import LifestyleBlog from '../../sections/home-section/lifestyle-blog'
import SportsBlog from '../../sections/home-section/sports-blog'
import FinanceBlog from '../../sections/home-section/finance-blog'
import TechnologyBlog from '../../sections/home-section/technology-blog'
import FoodBlog from '../../sections/home-section/food-blog'

const Home = () => {
  return (
    <><Intro />
    <Advertisement />
    <Blog/>
    <TravelBlog/>
    <FoodBlog/>
    <LifestyleBlog/>
    <SportsBlog/>
    <FinanceBlog/>
    <TechnologyBlog/>
    </>
  )
}

export default Home