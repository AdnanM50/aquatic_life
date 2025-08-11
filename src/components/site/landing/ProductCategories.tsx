'use client';

import { ArrowRight, Droplets, Leaf, Lightbulb, Fish, Heart, Palette } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';

const categories = [
  {
    title: "Advanced Filtration",
    description: "Crystal-clear water with cutting-edge filtration technology",
    image: "https://images.pexels.com/photos/1022921/pexels-photo-1022921.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop",
    products: "180+ Systems",
    icon: Droplets,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Living Aquascapes",
    description: "Breathtaking aquatic plants for natural beauty",
    image: "https://images.pexels.com/photos/3330232/pexels-photo-3330232.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop",
    products: "250+ Species",
    icon: Leaf,
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "LED Illumination",
    description: "Professional lighting systems for optimal growth",
    image: "https://images.pexels.com/photos/1390361/pexels-photo-1390361.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop",
    products: "120+ Options",
    icon: Lightbulb,
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    title: "Premium Aquariums",
    description: "Handcrafted glass tanks in every size imaginable",
    image: "https://images.pexels.com/photos/1474103/pexels-photo-1474103.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop",
    products: "75+ Sizes",
    icon: Fish,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Nutrition & Care",
    description: "Premium food and supplements for thriving aquatic life",
    image: "https://images.pexels.com/photos/2859169/pexels-photo-2859169.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop",
    products: "150+ Products",
    icon: Heart,
    gradient: "from-red-500 to-rose-500"
  },
  {
    title: "Artistic Décor",
    description: "Transform your tank into an underwater masterpiece",
    image: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop",
    products: "400+ Pieces",
    icon: Palette,
    gradient: "from-indigo-500 to-blue-500"
  }
];

export default function ProductCategories() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Ocean Floor Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating Seaweed */}
      <div className="absolute left-0 top-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute left-10 top-20 w-4 h-32 bg-gradient-to-t from-green-400/20 to-transparent rounded-full"
          animate={{
            rotate: [-5, 5, -5],
            scaleY: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-20 top-40 w-3 h-24 bg-gradient-to-t from-teal-400/20 to-transparent rounded-full"
          animate={{
            rotate: [3, -3, 3],
            scaleY: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Droplets className="h-4 w-4" />
            <span>Premium Collections</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Explore Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-600 to-green-600">
              Aquatic Universe
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover everything you need to create and maintain breathtaking aquatic environments. From cutting-edge technology to natural beauty.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="group cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white/80 backdrop-blur-sm border-0 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Floating Icon */}
                    <motion.div
                      className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </motion.div>

                    {/* Product Count Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-slate-800">
                      {category.products}
                    </div>

                    {/* Bubble Effect */}
                    <motion.div
                      className="absolute bottom-4 right-4 w-2 h-2 bg-blue-300/60 rounded-full"
                      animate={{
                        y: [-10, -30],
                        opacity: [0, 1, 0],
                        scale: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                  </div>

                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                        {category.title}
                      </h3>
                      <ArrowRight className="h-6 w-6 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-2 transition-all duration-300" />
                    </div>
                    <p className="text-slate-600 text-lg leading-relaxed mb-6">{category.description}</p>
                    
                    {/* Animated Progress Bar */}
                    <div className="w-full bg-slate-200 rounded-full h-1 mb-4 overflow-hidden">
                      <motion.div
                        className={`bg-gradient-to-r ${category.gradient} h-1 rounded-full`}
                        initial={{ width: "0%" }}
                        animate={inView ? { width: "75%" } : { width: "0%" }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">Explore Collection</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient}`}
                            initial={{ opacity: 0.3 }}
                            animate={inView ? { opacity: i < 4 ? 1 : 0.3 } : { opacity: 0.3 }}
                            transition={{ duration: 0.5, delay: (index * 0.1) + (i * 0.1) }}
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}