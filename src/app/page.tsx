import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturesBar from '@/components/FeaturesBar';
import AboutSection from '@/components/AboutSection';
import CategoriesSection from '@/components/CategoriesSection';

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-[#02050f] overflow-x-hidden">
      {/* Top Glassmorphic Navigation */}
      <Navbar />

      {/* Luxury Awwwards-style Hero Section with 3D Layered Depth & Wave Frame-Breaking */}
      <Hero />

      {/* Clean White Lower Section (Seamless Wave Transition) */}
      <FeaturesBar />

      {/* Deep Oceanarium About Section with Animated Glowing Octopus */}
      <AboutSection />

      {/* Aquarium Accessories E-Commerce Category Section (Fertilizers, Plants, CO2, Hardscape) */}
      <CategoriesSection />
    </main>
  );
}
