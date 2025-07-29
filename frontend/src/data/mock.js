import React from 'react';
import { 
  Smartphone, 
  MapPin, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  Navigation, 
  Phone,
  Mail
} from 'lucide-react';

export const mockData = {
  features: [
    {
      icon: <DollarSign className="h-6 w-6 text-red-600" />,
      title: "AI-Powered Earnings Analytics",
      description: "Advanced machine learning algorithms analyze your delivery patterns to maximize earnings with smart route suggestions and optimal timing recommendations."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-red-600" />,
      title: "Smart Order Selection",
      description: "Intelligent order filtering system that learns your preferences and automatically suggests the most profitable deliveries based on distance, tips, and traffic patterns."
    },
    {
      icon: <Clock className="h-6 w-6 text-red-600" />,
      title: "Dynamic Schedule Management",
      description: "Predictive scheduling technology that adapts to real-time conditions, helping you plan deliveries efficiently and maintain optimal work-life balance."
    },
    {
      icon: <Navigation className="h-6 w-6 text-red-600" />,
      title: "Next-Gen GPS Navigation",
      description: "Ultra-precise tracking with real-time traffic updates, weather considerations, and predictive routing that adapts to changing conditions automatically."
    },
    {
      icon: <Phone className="h-6 w-6 text-red-600" />,
      title: "Unified Communication Hub",
      description: "Seamless customer interaction through integrated messaging, automated notifications, and smart delivery updates that enhance customer satisfaction."
    },
    {
      icon: <MapPin className="h-6 w-6 text-red-600" />,
      title: "Intelligent Route Optimization",
      description: "Advanced algorithms process millions of data points to create the most efficient delivery routes, reducing fuel costs and increasing daily earnings potential."
    }
  ],
  
  appScreenshots: [
    "https://images.unsplash.com/photo-1587377838865-38ab492fdad3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxkZWxpdmVyeSUyMGFwcCUyMGludGVyZmFjZXxlbnwwfHx8fDE3NTM4MTMyMTZ8MA&ixlib=rb-4.1.0&q=85",
    "https://customer-assets.emergentagent.com/job_papajohns-driver/artifacts/5p1wog88_routeplanning.jpg",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmR8ZW58MHx8fHwxNzUzODE0MTM1fDA&ixlib=rb-4.1.0&q=85",
    "https://customer-assets.emergentagent.com/job_papajohns-driver/artifacts/4fwb89a3_map-delivery.jpg"
  ],

  screenshots: [
    {
      title: "Smart Dashboard",
      description: "Modern earnings dashboard with real-time analytics, daily profit tracking, and performance insights at your fingertips.",
      image: "https://images.unsplash.com/photo-1587377838865-38ab492fdad3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxkZWxpdmVyeSUyMGFwcCUyMGludGVyZmFjZXxlbnwwfHx8fDE3NTM4MTMyMTZ8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      title: "Intelligent Route Planning",
      description: "Advanced GPS navigation with AI-powered route optimization featuring real-time traffic analysis and multi-stop delivery planning.",
      image: "https://customer-assets.emergentagent.com/job_papajohns-driver/artifacts/5p1wog88_routeplanning.jpg"
    },
    {
      title: "Order Control Center",
      description: "Professional delivery management dashboard with comprehensive order tracking, executive oversight, and real-time operational control.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmR8ZW58MHx8fHwxNzUzODE0MTM1fDA&ixlib=rb-4.1.0&q=85"
    },
    {
      title: "Live Delivery Tracking",
      description: "Real-time GPS tracking with turn-by-turn navigation, estimated delivery times, and live route updates for optimal delivery performance.",
      image: "https://customer-assets.emergentagent.com/job_papajohns-driver/artifacts/4fwb89a3_map-delivery.jpg"
    },
    {
      title: "Customer Connect",
      description: "Professional communication suite with automated SMS/email notifications and delivery status updates.",
      image: "https://images.pexels.com/photos/5077067/pexels-photo-5077067.jpeg"
    },
    {
      title: "Performance Analytics",
      description: "Comprehensive performance metrics with earnings breakdown, delivery statistics, and optimization recommendations.",
      image: "https://images.unsplash.com/photo-1631016800670-e8245c0833d4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxtb2JpbGUlMjBhcHAlMjBtb2NrdXB8ZW58MHx8fHwxNzUzNzkzODg1fDA&ixlib=rb-4.1.0&q=85"
    }
  ],

  testimonials: [
    {
      name: "Marcus Johnson",
      location: "Chicago, IL",
      comment: "The new 2025 redesign is incredible! The AI route suggestions alone have increased my daily earnings by $50. The interface is so much cleaner and faster than before."
    },
    {
      name: "Isabella Martinez",
      location: "Miami, FL", 
      comment: "Love the modern design and smart features. The predictive routing actually learns my preferences and the customer communication tools are game-changing. Best delivery app I've used!"
    },
    {
      name: "Ryan Chen",
      location: "Los Angeles, CA",
      comment: "This redesigned app is like having a personal assistant. The earnings analytics help me make better decisions and I'm completing 40% more deliveries per shift."
    },
    {
      name: "Zoe Thompson",
      location: "New York, NY",
      comment: "The user experience is phenomenal compared to the old version. Everything feels intuitive and the AI-powered features actually make me more money. Highly recommend!"
    },
    {
      name: "Carlos Rodriguez",
      location: "Houston, TX",
      comment: "Finally, an app that uses modern technology properly! The smart order selection and real-time optimization features have transformed how I work. Earning 35% more weekly."
    },
    {
      name: "Aisha Patel",
      location: "Phoenix, AZ",
      comment: "The redesigned interface is beautiful and functional. Love how it learns from my delivery patterns and suggests the most profitable routes. This is the future of delivery!"
    }
  ],

  stats: {
    activeDrivers: "50,000+",
    averageRating: 4.8,
    totalDeliveries: "2M+",
    averageEarningsIncrease: "30%"
  }
};