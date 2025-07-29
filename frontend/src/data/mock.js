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
    "https://customer-assets.emergentagent.com/job_c4c6fd92-58b8-4f71-a30d-75bc91901b82/artifacts/c4gb4pht_unnamed%20%285%29.webp",
    "https://customer-assets.emergentagent.com/job_c4c6fd92-58b8-4f71-a30d-75bc91901b82/artifacts/aaf141vc_unnamed%20%281%29.webp",
    "https://customer-assets.emergentagent.com/job_c4c6fd92-58b8-4f71-a30d-75bc91901b82/artifacts/ywjzuzhy_unnamed%20%282%29.webp",
    "https://customer-assets.emergentagent.com/job_c4c6fd92-58b8-4f71-a30d-75bc91901b82/artifacts/fmmc0jgh_unnamed%20%283%29.webp"
  ],

  screenshots: [
    {
      title: "Daily Overview",
      description: "Track your earnings, orders delivered, and performance metrics in one comprehensive dashboard.",
      image: "https://customer-assets.emergentagent.com/job_c4c6fd92-58b8-4f71-a30d-75bc91901b82/artifacts/c4gb4pht_unnamed%20%285%29.webp"
    },
    {
      title: "Order Management",
      description: "Accept or decline deliveries with detailed order information and estimated completion times.",
      image: "https://customer-assets.emergentagent.com/job_c4c6fd92-58b8-4f71-a30d-75bc91901b82/artifacts/aaf141vc_unnamed%20%281%29.webp"
    },
    {
      title: "Live Tracking",
      description: "Real-time GPS navigation with route optimization and customer location mapping.",
      image: "https://customer-assets.emergentagent.com/job_c4c6fd92-58b8-4f71-a30d-75bc91901b82/artifacts/ywjzuzhy_unnamed%20%282%29.webp"
    },
    {
      title: "Order Details",
      description: "Complete order information with pickup times, customer details, and delivery instructions.",
      image: "https://customer-assets.emergentagent.com/job_c4c6fd92-58b8-4f71-a30d-75bc91901b82/artifacts/fmmc0jgh_unnamed%20%283%29.webp"
    },
    {
      title: "Delivery Tracking",
      description: "Monitor delivery progress with real-time updates and customer communication tools.",
      image: "https://customer-assets.emergentagent.com/job_c4c6fd92-58b8-4f71-a30d-75bc91901b82/artifacts/gd87lol6_unnamed%20%284%29.webp"
    },
    {
      title: "Customer Notifications",
      description: "Send SMS and email updates to customers about delivery status and estimated arrival times.",
      image: "https://customer-assets.emergentagent.com/job_c4c6fd92-58b8-4f71-a30d-75bc91901b82/artifacts/x6z8sg3x_logo.webp"
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