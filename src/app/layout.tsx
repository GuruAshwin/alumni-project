import type { Metadata } from "next";
import "./globals.css";
import LandingScreen from "./components/LandingPage/LandingPage";
import Home from "./page";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"  integrity="sha384-mrcw6zmfylzcla8nl+ntuvf0sa7msxsp1uyjomp4yleunsfap+jcxn/twtiaxvxm" crossOrigin="anonymous"></script>
        <title>
          cse-alumni-site
        </title>
      </head>
      <body>
        {children}
        
      </body>
     
    </html>
  );
}
