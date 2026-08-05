import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Centerlines from "@/components/Centerlines";
import CrosshairCursor from "@/components/CrosshairCursor";
import ScrollProgress from "@/components/ScrollProgress";

export default function Layout() {
  return (
    <div className="relative min-h-screen bg-concrete">
      <Centerlines />
      <CrosshairCursor />
      <ScrollProgress />
      <Nav />
      <main className="relative z-10 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}