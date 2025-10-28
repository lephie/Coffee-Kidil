
import { Montserrat } from "next/font/google";
import "./globals.css";
import 'swiper/swiper.css';

const montserrat = Montserrat({

  variable: "--font-montserrat", 
  subsets: ["latin"],
});


export const metadata = {
  title: "Coffe Kidil",
  description: "Everywhere you go, it's coffee to go",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable}  bg-[#F2E6E6] antialiased`} 
      >
        {children}
      </body>
    </html>
  );
}