import { ReactNode } from 'react';

export interface SectionProps {
  id?: string;
  className?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface NavLink {
  label: string;
  href: string;
}