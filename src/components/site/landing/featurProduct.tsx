'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Heart, ShoppingCart, Eye, Zap, Award, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const featuredProducts = [
  {
    id: 1,
    name: "AquaMax Pro Canister Filter",
    price: 349.99,
    originalPrice: 399.99,
    rating: 4.9,
    reviews: 287,
    image: "https://images.pexels.com/photos/1022923/pexels-photo-1022923.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop",
    badge: "Bestseller",
    badgeColor: "bg-green-600",
    features: ["Silent Operation", "5-Stage Filtration", "2-Year Warranty"]
  },
  {
    id: 2,
    name: "Emerald Carpet Plant Bundle",
    price: 34.99,
    originalPrice: null,
    rating: 4.8,
    reviews: 156,
    image: "https://images.pexels.com/photos/3330232/pexels-photo-3330232.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop",
    badge: "New Arrival",
    badgeColor: "bg-blue-600",
    features: ["Easy Care", "Fast Growing", "CO2 Optional"]
  },
  {
    id: 3,
    name: "Spectrum LED Pro Light",
    price: 129.99,
    originalPrice: 169.99,
    rating: 4.7,
    reviews: 203,
    image: "https://images.pexels.com/photos/1390361/pexels-photo-1390361.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop",
    badge: "Hot Deal",
    badgeColor: "bg-red-600",
    features: ["Full Spectrum", "App Control", "Timer Function"]
  },
  {
    id: 4,
    name: "Premium Nutrition Pellets",
    price: 24.99,
    originalPrice: null,
    rating: 4.9,
    reviews: 412,
    image: "https://images.pexels.com/photos/2859169/pexels-photo-2859169.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop",
    badge: "Top Rated",
    badgeColor: "bg-yellow-600",
    features: ["All Natural", "Color Enhancing", "Immune Support"]
  }
];

export default function FeaturedProducts() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Ocean Current Effects */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
          animate={{
            x: [-100, window.innerWidth + 100],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-full h-2 bg-gradient-to-r from-transparent via-teal-400 to-transparent"
          animate={{
            x: [window.innerWidth + 100, -100],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
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
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-teal-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Award className="h-4 w-4" />
            <span>Handpicked Excellence</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Featured
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-600 to-green-600">
              Aquarium Essentials
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover our most loved products, carefully selected by aquarium enthusiasts and backed by thousands of positive reviews.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white/90 backdrop-blur-sm border-0 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Water Ripple Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100"
                    initial={false}
                    animate={{
                      background: [
                        "radial-gradient(circle at 50% 100%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)",
                        "radial-gradient(circle at 50% 100%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
                        "radial-gradient(circle at 50% 100%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  {/* Badge */}
                  <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded-full text-white ${product.badgeColor} shadow-lg`}>
                    {product.badge}
                  </span>
                  
                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <motion.button
                      className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Heart className="h-4 w-4 text-slate-600 hover:text-red-600" />
                    </motion.button>
                    <motion.button
                      className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Eye className="h-4 w-4 text-slate-600 hover:text-blue-600" />
                    </motion.button>
                  </div>

                  {/* Floating Bubbles */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-blue-300/60 rounded-full opacity-0 group-hover:opacity-100"
                      style={{
                        left: `${20 + i * 30}%`,
                        bottom: '10px',
                      }}
                      animate={{
                        y: [-10, -40],
                        opacity: [0, 1, 0],
                        scale: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>

                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-slate-300'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-slate-600 ml-2">({product.reviews})</span>
                  </div>

                  {/* Features List */}
                  <div className="mb-4">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-slate-600 mb-1">
                        <Zap className="h-3 w-3 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-slate-900">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-slate-500 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    {product.originalPrice && (
                      <span className="text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                        Save ${(product.originalPrice - product.price).toFixed(2)}
                      </span>
                    )}
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold py-3 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button variant="outline" size="lg" className="px-12 py-4 text-lg font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
            Explore All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}