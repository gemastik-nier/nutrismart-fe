import { Metadata } from 'next';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'NutriSmart - Portioning Precision Health in Every Division',
  description: 'NutriSmart - SmartPlate Berbasis QR Code untuk Porsi Makan Terklasifikasi',
};

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
} 