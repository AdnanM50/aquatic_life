import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Gift, Star, Users, Zap } from 'lucide-react';

const benefits = [
  {
    icon: Gift,
    title: "Exclusive Discounts",
    description: "Get 15% off your first order + early access to sales"
  },
  {
    icon: Star,
    title: "Expert Tips",
    description: "Weekly aquarium care tips from marine biologists"
  },
  {
    icon: Zap,
    title: "New Product Alerts",
    description: "Be first to know about innovative equipment releases"
  }
];

export default function Newsletter() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-teal-600 to-green-600 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-6 h-6 bg-white/20 rounded-full animate-bounce" style={{left: '10%', top: '20%', animationDelay: '0s', animationDuration: '3s'}}></div>
        <div className="absolute w-4 h-4 bg-white/30 rounded-full animate-bounce" style={{left: '80%', top: '30%', animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute w-8 h-8 bg-white/15 rounded-full animate-bounce" style={{left: '70%', top: '70%', animationDelay: '2s', animationDuration: '3.5s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-8">
            <Users className="h-4 w-4" />
            <span>Join 25,000+ Aquarists</span>
          </div>
          
          <div className="mb-8">
            <Mail className="h-20 w-20 mx-auto mb-8 text-white/80" />
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Dive Into Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white">
                Aquatic Community
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Get exclusive access to expert tips, product launches, and special offers. Join thousands of passionate aquarists on their underwater journey.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-blue-100 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          {/* Newsletter Form */}
          <div className="max-w-lg mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-white/90 text-slate-900 border-0 h-14 text-lg placeholder:text-slate-500 focus:bg-white"
                />
                <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 h-14 text-lg font-semibold shadow-xl transform hover:scale-105 transition-all duration-300">
                  Subscribe Now
                </Button>
              </div>
              
              <div className="flex items-center justify-center space-x-2 text-white/80 mt-6">
                <Gift className="h-5 w-5 text-yellow-300" />
                <span className="text-sm font-medium">
                  🎉 Welcome bonus: 15% off your first order + free shipping!
                </span>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-blue-100">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" alt="Customer" />
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" alt="Customer" />
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" alt="Customer" />
              </div>
              <span className="text-sm">25,000+ subscribers</span>
            </div>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-300 fill-current" />
              ))}
              <span className="text-sm ml-2">4.9/5 rating</span>
            </div>
            <div className="text-sm">
              📧 No spam, unsubscribe anytime
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}