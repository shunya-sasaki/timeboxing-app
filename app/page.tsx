"use client";
import { RecoilRoot } from "recoil";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SideBar } from "./components/SideBar";
import { MainPane } from "./components/MainPane";

export default function Home() {
  return (
    <RecoilRoot>
      <main className="min-w-max h-lvh">
        <header className="lvw min-w-max h-[5%] z-50">
          <Header />
        </header>
        <div className="w-max h-[92.5%] min-h-[92.5%] z-0">
          <div className="flex h-full">
            <div className="w-auto min-w-32 h-full border-r-2">
              <SideBar />
            </div>
            <div className="w-max min-w-auto h-full overflow-scroll">
              <MainPane />
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
