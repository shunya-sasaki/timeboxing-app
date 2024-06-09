"use client";
import { RecoilRoot } from "recoil";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SideBar } from "./components/SideBar";
import { MainPane } from "./components/MainPane";

export default function Home() {
  return (
    <RecoilRoot>
      <main className="w-full h-screen">
        <header className="h-[5%] z-50">
          <Header />
        </header>
        <div className="h-[92.5%] min-h-[92.5%] z-0">
          <div className="flex h-full">
            <div className="w-[10.0%] h-full border-r-2">
              <SideBar/>
            </div>
            <div className="w-[90%] h-full">
              <MainPane/>
            </div>
          </div>
        </div>
        <footer className="h-[2.5%] z-50">
          <Footer />
        </footer>
      </main>
    </RecoilRoot>
  );
}
