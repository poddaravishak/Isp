"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, Users, Wifi, CreditCard, Receipt,
  BarChart3, Package, MessageSquare, Wallet, AlertCircle,
  UserCog, Settings, Monitor, User, ChevronDown, ChevronRight,
  Search, UserPlus, Globe, WifiOff, Upload, Activity,
  CheckCircle, Building, FileText, PieChart, TrendingUp,
  Calendar, XCircle, Clock, PauseCircle, LogOut as LogOutIcon,
  Phone, Mail, Layers, Cpu, Router, Server, MapPin,
  FileSpreadsheet, Printer, BookOpen, RefreshCw, ShieldCheck,
  DollarSign, History, Zap, Key, Lock, Database
} from "lucide-react";

interface MenuItem {
  label: string;
  href?: string;
  icon?: React.ElementType;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Client",
    icon: Users,
    children: [
      { label: "Search Customer", href: "/client/search", icon: Search },
      { label: "Add New User", href: "/client/add", icon: UserPlus },
      { label: "Online Users", href: "/client/online", icon: Globe },
      { label: "Offline Users", href: "/client/offline", icon: WifiOff },
      { label: "Import Client", href: "/client/import", icon: Upload },
    ],
  },
  {
    label: "Hotspot",
    icon: Wifi,
    children: [
      { label: "Dashboard", href: "/hotspot/dashboard", icon: LayoutDashboard },
      { label: "Active User", href: "/hotspot/active", icon: Activity },
      { label: "Online User", href: "/hotspot/online", icon: Globe },
      { label: "Office User", href: "/hotspot/office", icon: Building },
      { label: "WiFi Package List", href: "/hotspot/packages", icon: Package },
      { label: "WiFi User/Card Search", href: "/hotspot/card-search", icon: Search },
      { label: "Log", href: "/hotspot/log", icon: FileText },
      { label: "Mac Log", href: "/hotspot/mac-log", icon: Monitor },
      { label: "OTP Search", href: "/hotspot/otp", icon: ShieldCheck },
    ],
  },
  {
    label: "Card",
    icon: CreditCard,
    children: [
      { label: "Card Search", href: "/card/search", icon: Search },
      { label: "Card Generator", href: "/card/generator", icon: Key },
      { label: "Card Generator Excel", href: "/card/generator-excel", icon: FileSpreadsheet },
      { label: "Card Print", href: "/card/print", icon: Printer },
      { label: "Card List", href: "/card/list", icon: BookOpen },
      { label: "Card Report All", href: "/card/report-all", icon: BarChart3 },
      { label: "Card Report By Date", href: "/card/report-date", icon: Calendar },
    ],
  },
  {
    label: "Billing",
    icon: Receipt,
    children: [
      { label: "All Accounts", href: "/billing/all", icon: Users },
      { label: "Active Accounts", href: "/billing/active", icon: CheckCircle },
      { label: "Todays Client", href: "/billing/today", icon: Calendar },
      { label: "Expire In 3 Days", href: "/billing/expire-3", icon: Clock },
      { label: "Expire In 7 Days", href: "/billing/expire-7", icon: Clock },
      { label: "Expired Accounts", href: "/billing/expired", icon: XCircle },
      { label: "Pending Accounts", href: "/billing/pending", icon: Clock },
      { label: "Suspend Accounts", href: "/billing/suspend", icon: PauseCircle },
      { label: "Left Accounts", href: "/billing/left", icon: LogOutIcon },
    ],
  },
  {
    label: "Report",
    icon: BarChart3,
    children: [
      { label: "Payments", href: "/report/payments", icon: DollarSign },
      { label: "Payments History", href: "/report/payments-history", icon: History },
      { label: "Online Transactions", href: "/report/transactions", icon: Zap },
      { label: "POP Wise Clients", href: "/report/pop-clients", icon: Server },
      { label: "ServerWise Sales", href: "/report/server-sales", icon: Database },
      { label: "Date Wise Expire List", href: "/report/expire-list", icon: Calendar },
      { label: "Sales Report", href: "/report/sales", icon: TrendingUp },
      { label: "Reseller Sales Report", href: "/report/reseller-sales", icon: PieChart },
      { label: "Client Invoices", href: "/report/invoices", icon: FileText },
      { label: "Soft Activity Log", href: "/report/activity-log", icon: Activity },
    ],
  },
  {
    label: "Package",
    icon: Package,
    children: [
      { label: "Package List", href: "/package/list", icon: Layers },
      { label: "Package", href: "/package/manage", icon: Package },
      { label: "Package Change History", href: "/package/history", icon: RefreshCw },
    ],
  },
  {
    label: "SMS & Call",
    icon: MessageSquare,
    children: [
      { label: "SMS Recharge", href: "/sms/recharge", icon: Phone },
      { label: "SMS History", href: "/sms/history", icon: History },
      { label: "Bulk Message", href: "/sms/bulk", icon: Mail },
      { label: "SMS Template", href: "/sms/template", icon: FileText },
      { label: "WhatsApp API", href: "/sms/whatsapp", icon: MessageSquare },
    ],
  },
  {
    label: "Wallet",
    icon: Wallet,
    children: [
      { label: "Wallet Pay", href: "/wallet/pay", icon: DollarSign },
      { label: "Recharge", href: "/wallet/recharge", icon: Zap },
    ],
  },
  {
    label: "Complain",
    icon: AlertCircle,
    children: [
      { label: "Create Ticket", href: "/complain/create", icon: AlertCircle },
      { label: "Complain History", href: "/complain/history", icon: History },
    ],
  },
  {
    label: "Employee",
    icon: UserCog,
    children: [
      { label: "Add Employee", href: "/employee/add", icon: UserPlus },
      { label: "Employee List", href: "/employee/list", icon: Users },
      { label: "Employee Salary", href: "/employee/salary", icon: DollarSign },
    ],
  },
  {
    label: "User",
    icon: User,
    children: [
      { label: "Add User", href: "/user/add", icon: UserPlus },
      { label: "Filter", href: "/user/filter", icon: Search },
    ],
  },
  {
    label: "Setup",
    icon: Settings,
    children: [
      { label: "OLT", href: "/setup/olt", icon: Cpu },
      { label: "Mikrotik", href: "/setup/mikrotik", icon: Router },
      { label: "Zone", href: "/setup/zone", icon: MapPin },
      { label: "Sub Zone", href: "/setup/sub-zone", icon: MapPin },
      { label: "Reseller / PoP", href: "/setup/reseller", icon: Server },
      { label: "Company Info", href: "/setup/company", icon: Building },
      { label: "Server Bind", href: "/setup/server", icon: Database },
      { label: "Address", href: "/setup/address", icon: MapPin },
    ],
  },
  {
    label: "Device",
    icon: Monitor,
    children: [
      { label: "OLT List", href: "/device/olt", icon: Cpu },
      { label: "Mikrotik List", href: "/device/mikrotik", icon: Router },
      { label: "Switch List", href: "/device/switch", icon: Layers },
      { label: "AP Router List", href: "/device/ap-router", icon: Wifi },
    ],
  },
  {
    label: "Account",
    icon: User,
    children: [
      { label: "My Account", href: "/account/profile", icon: User },
      { label: "My Password Change", href: "/account/password", icon: Lock },
      { label: "Log Out", href: "/logout", icon: LogOutIcon },
    ],
  },
];

interface SidebarProps {
  collapsed: boolean;
}

export default function Sidebar({ collapsed }: SidebarProps) {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState<string[]>(["Dashboard"]);

  const toggleMenu = (label: string) => {
    setOpenMenus((prev) =>
      prev.includes(label) ? prev.filter((m) => m !== label) : [...prev, label]
    );
  };

  const isActive = (href?: string) => href && pathname === href;
  const isParentActive = (item: MenuItem) =>
    item.children?.some((child) => isActive(child.href));

  return (
    <div
      className={`h-screen bg-[#0f172a] flex flex-col transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      } fixed left-0 top-0 z-40 shadow-2xl`}
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-center border-b border-[#1e293b] px-4 flex-shrink-0">
        {collapsed ? (
          <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
            <Wifi className="w-5 h-5 text-white" />
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <Wifi className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-sm leading-none">ISP Manager</p>
              <p className="text-blue-400 text-xs mt-0.5">BD Edition</p>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto sidebar-scroll py-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const hasChildren = item.children && item.children.length > 0;
          const isOpen = openMenus.includes(item.label);
          const parentActive = isParentActive(item);

          return (
            <div key={item.label}>
              {hasChildren ? (
                <>
                  <button
                    onClick={() => toggleMenu(item.label)}
                    className={`w-full flex items-center px-3 py-2.5 text-sm transition-all duration-150 group ${
                      parentActive
                        ? "text-blue-400 bg-[#1e293b]"
                        : "text-[#94a3b8] hover:text-white hover:bg-[#1e293b]"
                    } ${collapsed ? "justify-center" : "justify-between"}`}
                    title={collapsed ? item.label : undefined}
                  >
                    <div className={`flex items-center gap-3 ${collapsed ? "" : ""}`}>
                      {Icon && (
                        <Icon
                          className={`w-4 h-4 flex-shrink-0 ${
                            parentActive ? "text-blue-400" : "group-hover:text-white"
                          }`}
                        />
                      )}
                      {!collapsed && (
                        <span className="font-medium truncate">{item.label}</span>
                      )}
                    </div>
                    {!collapsed && (
                      <span className="flex-shrink-0">
                        {isOpen ? (
                          <ChevronDown className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronRight className="w-3.5 h-3.5" />
                        )}
                      </span>
                    )}
                  </button>

                  {/* Children */}
                  {!collapsed && isOpen && (
                    <div className="bg-[#0a1628] border-l-2 border-[#1e3a5f] ml-4 mb-1">
                      {item.children!.map((child) => {
                        const ChildIcon = child.icon;
                        const active = isActive(child.href);
                        return (
                          <Link
                            key={child.label}
                            href={child.href || "#"}
                            className={`flex items-center gap-2.5 px-4 py-2 text-xs transition-all duration-150 ${
                              active
                                ? "text-white bg-blue-600/20 border-r-2 border-blue-500"
                                : "text-[#64748b] hover:text-white hover:bg-[#1e293b]"
                            }`}
                          >
                            {ChildIcon && (
                              <ChildIcon
                                className={`w-3.5 h-3.5 flex-shrink-0 ${
                                  active ? "text-blue-400" : ""
                                }`}
                              />
                            )}
                            <span className="truncate">{child.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href || "#"}
                  className={`flex items-center gap-3 px-3 py-2.5 text-sm transition-all duration-150 group ${
                    isActive(item.href)
                      ? "text-white bg-blue-600 border-r-2 border-blue-300"
                      : "text-[#94a3b8] hover:text-white hover:bg-[#1e293b]"
                  } ${collapsed ? "justify-center" : ""}`}
                  title={collapsed ? item.label : undefined}
                >
                  {Icon && (
                    <Icon
                      className={`w-4 h-4 flex-shrink-0 ${
                        isActive(item.href) ? "text-white" : "group-hover:text-white"
                      }`}
                    />
                  )}
                  {!collapsed && (
                    <span className="font-medium truncate">{item.label}</span>
                  )}
                </Link>
              )}
            </div>
          );
        })}
      </nav>

      {/* Bottom Version */}
      {!collapsed && (
        <div className="px-4 py-3 border-t border-[#1e293b] flex-shrink-0">
          <p className="text-[#334155] text-xs text-center">ISP Manager v2.0</p>
        </div>
      )}
    </div>
  );
}
