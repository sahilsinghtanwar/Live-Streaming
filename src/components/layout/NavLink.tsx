import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({ href, children, className = '' }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`px-3 py-2 text-gray-700 hover:text-primary rounded-md hover:bg-gray-50 transition-colors ${className}`}
    >
      {children}
    </a>
  );
}