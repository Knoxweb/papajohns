import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Smartphone, 
  MapPin, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  Navigation, 
  Phone,
  Mail,
  Star,
  Download,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { mockData } from '../data/mock';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % mockData.features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img 
                src="https://customer-assets.emergentagent.com/job_c4c6fd92-58b8-4f71-a30d-75bc91901b82/artifacts/x6z8sg3x_logo.webp" 
                alt="Papa John's Driver" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-gray-900">Driver App</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-red-600 transition-colors">
                Features
              </button>
              <button onClick={() => scrollToSection('screenshots')} className="text-gray-600 hover:text-red-600 transition-colors">
                Screenshots
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-600 hover:text-red-600 transition-colors">
                Reviews
              </button>
            </nav>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <nav className="px-4 py-4 space-y-2">
              <button onClick={() => scrollToSection('features')} className="block w-full text-left py-2 text-gray-600 hover:text-red-600">
                Features
              </button>
              <button onClick={() => scrollToSection('screenshots')} className="block w-full text-left py-2 text-gray-600 hover:text-red-600">
                Screenshots
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left py-2 text-gray-600 hover:text-red-600">
                Reviews
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-red-100 text-red-700 border-red-200 px-4 py-2">
                  🚀 New 2025 Design - Now Available
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  The Future of 
                  <span className="text-red-600 block">Delivery Management</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Experience the completely redesigned Papa John's Driver App with cutting-edge technology, 
                  intuitive interfaces, and AI-powered features that help drivers earn more and work smarter.
                </p>
                <div className="flex items-center space-x-4 pt-2">
                  <Badge className="bg-green-100 text-green-700 border-green-200">
                    ✨ AI-Powered Routes
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                    📱 Modern Interface
                  </Badge>
                  <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                    💰 30% More Earnings
                  </Badge>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-gray-300 hover:border-red-600 hover:text-red-600 px-8 py-4 text-lg"
                  onClick={() => scrollToSection('features')}
                >
                  Learn More
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={mockData.appScreenshots[activeFeature]} 
                  alt="App Screenshot"
                  className="mx-auto max-w-sm w-full rounded-3xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-red-200 to-green-200 rounded-3xl blur-3xl opacity-20 transform scale-110"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Professional Drivers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage deliveries efficiently and maximize your earnings
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-red-600">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-red-100 rounded-lg mr-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Redesigned App Interfaces for 2025
            </h2>
            <p className="text-xl text-gray-600">
              Modern, intuitive design meets powerful functionality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.screenshots.map((screenshot, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img 
                    src={screenshot.image} 
                    alt={screenshot.title}
                    className="mx-auto w-full h-64 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Smartphone className="h-4 w-4 text-gray-700" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{screenshot.title}</h3>
                <p className="text-gray-600 leading-relaxed">{screenshot.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Drivers Are Saying
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied Papa John's drivers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="https://customer-assets.emergentagent.com/job_c4c6fd92-58b8-4f71-a30d-75bc91901b82/artifacts/x6z8sg3x_logo.webp" 
                  alt="Papa John's Driver" 
                  className="h-8 w-auto"
                />
                <span className="text-xl font-bold">Driver App</span>
              </div>
              <p className="text-gray-400 mb-4">
                The modern solution for Papa John's delivery management. 
                Built for efficiency, designed for drivers.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <Mail className="h-4 w-4" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Contact Support</li>
                <li>Training Resources</li>
                <li>FAQ</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Papa John's</li>
                <li>Careers</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Papa John's International, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;