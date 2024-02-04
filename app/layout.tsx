import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "Blue Ray Hub",
  description: "Discover latest Blu Ray CDs with fan-service cuts and content",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
