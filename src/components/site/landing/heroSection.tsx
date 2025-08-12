'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Star, Shield, Truck, Fish } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 text-white overflow-hidden">
      {/* Animated Ocean Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 via-teal-900/70 to-slate-900/90"></div>
        
        {/* Animated Waves */}
       

        {/* Floating Bubbles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-300/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -100],
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

       
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-8">
            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 text-sm"
            >
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Shield className="h-4 w-4 text-green-400" />
                <span>Trusted Since 2015</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Truck className="h-4 w-4 text-blue-400" />
                <span>Free Shipping</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  Dive Into
                </motion.span>
                <motion.span
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-green-400"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  Aquatic Paradise
                </motion.span>
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed"
              >
                Transform your space with premium aquarium equipment, vibrant aquatic plants, and expert guidance. Create breathtaking underwater ecosystems that captivate and inspire.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-10 py-6 text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300 border-0">
                Explore Collection
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-10 py-6 text-lg font-semibold backdrop-blur-sm">
                <Play className="mr-3 h-6 w-6" />
                Setup Guide
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="grid grid-cols-3 gap-8 pt-12"
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 1.6 }}
                  className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400"
                >
                  15K+
                </motion.div>
                <div className="text-sm text-slate-400 mt-2">Happy Aquarists</div>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 1.8 }}
                  className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-400"
                >
                  800+
                </motion.div>
                <div className="text-sm text-slate-400 mt-2">Premium Products</div>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 2 }}
                  className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400"
                >
                  99%
                </motion.div>
                <div className="text-sm text-slate-400 mt-2">Satisfaction Rate</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700">
              <img
                src="https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=700&h=900&fit=crop"
                alt="Premium aquarium setup"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent"></div>
              
              {/* Floating Price Tag */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20"
              >
                <div className="text-2xl font-bold text-slate-900">$299</div>
                <div className="text-sm text-slate-600">Complete Setup</div>
              </motion.div>

              {/* Swimming Fish Icon */}
              <motion.div
                className="absolute bottom-20 left-8"
                animate={{
                  x: [0, 20, 0],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Fish className="h-8 w-8 text-orange-400" />
              </motion.div>
            </div>
            
            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-teal-400/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}