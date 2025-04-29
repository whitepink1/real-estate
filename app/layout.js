import { Urbanist } from "next/font/google";
import "./globals.css";
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
  description: "",
  keywords: ["", "", ""],
  openGraph: {
    images: 'https://myvwmwqbvvnhhlmreilo.supabase.co/storage/v1/object/sign/Images/m.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvbS5qcGciLCJpYXQiOjE3NDU2NzMzMTcsImV4cCI6MTc3NzIwOTMxN30.CwrlinBq2xWiqZQ5a6TIIBrrZ5wq_yPEWi0CLo5FYL4',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${urbanistSans.variable} antialiased bg-black`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
