import React, { useState } from 'react';
import { 
  Home, Compass, PlusCircle, Wallet, Facebook, Twitter, Instagram, Youtube, 
  Send, Globe, Apple, PlayCircle 
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const [email, setEmail] = useState('');

  // Active path check
  const isActive = (path: string) => location.pathname === path;

  // Navigation items
  

  // Social links
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'Youtube' },
  ];

  // Quick links
  const quickLinksData = {
    'About Us': ['Our Story', 'Careers', 'Press'],
    'Support': ['Help Center', 'Contact Us', 'Terms & Privacy'],
    'Explore': ['Trending Packages', 'Popular Destinations', 'Forums'],
  };

  // Newsletter submission handler
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
    // Add logic for email subscription here
  };

  return (
    <footer className="bg-[#121212] text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-12 border-b border-neutral-800">
          {/* Newsletter */}
          <div className="w-full max-w-3xl">
            <form onSubmit={handleNewsletterSubmit} className="flex gap-4 items-center">
              <p className="text-neutral-300 hidden md:block">
                Stay updated! Subscribe to our newsletter for travel tips and offers.
              </p>
              <div className="flex-1 min-w-0">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-neutral-800 rounded-lg border border-neutral-700 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#00b894] transition-colors"
                />
              </div>
              <button
                type="submit"
                className="bg-[#00b894] text-white px-6 py-2 rounded-lg hover:bg-[#00a382] transition-colors flex items-center gap-2"
              >
                <span className="hidden sm:inline">Subscribe</span>
                <Send size={18} />
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-neutral-400 hover:text-[#00b894] transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 py-12 border-b border-neutral-800">
          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
            {Object.entries(quickLinksData).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-semibold text-white mb-4">{title}</h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-neutral-400 hover:text-[#00b894] transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* App Download */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white mb-4">Get the App</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 transition-colors px-6 py-3 rounded-lg"
              >
                <Apple size={24} />
                <div className="flex flex-col">
                  <span className="text-xs">Download on the</span>
                  <span className="font-semibold">App Store</span>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 transition-colors px-6 py-3 rounded-lg"
              >
                <PlayCircle size={24} />
                <div className="flex flex-col">
                  <span className="text-xs">Get it on</span>
                  <span className="font-semibold">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
            <div>© 2025 Trawayl. All rights reserved.</div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-[#00b894] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#00b894] transition-colors">Terms of Use</a>
              <div className="flex items-center gap-2">
                <Globe size={16} />
                <select className="bg-transparent border-none focus:outline-none hover:text-[#00b894] cursor-pointer">
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
     
    </footer>
  );
};

export default Footer;
