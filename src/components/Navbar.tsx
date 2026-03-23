"use client";
import { useState } from "react";
import { Menu, Bell, Search, ChevronDown, User, Settings, LogOut, HelpCircle } from "lucide-react";

interface NavbarProps {
  onToggleSidebar: () => void;
}

export default function Navbar({ onToggleSidebar }: NavbarProps) {
  const [showProfile, setShowProfile] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    { id: 1, text: "5 accounts expiring today", time: "2 min ago", type: "warning" },
    { id: 2, text: "New complaint ticket #1042", time: "15 min ago", type: "info" },
    { id: 3, text: "SMS balance low (50 remaining)", time: "1 hr ago", type: "danger" },
    { id: 4, text: "Server bandwidth usage 85%", time: "2 hr ago", type: "warning" },
  ];

  return (
    <header className="h-16 bg-white border-b border-gray-200 fixed top-0 right-0 left-0 z-30 flex items-center justify-between px-4 shadow-sm">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Search */}
        <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 w-64">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search clients, packages..."
            className="bg-transparent text-sm text-gray-600 placeholder-gray-400 outline-none w-full"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">
        {/* Quick Stats */}
        <div className="hidden lg:flex items-center gap-4 mr-4">
          <div className="text-center">
            <p className="text-xs text-gray-400">Online</p>
            <p className="text-sm font-bold text-green-600">1,247</p>
          </div>
          <div className="w-px h-8 bg-gray-200" />
          <div className="text-center">
            <p className="text-xs text-gray-400">Expire Today</p>
            <p className="text-sm font-bold text-orange-500">42</p>
          </div>
          <div className="w-px h-8 bg-gray-200" />
          <div className="text-center">
            <p className="text-xs text-gray-400">Total Clients</p>
            <p className="text-sm font-bold text-blue-600">8,532</p>
          </div>
        </div>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => { setShowNotifications(!showNotifications); setShowProfile(false); }}
            className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors relative"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 top-12 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
                <h3 className="font-semibold text-gray-800">Notifications</h3>
                <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-medium">
                  {notifications.length} new
                </span>
              </div>
              <div className="max-h-72 overflow-y-auto">
                {notifications.map((n) => (
                  <div
                    key={n.id}
                    className="px-4 py-3 hover:bg-gray-50 border-b border-gray-50 cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                          n.type === "warning"
                            ? "bg-orange-400"
                            : n.type === "danger"
                            ? "bg-red-500"
                            : "bg-blue-400"
                        }`}
                      />
                      <div>
                        <p className="text-sm text-gray-700">{n.text}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{n.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-4 py-3 text-center">
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                  View all notifications
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Help */}
        <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors">
          <HelpCircle className="w-5 h-5" />
        </button>

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => { setShowProfile(!showProfile); setShowNotifications(false); }}
            className="flex items-center gap-2.5 ml-2 pl-3 border-l border-gray-200"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-semibold text-sm shadow-sm">
              A
            </div>
            <div className="hidden md:block text-left">
              <p className="text-sm font-semibold text-gray-800 leading-none">Admin User</p>
              <p className="text-xs text-gray-400 mt-0.5">Super Admin</p>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400 hidden md:block" />
          </button>

          {showProfile && (
            <div className="absolute right-0 top-12 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-100">
                <p className="font-semibold text-gray-800">Admin User</p>
                <p className="text-xs text-gray-400 mt-0.5">admin@ispmanager.com</p>
              </div>
              <div className="py-2">
                <a
                  href="/account/profile"
                  className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-800 transition-colors"
                >
                  <User className="w-4 h-4" />
                  My Account
                </a>
                <a
                  href="/account/password"
                  className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-800 transition-colors"
                >
                  <Settings className="w-4 h-4" />
                  Change Password
                </a>
                <div className="border-t border-gray-100 mt-2 pt-2">
                  <a
                    href="/logout"
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    Log Out
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Click outside overlay */}
      {(showProfile || showNotifications) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => { setShowProfile(false); setShowNotifications(false); }}
        />
      )}
    </header>
  );
}
