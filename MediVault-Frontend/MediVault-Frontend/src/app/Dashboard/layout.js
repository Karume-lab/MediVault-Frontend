"use client"

import "../globals.css";
import Header from "@/Components/Header/header";


export default function RootLayout({ children }) {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}
