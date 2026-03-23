"use client";
import { useEffect } from "react";
import { LogOut } from "lucide-react";

export default function LogoutPage() {
  useEffect(() => {
    // Simulate logout and redirect
    const timer = setTimeout(() => {
      window.location.href = "/dashboard";
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <LogOut className="w-8 h-8 text-red-500" />
        </div>
        <h2 className="text-white text-xl font-bold mb-2">Logging Out...</h2>
        <p className="text-slate-400 text-sm">Thank you for using ISP Manager</p>
        <div className="mt-4 w-32 mx-auto bg-slate-700 rounded-full h-1 overflow-hidden">
          <div className="bg-red-500 h-1 rounded-full animate-pulse w-full" />
        </div>
      </div>
    </div>
  );
}
