import Advertisement from "@/projects/trend-chic-app/sections/home-section/advertisement";
import Blog from "@/projects/trend-chic-app/sections/home-section/blogs";
import FinanceBlog from "@/projects/trend-chic-app/sections/home-section/finance-blog";
import FoodBlog from "@/projects/trend-chic-app/sections/home-section/food-blog";
import Intro from "@/projects/trend-chic-app/sections/home-section/intro";
import LifestyleBlog from "@/projects/trend-chic-app/sections/home-section/lifestyle-blog";
import SportsBlog from "@/projects/trend-chic-app/sections/home-section/sports-blog";
import TechnologyBlog from "@/projects/trend-chic-app/sections/home-section/technology-blog";
import TravelBlog from "@/projects/trend-chic-app/sections/home-section/travel-blog";

const Home = () => {
  return (
    <>
    
      <Intro />
      <Advertisement />
      <Blog />
      <TravelBlog />
      <FoodBlog />
      <LifestyleBlog />
      <SportsBlog />
      <FinanceBlog />
       <TechnologyBlog />
    </>
  );
};

export default Home;
