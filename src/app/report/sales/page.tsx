import MainLayout from "@/components/MainLayout";
import { TrendingUp, DollarSign, Users, Package } from "lucide-react";

const monthly = [
  { month: "Oct 2025", revenue: "৳22,40,000", clients: 7980, new: 145, churn: 23 },
  { month: "Nov 2025", revenue: "৳23,80,000", clients: 8102, new: 167, churn: 45 },
  { month: "Dec 2025", revenue: "৳24,50,000", clients: 8224, new: 154, churn: 32 },
  { month: "Jan 2026", revenue: "৳25,10,000", clients: 8346, new: 178, churn: 56 },
  { month: "Feb 2026", revenue: "৳26,80,000", clients: 8432, new: 134, churn: 48 },
  { month: "Mar 2026", revenue: "৳28,45,000", clients: 8532, new: 148, churn: 48 },
];

export default function SalesReport() {
  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-xl font-bold text-gray-800">Sales Report</h1>
        <p className="text-gray-500 text-sm mt-1">Monthly sales performance overview</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: "This Month Revenue", value: "৳28,45,000", icon: DollarSign, color: "bg-green-600", change: "+6.1%" },
          { label: "Total Clients", value: "8,532", icon: Users, color: "bg-blue-600", change: "+148" },
          { label: "New This Month", value: "148", icon: TrendingUp, color: "bg-purple-600", change: "+10.4%" },
          { label: "Active Packages", value: "12", icon: Package, color: "bg-orange-500", change: "Stable" },
        ].map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <div className={`${s.color} w-9 h-9 rounded-lg flex items-center justify-center`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs font-semibold text-green-600">{s.change}</span>
              </div>
              <p className="text-lg font-bold text-gray-800">{s.value}</p>
              <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
            </div>
          );
        })}
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100">
          <h3 className="font-semibold text-gray-800">Monthly Sales History</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="bg-gray-50 border-b border-gray-100">
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Month</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Revenue</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Total Clients</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">New Clients</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Churn</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Growth</th>
            </tr></thead>
            <tbody className="divide-y divide-gray-50">
              {monthly.map((m, i) => (
                <tr key={m.month} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800">{m.month}</td>
                  <td className="px-4 py-3 font-bold text-green-700">{m.revenue}</td>
                  <td className="px-4 py-3 text-gray-700">{m.clients.toLocaleString()}</td>
                  <td className="px-4 py-3 text-green-600 font-medium">+{m.new}</td>
                  <td className="px-4 py-3 text-red-500">-{m.churn}</td>
                  <td className="px-4 py-3">
                    {i > 0 && (
                      <div className="w-full bg-gray-100 rounded-full h-1.5 w-20">
                        <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: `${Math.min((m.new / 200) * 100, 100)}%` }} />
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
}
