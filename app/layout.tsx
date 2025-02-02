import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SideBar } from "@/components/SideBar";

export const metadata: Metadata = {
  title: "Time Boxing App",
  description: "Web app for time boxing management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-screen min-w-max h-lvh overflow-hidden">
        <header className="sticky top-0 w-screen lvw min-w-max h-10 z-50">
          <Header />
        </header>
        <div className="flex w-max min-h-full h-full z-0">
          <SideBar />
          <div
            className={`transition-all duration-100 w-max min-w-max min-h-full h-full`}
          >
            {children}
          </div>
        </div>
        <footer className="fixed bottom-0 w-screen h-6 z-50">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
