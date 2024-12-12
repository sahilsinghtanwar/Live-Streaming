import React from 'react';

interface NavDropdownItemProps {
  href: string;
  children: React.ReactNode;
}

export function NavDropdownItem({ href, children }: NavDropdownItemProps) {
  return (
    <a
      href={href}
      className="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
    >
      {children}
    </a>
  );
}