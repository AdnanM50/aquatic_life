'use client';

import { useState } from 'react';
import { Menu, X, Search, ShoppingCart, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
// import { useAuth } from '@/contexts/AuthContext';
// import LoginModal from '@/components/auth/LoginModal';
// import RegisterModal from '@/components/auth/RegisterModal';
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  
//   const { user, logout } = useAuth();

  const handleSwitchToRegister = () => {
    setShowLoginModal(false);
    setShowRegisterModal(true);
  };

  const handleSwitchToLogin = () => {
    setShowRegisterModal(false);
    setShowLoginModal(true);
  };

  return (
    <>
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">AQ</span>
            </div>
            <span className="text-xl font-bold text-slate-900">AquaLife</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Equipment</a>
            <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Plants</a>
            <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Fish Food</a>
            <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Blog</a>
            <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">About</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="p-2">
              <Search className="h-5 w-5" />
            </Button>
            
            {/* {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="p-2">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <div className="px-3 py-2 border-b">
                    <p className="font-medium text-sm">{user.firstName} {user.lastName}</p>
                    <p className="text-xs text-slate-500">{user.email}</p>
                  </div>
                  <DropdownMenuItem>
                    <a href="/dashboard">Profile Settings</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/dashboard">Order History</a>
                  </DropdownMenuItem>
                  {user.role === 'admin' && (
                    <DropdownMenuItem>
                      <a href="/admin">Admin Panel</a>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem onClick={logout} className="text-red-600">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : ( */}
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-2"
                onClick={() => setShowLoginModal(true)}
              >
                <User className="h-5 w-5" />
              </Button>
            {/* )} */}
            
            <Button variant="ghost" size="sm" className="p-2 relative" onClick={() => window.location.href = '/cart'}>
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">2</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Equipment</a>
              <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Plants</a>
              <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Fish Food</a>
              <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Blog</a>
              <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">About</a>
              <div className="flex items-center space-x-4 pt-4 border-t border-slate-200">
                <Button variant="ghost" size="sm" className="p-2">
                  <Search className="h-5 w-5" />
                </Button>
                
                {/* {user ? (
                  <Button variant="ghost" size="sm" className="p-2" onClick={logout}>
                    <LogOut className="h-5 w-5" />
                  </Button>
                ) : ( */}
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="p-2"
                    onClick={() => setShowLoginModal(true)}
                  >
                    <User className="h-5 w-5" />
                  </Button>
                {/* )} */}
                
                <Button variant="ghost" size="sm" className="p-2 relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">2</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      </header>

      {/* <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSwitchToRegister={handleSwitchToRegister}
      />

      <RegisterModal
        isOpen={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
        onSwitchToLogin={handleSwitchToLogin}
      /> */}
    </>
  );
}