import MainLayout from "@/components/MainLayout";
import {
  Users, Wifi, CheckCircle, XCircle, DollarSign, TrendingUp,
  AlertCircle, Clock, ArrowUp, ArrowDown, Activity, Server,
  CreditCard, Package
} from "lucide-react";

const stats = [
  {
    label: "Total Clients",
    value: "8,532",
    change: "+124",
    trend: "up",
    icon: Users,
    color: "blue",
    bg: "bg-blue-50",
    iconBg: "bg-blue-600",
  },
  {
    label: "Online Users",
    value: "1,247",
    change: "+38",
    trend: "up",
    icon: Wifi,
    color: "green",
    bg: "bg-green-50",
    iconBg: "bg-green-600",
  },
  {
    label: "Active Accounts",
    value: "7,891",
    change: "+56",
    trend: "up",
    icon: CheckCircle,
    color: "emerald",
    bg: "bg-emerald-50",
    iconBg: "bg-emerald-600",
  },
  {
    label: "Expired Today",
    value: "42",
    change: "+12",
    trend: "up",
    icon: XCircle,
    color: "red",
    bg: "bg-red-50",
    iconBg: "bg-red-500",
  },
  {
    label: "Today's Collection",
    value: "৳ 1,24,500",
    change: "+৳ 8,200",
    trend: "up",
    icon: DollarSign,
    color: "violet",
    bg: "bg-violet-50",
    iconBg: "bg-violet-600",
  },
  {
    label: "Monthly Revenue",
    value: "৳ 28,45,000",
    change: "+15%",
    trend: "up",
    icon: TrendingUp,
    color: "orange",
    bg: "bg-orange-50",
    iconBg: "bg-orange-500",
  },
  {
    label: "Open Tickets",
    value: "18",
    change: "-5",
    trend: "down",
    icon: AlertCircle,
    color: "yellow",
    bg: "bg-yellow-50",
    iconBg: "bg-yellow-500",
  },
  {
    label: "Expire In 7 Days",
    value: "213",
    change: "+28",
    trend: "up",
    icon: Clock,
    color: "pink",
    bg: "bg-pink-50",
    iconBg: "bg-pink-500",
  },
];

const recentClients = [
  { id: "C001", name: "Rahim Uddin", phone: "01711-234567", package: "10 Mbps", status: "Active", zone: "Dhaka", paid: "৳ 600" },
  { id: "C002", name: "Karim Ahmed", phone: "01812-345678", package: "20 Mbps", status: "Active", zone: "Chittagong", paid: "৳ 1,000" },
  { id: "C003", name: "Salma Begum", phone: "01913-456789", package: "5 Mbps", status: "Expired", zone: "Sylhet", paid: "৳ 400" },
  { id: "C004", name: "Jamal Hossain", phone: "01614-567890", package: "50 Mbps", status: "Active", zone: "Rajshahi", paid: "৳ 2,500" },
  { id: "C005", name: "Nasrin Akter", phone: "01715-678901", package: "10 Mbps", status: "Suspend", zone: "Dhaka", paid: "৳ 0" },
];

const recentPayments = [
  { id: "P001", client: "Rahim Uddin", amount: "৳ 600", method: "bKash", date: "23 Mar 2026", status: "Success" },
  { id: "P002", client: "Karim Ahmed", amount: "৳ 1,000", method: "Nagad", date: "23 Mar 2026", status: "Success" },
  { id: "P003", client: "Jamal Hossain", amount: "৳ 2,500", method: "Cash", date: "23 Mar 2026", status: "Success" },
  { id: "P004", client: "Rubel Islam", amount: "৳ 800", method: "Rocket", date: "22 Mar 2026", status: "Success" },
  { id: "P005", client: "Monika Das", amount: "৳ 600", method: "bKash", date: "22 Mar 2026", status: "Pending" },
];

const packageStats = [
  { name: "5 Mbps", clients: 1250, color: "bg-blue-500", percent: 15 },
  { name: "10 Mbps", clients: 3420, color: "bg-green-500", percent: 40 },
  { name: "20 Mbps", clients: 2100, color: "bg-orange-500", percent: 25 },
  { name: "50 Mbps", clients: 1100, color: "bg-purple-500", percent: 13 },
  { name: "100 Mbps+", clients: 662, color: "bg-red-500", percent: 7 },
];

export default function Dashboard() {
  return (
    <MainLayout>
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Welcome back, Admin! Here&apos;s what&apos;s happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
                  <p className="text-xl font-bold text-gray-800 mt-1">{stat.value}</p>
                  <div className="flex items-center gap-1 mt-1.5">
                    {stat.trend === "up" ? (
                      <ArrowUp className="w-3 h-3 text-green-500" />
                    ) : (
                      <ArrowDown className="w-3 h-3 text-red-500" />
                    )}
                    <span
                      className={`text-xs font-medium ${
                        stat.trend === "up" ? "text-green-600" : "text-red-500"
                      }`}
                    >
                      {stat.change}
                    </span>
                    <span className="text-xs text-gray-400">vs yesterday</span>
                  </div>
                </div>
                <div className={`${stat.iconBg} w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Middle Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {/* Package Distribution */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">Package Distribution</h3>
            <Package className="w-4 h-4 text-gray-400" />
          </div>
          <div className="space-y-3">
            {packageStats.map((pkg) => (
              <div key={pkg.name}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-600">{pkg.name}</span>
                  <span className="text-sm font-semibold text-gray-800">{pkg.clients.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className={`${pkg.color} h-2 rounded-full transition-all`}
                    style={{ width: `${pkg.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Add Client", icon: Users, color: "bg-blue-600", href: "/client/add" },
              { label: "Collect Payment", icon: DollarSign, color: "bg-green-600", href: "/billing/all" },
              { label: "Create Ticket", icon: AlertCircle, color: "bg-orange-500", href: "/complain/create" },
              { label: "Send SMS", icon: Activity, color: "bg-purple-600", href: "/sms/bulk" },
              { label: "View Reports", icon: TrendingUp, color: "bg-pink-500", href: "/report/sales" },
              { label: "Manage Cards", icon: CreditCard, color: "bg-cyan-600", href: "/card/list" },
            ].map((action) => {
              const ActionIcon = action.icon;
              return (
                <a
                  key={action.label}
                  href={action.href}
                  className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-gray-300 hover:shadow-sm transition-all group"
                >
                  <div className={`${action.color} w-8 h-8 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <ActionIcon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xs text-gray-600 font-medium text-center">{action.label}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Server Status */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">Server Status</h3>
            <Server className="w-4 h-4 text-gray-400" />
          </div>
          <div className="space-y-3">
            {[
              { name: "Main Server (Dhaka)", status: "Online", uptime: "99.9%", load: 65, color: "text-green-600", dot: "bg-green-500" },
              { name: "Mikrotik - Zone A", status: "Online", uptime: "99.7%", load: 42, color: "text-green-600", dot: "bg-green-500" },
              { name: "Mikrotik - Zone B", status: "Online", uptime: "98.2%", load: 78, color: "text-green-600", dot: "bg-green-500" },
              { name: "OLT - Gulshan", status: "Warning", uptime: "95.1%", load: 91, color: "text-orange-500", dot: "bg-orange-400" },
              { name: "Backup Server", status: "Offline", uptime: "0%", load: 0, color: "text-red-500", dot: "bg-red-500" },
            ].map((server) => (
              <div key={server.name} className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${server.dot} flex-shrink-0`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium text-gray-700 truncate">{server.name}</p>
                    <span className={`text-xs font-semibold ${server.color} ml-1 flex-shrink-0`}>{server.status}</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5 mt-1">
                    <div
                      className={`h-1.5 rounded-full ${
                        server.load > 85 ? "bg-red-500" : server.load > 70 ? "bg-orange-400" : "bg-green-500"
                      }`}
                      style={{ width: `${server.load}%` }}
                    />
                  </div>
                </div>
                <span className="text-xs text-gray-400 flex-shrink-0">{server.load}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row - Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Recent Clients */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <h3 className="font-semibold text-gray-800">Recent Clients</h3>
            <a href="/client/search" className="text-xs text-blue-600 hover:text-blue-700 font-medium">
              View All →
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-4 py-2.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">Name</th>
                  <th className="px-4 py-2.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">Package</th>
                  <th className="px-4 py-2.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">Status</th>
                  <th className="px-4 py-2.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">Paid</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {recentClients.map((client) => (
                  <tr key={client.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3">
                      <div>
                        <p className="font-medium text-gray-800">{client.name}</p>
                        <p className="text-xs text-gray-400">{client.phone}</p>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{client.package}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                          client.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : client.status === "Expired"
                            ? "bg-red-100 text-red-600"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {client.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-semibold text-gray-800">{client.paid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Payments */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <h3 className="font-semibold text-gray-800">Recent Payments</h3>
            <a href="/report/payments" className="text-xs text-blue-600 hover:text-blue-700 font-medium">
              View All →
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-4 py-2.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">Client</th>
                  <th className="px-4 py-2.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">Amount</th>
                  <th className="px-4 py-2.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">Method</th>
                  <th className="px-4 py-2.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {recentPayments.map((payment) => (
                  <tr key={payment.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3">
                      <div>
                        <p className="font-medium text-gray-800">{payment.client}</p>
                        <p className="text-xs text-gray-400">{payment.date}</p>
                      </div>
                    </td>
                    <td className="px-4 py-3 font-bold text-green-700">{payment.amount}</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700">
                        {payment.method}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                          payment.status === "Success"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {payment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
