import React from 'react';
import { Zap, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import { Button } from '../ui/Button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Zap className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-white">StreamHub</span>
            </div>
            <p className="text-sm leading-relaxed">
              Empowering creators to share their passion with the world through
              high-quality live streaming experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-sm hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/features" className="text-sm hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="/pricing" className="text-sm hover:text-primary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-poppins font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="/blog" className="text-sm hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/help" className="text-sm hover:text-primary transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/guidelines" className="text-sm hover:text-primary transition-colors">
                  Community Guidelines
                </a>
              </li>
              <li>
                <a href="/status" className="text-sm hover:text-primary transition-colors">
                  Status
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-poppins font-semibold text-white mb-4">Stay Updated</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-primary"
                />
                <Button
                  type="submit"
                  className="rounded-l-none border border-l-0 border-primary"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-400">
                Subscribe to our newsletter for updates and exclusive content.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm">
              © {currentYear} StreamHub. All rights reserved.
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}