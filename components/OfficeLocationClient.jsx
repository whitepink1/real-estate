'use client';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const OfficeLocation = dynamic(() => import('@/components/OfficeLocation'), { ssr: false });

export default function OfficeLocationClient() {
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setShowForm(true);
      window.removeEventListener("scroll", onScroll);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    showForm && <OfficeLocation />
    )
}