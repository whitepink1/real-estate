'use client';

import dynamic from 'next/dynamic';


const ContactUsForm = dynamic(() => import('@/components/ContactUsForm'), { ssr: false });

export default function ContactUsFormClient() {
  
  return (<>
    <ContactUsForm/>
    </>)
}