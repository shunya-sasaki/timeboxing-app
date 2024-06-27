"use client";
import { RecoilRoot } from "recoil";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SideBar } from "./components/SideBar";
import { MainPane } from "./components/MainPane";

export default function Home() {
  return (
    <RecoilRoot>
      <main className="w-screen min-w-max h-lvh overflow-auto">
        <header className="fixed top-0 w-screen lvw min-w-max h-10 z-50">
          <Header />
        </header>
        <div className="w-max min-h-[92.5%] mt-10 z-0">
          <div className="flex h-full">
            <div className="fixed z-0 bg-white w-auto min-w-32 h-full border-r-2">
              <SideBar />
            </div>
            <div className="ml-32 w-max min-w-max h-full">
              <MainPane />
              <div></div>
            </div>
          </div>
        </div>
        <footer className="fixed bottom-0 w-screen h-6 z-50">
          <Footer />
        </footer>
      </main>
    </RecoilRoot>
  );
}
