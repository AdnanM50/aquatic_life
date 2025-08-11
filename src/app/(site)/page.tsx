'use client'
// import NemoFish from "@/components/site/landing/3d/nemoFIsh";
import AquariumGuide from "@/components/site/landing/aquariumGuide";
import BlogSection from "@/components/site/landing/blogSection";
import FeaturedProducts from "@/components/site/landing/featurProduct";
import HeroSection from "@/components/site/landing/heroSection";
import Newsletter from "@/components/site/landing/newsletter";
import ProductCategories from "@/components/site/landing/ProductCategories";
import Testimonials from "@/components/site/landing/testimonials";
// import { useEffect, useState } from "react";


export default function Home() {
  // const [scrollY, setScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => setScrollY(window.scrollY);
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);
  return (
   <>
      <HeroSection />
      <ProductCategories />
      <FeaturedProducts />
      <Testimonials />
      <AquariumGuide />
      <BlogSection />
      <Newsletter />
      {/* <NemoFish scrollY={scrollY} /> */}
   </>
  );
}
