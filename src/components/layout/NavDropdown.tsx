import React from 'react';
import { ChevronDown } from 'lucide-react';

interface NavDropdownProps {
  label: string;
  children: React.ReactNode;
}

export function NavDropdown({ label, children }: NavDropdownProps) {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 px-3 py-2 text-gray-700 hover:text-primary rounded-md group-hover:bg-gray-50">
        <span>{label}</span>
        <ChevronDown className="h-4 w-4" />
      </button>
      <div className="absolute top-full left-0 w-48 py-2 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0">
        {children}
      </div>
    </div>
  );
}