import MainLayout from "@/components/MainLayout";

export default function HotspotDashboard() {
  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-xl font-bold text-gray-800">Hotspot Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">WiFi Hotspot management overview</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Active Sessions", value: "342", color: "bg-green-600", sub: "+12 in last hour" },
          { label: "Total Cards", value: "5,200", color: "bg-blue-600", sub: "1,840 used" },
          { label: "Revenue Today", value: "৳18,400", color: "bg-purple-600", sub: "234 cards sold" },
          { label: "Active APs", value: "28", color: "bg-orange-500", sub: "2 offline" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className={`${s.color} w-10 h-10 rounded-lg mb-3 flex items-center justify-center`}>
              <div className="w-4 h-4 bg-white/30 rounded" />
            </div>
            <p className="text-2xl font-bold text-gray-800">{s.value}</p>
            <p className="text-sm text-gray-500 mt-0.5">{s.label}</p>
            <p className="text-xs text-gray-400 mt-1">{s.sub}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <h3 className="font-semibold text-gray-800 mb-4">Active Sessions by Location</h3>
          {[
            { name: "Dhaka Main Hub", sessions: 142, max: 200 },
            { name: "Chittagong Branch", sessions: 89, max: 150 },
            { name: "Sylhet Point", sessions: 67, max: 100 },
            { name: "Rajshahi AP", sessions: 44, max: 80 },
          ].map((loc) => (
            <div key={loc.name} className="mb-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">{loc.name}</span>
                <span className="text-sm font-semibold text-gray-800">{loc.sessions}/{loc.max}</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${(loc.sessions / loc.max) * 100}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <h3 className="font-semibold text-gray-800 mb-4">Recent Card Sales</h3>
          <table className="w-full text-sm">
            <thead><tr className="bg-gray-50"><th className="px-3 py-2 text-left text-xs text-gray-500">Card</th><th className="px-3 py-2 text-left text-xs text-gray-500">Package</th><th className="px-3 py-2 text-left text-xs text-gray-500">Time</th><th className="px-3 py-2 text-left text-xs text-gray-500">Amount</th></tr></thead>
            <tbody className="divide-y divide-gray-50">
              {[{c:"HS001234",p:"1 Hour",t:"09:15 AM",a:"৳20"},{c:"HS001235",p:"1 Day",t:"09:22 AM",a:"৳80"},{c:"HS001236",p:"3 Days",t:"10:05 AM",a:"৳150"},{c:"HS001237",p:"1 Week",t:"10:30 AM",a:"৳300"}].map((r) => (
                <tr key={r.c} className="hover:bg-gray-50"><td className="px-3 py-2.5 font-mono text-xs text-blue-600">{r.c}</td><td className="px-3 py-2.5 text-gray-700">{r.p}</td><td className="px-3 py-2.5 text-gray-500">{r.t}</td><td className="px-3 py-2.5 font-semibold text-green-700">{r.a}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
}
