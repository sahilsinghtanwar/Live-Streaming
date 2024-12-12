import React from 'react';
import { Menu, Search, User, Zap } from 'lucide-react';
import { Button } from '../ui/Button';
import { NavDropdown } from './NavDropdown';
import { NavDropdownItem } from './NavDropdownItem';
import { NavLink } from './NavLink';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Mobile Menu */}
          <div className="flex items-center">
            <button className="p-2 rounded-md hover:bg-gray-100 lg:hidden">
              <Menu className="h-6 w-6" />
            </button>
            <a href="/" className="flex items-center space-x-2 text-xl font-bold text-primary">
              <Zap className="h-6 w-6" />
              <span>StreamHub</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            <NavDropdown label="Product">
              <NavDropdownItem href="/features">Features</NavDropdownItem>
              <NavDropdownItem href="/pricing">Pricing</NavDropdownItem>
              <NavDropdownItem href="/integrations">Integrations</NavDropdownItem>
            </NavDropdown>

            <NavLink href="/contact">Contact</NavLink>
            <NavLink href="/whats-new">What's New</NavLink>

            <NavDropdown label="For Business">
              <NavDropdownItem href="/enterprise">Enterprise</NavDropdownItem>
              <NavDropdownItem href="/teams">Teams</NavDropdownItem>
              <NavDropdownItem href="/solutions">Solutions</NavDropdownItem>
            </NavDropdown>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 justify-center px-8 max-w-md">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search streams..."
                className="w-full px-4 py-2 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <NavLink href="/login" className="hidden lg:block">
              Log In
            </NavLink>
            <Button size="sm" className="hidden lg:block">
              Get Started
            </Button>
            <button className="p-2 rounded-full hover:bg-gray-100 lg:hidden">
              <User className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search (Hidden on Desktop) */}
      <div className="lg:hidden px-4 pb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search streams..."
            className="w-full px-4 py-2 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>
    </nav>
  );
}