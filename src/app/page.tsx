import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import BrandSection from '@/components/BrandSection';
import CategoriesSection from '@/components/CategoriesSection';
import ProductsSection from '@/components/ProductsSection';
import ReviewsSection from '@/components/ReviewsSection';
// import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-[#02050f] overflow-x-hidden">
      <Navbar />
      <Hero />
      <CategoriesSection />
      <AboutSection />
      <BrandSection />
      <ProductsSection />
      <ReviewsSection />
      {/* <Footer /> */}
    </main>
  );
}
