
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, User, ArrowRight, Clock, BookOpen, TrendingUp } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "The Complete Guide to Aquascaping: Creating Underwater Art",
    excerpt: "Master the art of aquascaping with professional techniques, plant selection, and design principles that create breathtaking underwater landscapes.",
    image: "https://images.pexels.com/photos/3330232/pexels-photo-3330232.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    author: "Dr. Sarah Johnson",
    authorImage: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    date: "March 15, 2024",
    category: "Aquascaping",
    readTime: "12 min read",
    views: "2.4k",
    featured: true
  },
  {
    id: 2,
    title: "Advanced Filtration Systems: Achieving Crystal Clear Water",
    excerpt: "Explore cutting-edge filtration technologies and learn how to maintain pristine water conditions for thriving aquatic ecosystems.",
    image: "https://images.pexels.com/photos/1022923/pexels-photo-1022923.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    author: "Mike Chen",
    authorImage: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    date: "March 12, 2024",
    category: "Equipment",
    readTime: "8 min read",
    views: "1.8k",
    featured: false
  },
  {
    id: 3,
    title: "LED Lighting Revolution: Optimizing Growth and Color",
    excerpt: "Discover how modern LED technology transforms aquarium lighting, promoting healthy plant growth and enhancing fish coloration.",
    image: "https://images.pexels.com/photos/1390361/pexels-photo-1390361.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    author: "Emma Davis",
    authorImage: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    date: "March 10, 2024",
    category: "Lighting",
    readTime: "6 min read",
    views: "1.2k",
    featured: false
  },
  {
    id: 4,
    title: "Breeding Success: From Novice to Expert Aquarist",
    excerpt: "Learn the secrets of successful fish breeding, from creating optimal conditions to raising healthy fry in your home aquarium.",
    image: "https://images.pexels.com/photos/2859169/pexels-photo-2859169.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    author: "David Rodriguez",
    authorImage: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    date: "March 8, 2024",
    category: "Fish Care",
    readTime: "10 min read",
    views: "3.1k",
    featured: false
  }
];

const categories = [
  { name: "Aquascaping", count: 24, color: "bg-green-100 text-green-800" },
  { name: "Equipment", count: 18, color: "bg-blue-100 text-blue-800" },
  { name: "Fish Care", count: 32, color: "bg-purple-100 text-purple-800" },
  { name: "Plant Care", count: 15, color: "bg-emerald-100 text-emerald-800" },
  { name: "Lighting", count: 12, color: "bg-yellow-100 text-yellow-800" }
];

export default function BlogSection() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-teal-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium mb-6">
            <BookOpen className="h-4 w-4" />
            <span>Expert Knowledge Hub</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Aquarium Care
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-600 to-green-600">
              Mastery Blog
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Dive deep into expert insights, advanced techniques, and proven strategies to create and maintain stunning aquatic environments.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                  Popular Topics
                </h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                      <span className="font-medium text-slate-700">{category.name}</span>
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${category.color}`}>
                        {category.count}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            {featuredPost && (
              <Card className="mb-12 group hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white border-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-80 md:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 text-sm font-bold rounded-full shadow-lg">
                        Featured Article
                      </span>
                    </div>
                  </div>
                  
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="flex items-center mb-4">
                      <span className="bg-green-100 text-green-800 px-3 py-1 text-sm font-medium rounded-full">
                        {featuredPost.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center mb-6">
                      <img
                        src={featuredPost.authorImage}
                        alt={featuredPost.author}
                        className="w-10 h-10 rounded-full object-cover mr-3"
                      />
                      <div className="flex-1">
                        <div className="flex items-center text-sm text-slate-600 space-x-4">
                          <span className="font-medium text-slate-900">{featuredPost.author}</span>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {featuredPost.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {featuredPost.readTime}
                          </div>
                        </div>
                      </div>
                    </div>

                    <Button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            )}

            {/* Regular Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white border-0 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        categories.find(cat => cat.name === post.category)?.color || 'bg-blue-100 text-blue-800'
                      }`}>
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-semibold text-slate-700">
                      {post.views} views
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center mb-4">
                      <img
                        src={post.authorImage}
                        alt={post.author}
                        className="w-8 h-8 rounded-full object-cover mr-2"
                      />
                      <div className="flex-1">
                        <div className="text-xs text-slate-600">
                          <span className="font-medium text-slate-900">{post.author}</span>
                          <span className="mx-2">•</span>
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-blue-600 font-medium flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </span>
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-0 h-auto">
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="px-12 py-4 text-lg font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
            Explore All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}