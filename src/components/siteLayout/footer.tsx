import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AQ</span>
              </div>
              <span className="text-xl font-bold">AquaLife</span>
            </div>
            <p className="text-slate-400">
              Your trusted partner in creating beautiful and healthy aquatic environments. Quality equipment and expert guidance since 2015.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Shop</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Aquarium Tanks</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Filtration Systems</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Aquatic Plants</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Lighting</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Fish Food</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Decorations</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Care Guides</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Plant Database</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Setup Videos</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-slate-400">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-slate-400">support@aqualife.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-slate-400">123 Aquarium St, Fish City, FC 12345</span>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-medium mb-2">Store Hours</h4>
              <p className="text-sm text-slate-400">
                Mon-Fri: 9AM-8PM<br />
                Sat-Sun: 10AM-6PM
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © 2024 AquaLife. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Shipping Info</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Returns</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}