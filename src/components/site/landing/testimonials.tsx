'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Aquarium Enthusiast",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    text: "AquaLife transformed my living room into an underwater paradise. The quality of their equipment is unmatched, and the customer service is exceptional. My fish have never been happier!",
    setup: "75-gallon planted community tank"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Marine Biologist",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    text: "As a professional, I demand the best equipment for my research tanks. AquaLife consistently delivers premium products that meet scientific standards. Their filtration systems are simply outstanding.",
    setup: "Multiple research aquariums"
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Interior Designer",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    text: "I've incorporated AquaLife aquariums into dozens of luxury homes. Their tanks are not just functional—they're works of art. Clients are always amazed by the crystal-clear water and vibrant ecosystems.",
    setup: "Custom designer installations"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Aquascaping Champion",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    text: "Winning international aquascaping competitions requires the finest equipment. AquaLife's LED systems and CO2 equipment helped me create award-winning layouts. Absolutely phenomenal products!",
    setup: "Competition aquascapes"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50m-40 0a40,40 0 1,1 80,0a40,40 0 1,1 -80,0' stroke='%23ffffff' stroke-width='1' fill='none' opacity='0.1'/%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Quote className="h-4 w-4" />
            <span>Customer Stories</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            What Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-green-400">
              Community Says
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied aquarists who trust AquaLife for their underwater adventures
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Testimonial */}
          <div className="relative">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-white/20"
                  />
                  <div>
                    <h3 className="text-xl font-bold">{testimonials[currentIndex].name}</h3>
                    <p className="text-blue-200">{testimonials[currentIndex].role}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <Quote className="h-8 w-8 text-blue-400 mb-4" />
                <p className="text-lg leading-relaxed mb-6">{testimonials[currentIndex].text}</p>
                <div className="text-sm text-blue-200 bg-white/5 rounded-lg p-3">
                  <strong>Setup:</strong> {testimonials[currentIndex].setup}
                </div>
              </CardContent>
            </Card>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-blue-400 w-8' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center p-8">
              <div className="text-4xl font-bold text-blue-400 mb-2">15,000+</div>
              <div className="text-slate-300">Happy Customers</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center p-8">
              <div className="text-4xl font-bold text-teal-400 mb-2">4.9/5</div>
              <div className="text-slate-300">Average Rating</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center p-8">
              <div className="text-4xl font-bold text-green-400 mb-2">99%</div>
              <div className="text-slate-300">Satisfaction Rate</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center p-8">
              <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-slate-300">Expert Support</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}