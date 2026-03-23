"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100">
      <Sidebar collapsed={sidebarCollapsed} />
      <Navbar onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <main
        className={`transition-all duration-300 pt-16 min-h-screen ${
          sidebarCollapsed ? "ml-16" : "ml-64"
        }`}
      >
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
