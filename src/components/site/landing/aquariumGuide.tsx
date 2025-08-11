import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Beaker, Thermometer, Droplets, Zap } from 'lucide-react';

const setupSteps = [
  {
    step: 1,
    title: "Choose Your Tank",
    description: "Select the perfect aquarium size and style for your space",
    icon: Beaker,
    tips: ["Consider available space", "Plan for equipment", "Think about maintenance access"],
    image: "https://images.pexels.com/photos/1474103/pexels-photo-1474103.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
  },
  {
    step: 2,
    title: "Install Filtration",
    description: "Set up your filtration system for crystal-clear water",
    icon: Droplets,
    tips: ["Size filter to tank volume", "Prime the system", "Test water flow"],
    image: "https://images.pexels.com/photos/1022921/pexels-photo-1022921.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
  },
  {
    step: 3,
    title: "Perfect Lighting",
    description: "Install LED lighting for optimal plant growth and visual appeal",
    icon: Zap,
    tips: ["Match spectrum to plants", "Set timer schedule", "Adjust intensity gradually"],
    image: "https://images.pexels.com/photos/1390361/pexels-photo-1390361.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
  },
  {
    step: 4,
    title: "Monitor & Maintain",
    description: "Keep your aquatic ecosystem healthy with proper monitoring",
    icon: Thermometer,
    tips: ["Test water parameters", "Regular water changes", "Monitor fish behavior"],
    image: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
  }
];

export default function AquariumGuide() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-teal-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="h-4 w-4" />
            <span>Setup Made Simple</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Your Journey to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-600 to-green-600">
              Aquatic Mastery
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Follow our expert-crafted guide to create stunning aquariums that thrive. From beginner to advanced, we'll help you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {setupSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 bg-white border-0 overflow-hidden transform hover:-translate-y-2">
                <div className="flex">
                  <div className="w-1/3 relative overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-teal-600/80 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <IconComponent className="h-8 w-8 text-blue-600" />
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="flex-1 p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                        {step.step}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="space-y-3">
                      {step.tips.map((tip, tipIndex) => (
                        <div key={tipIndex} className="flex items-center text-slate-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          <span>{tip}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Aquatic Journey?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get our comprehensive setup guide and join thousands of successful aquarists
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 text-lg font-semibold">
              Download Free Guide
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold">
              Watch Setup Videos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}