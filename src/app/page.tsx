import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import CategoriesSection from '@/components/CategoriesSection';
import ReviewsSection from '@/components/ReviewsSection';

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-[#02050f] overflow-x-hidden">
      <Navbar />
      <Hero />
      <CategoriesSection />
      <AboutSection />
      <ReviewsSection />
    </main>
  );
}
