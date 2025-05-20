import { Urbanist } from "next/font/google";
import "./globals.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Header from "@/components/Navbar/Header";
import Footer from "@/components/Navbar/Footer";

const urbanistSans = Urbanist({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'],
  variable: '--font-urbanistSans',
});


export const metadata = {
  title: {
    template: "%s / Real Estate Business",
    default: "Welcome / Real Estate Business"
  },
  description: "Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.",
  keywords: ["Real Estate", "Estatein", "Real Estate Business"],
  openGraph: {
    images: '/Villa/villa_2.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/icons/site_icon.svg"/>
      <body className={`${urbanistSans.variable} antialiased bg-grey-08`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
