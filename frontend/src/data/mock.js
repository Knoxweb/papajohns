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
      title: "Real-Time Earnings Tracking",
      description: "Monitor your daily profits, tips, and cash collected with detailed analytics and visual progress indicators."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-red-600" />,
      title: "Accept or Decline Orders",
      description: "Full control over your delivery schedule. Accept orders that fit your route and decline when needed."
    },
    {
      icon: <Clock className="h-6 w-6 text-red-600" />,
      title: "Order Management",
      description: "Manage and deliver orders for customers on time with pickup scheduling and delivery time estimation."
    },
    {
      icon: <Navigation className="h-6 w-6 text-red-600" />,
      title: "Live Driver Tracking",
      description: "Real-time GPS tracking with turn-by-turn navigation and route optimization for faster deliveries."
    },
    {
      icon: <Phone className="h-6 w-6 text-red-600" />,
      title: "Customer Communication",
      description: "Notify customers via SMS and email with delivery updates and estimated arrival times."
    },
    {
      icon: <MapPin className="h-6 w-6 text-red-600" />,
      title: "Route Optimization",
      description: "Intelligent routing system that helps you complete more deliveries efficiently and increase earnings."
    }
  ],
  
  appScreenshots: [
    "https://images.unsplash.com/photo-1587377838865-38ab492fdad3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxkZWxpdmVyeSUyMGFwcCUyMGludGVyZmFjZXxlbnwwfHx8fDE3NTM4MTMyMTZ8MA&ixlib=rb-4.1.0&q=85",
    "https://images.unsplash.com/photo-1599950753725-ea5d8aba0d29?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwzfHxkZWxpdmVyeSUyMGFwcCUyMGludGVyZmFjZXxlbnwwfHx8fDE3NTM4MTMyMTZ8MA&ixlib=rb-4.1.0&q=85",
    "https://images.unsplash.com/photo-1623824204241-f851d3bcfaf5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHw0fHxkZWxpdmVyeSUyMGFwcCUyMGludGVyZmFjZXxlbnwwfHx8fDE3NTM4MTMyMTZ8MA&ixlib=rb-4.1.0&q=85",
    "https://images.pexels.com/photos/5077068/pexels-photo-5077068.jpeg"
  ],

  screenshots: [
    {
      title: "Smart Dashboard",
      description: "Modern earnings dashboard with real-time analytics, daily profit tracking, and performance insights at your fingertips.",
      image: "https://images.unsplash.com/photo-1587377838865-38ab492fdad3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxkZWxpdmVyeSUyMGFwcCUyMGludGVyZmFjZXxlbnwwfHx8fDE3NTM4MTMyMTZ8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      title: "Intelligent Route Planning",
      description: "Advanced GPS navigation with AI-powered route optimization for maximum efficiency and faster deliveries.",
      image: "https://images.unsplash.com/photo-1599950753725-ea5d8aba0d29?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwzfHxkZWxpdmVyeSUyMGFwcCUyMGludGVyZmFjZXxlbnwwfHx8fDE3NTM4MTMyMTZ8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      title: "Order Control Center",
      description: "Streamlined order management with instant accept/decline functionality and detailed order previews.",
      image: "https://images.unsplash.com/photo-1623824204241-f851d3bcfaf5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHw0fHxkZWxpdmVyeSUyMGFwcCUyMGludGVyZmFjZXxlbnwwfHx8fDE3NTM4MTMyMTZ8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      title: "Live Delivery Tracking",
      description: "Real-time delivery monitoring with customer communication tools and live location sharing.",
      image: "https://images.pexels.com/photos/5077068/pexels-photo-5077068.jpeg"
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
      name: "Mike Rodriguez",
      location: "Chicago, IL",
      comment: "This app has completely transformed how I manage my deliveries. The earnings tracking is amazing and I'm making 30% more per shift!"
    },
    {
      name: "Sarah Johnson",
      location: "Miami, FL", 
      comment: "The route optimization feature is a game-changer. I can complete more deliveries in less time and my customers love the real-time updates."
    },
    {
      name: "David Chen",
      location: "Los Angeles, CA",
      comment: "Finally, an app that actually works! The interface is clean, fast, and has everything I need to run my delivery business efficiently."
    },
    {
      name: "Emily Davis",
      location: "New York, NY",
      comment: "I love having full control over which orders I accept. The app helps me maximize my earnings by choosing the most profitable routes."
    },
    {
      name: "James Wilson",
      location: "Houston, TX",
      comment: "Customer communication features are excellent. My ratings have improved significantly since I started using the notification system."
    },
    {
      name: "Lisa Thompson",
      location: "Phoenix, AZ",
      comment: "The real-time tracking gives me peace of mind and my customers always know exactly when I'll arrive. Professional and reliable!"
    }
  ],

  stats: {
    activeDrivers: "50,000+",
    averageRating: 4.8,
    totalDeliveries: "2M+",
    averageEarningsIncrease: "30%"
  }
};