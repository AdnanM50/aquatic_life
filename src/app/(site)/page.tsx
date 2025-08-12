
import AquariumGuide from "@/components/site/landing/aquariumGuide";
import BlogSection from "@/components/site/landing/blogSection";
// import FeaturedProducts from "@/components/site/landing/featurProduct";
import HeroSection from "@/components/site/landing/heroSection";
import Newsletter from "@/components/site/landing/newsletter";
import ProductCategories from "@/components/site/landing/ProductCategories";
import Testimonials from "@/components/site/landing/testimonials";



const Home = () => {

  return (
   <>
      <HeroSection />
      <ProductCategories />
      {/* <FeaturedProducts /> */}
      <Testimonials />
      <AquariumGuide />
      <BlogSection />
      <Newsletter />
  
   </>
  );
}
export default Home;