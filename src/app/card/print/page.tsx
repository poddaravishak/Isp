import MainLayout from "@/components/MainLayout";
import { Printer } from "lucide-react";
const cards = Array.from({length:6},(_,i)=>({u:`HS00${1000+i}`,p:`pass${100+i}`,pkg:"1 Day",price:"৳80"}));
export default function CardPrint() {
  return (
    <MainLayout>
      <div className="mb-6 flex items-center justify-between"><div><h1 className="text-xl font-bold text-gray-800">Card Print</h1><p className="text-gray-500 text-sm mt-1">Print hotspot voucher cards</p></div><button className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-semibold"><Printer className="w-4 h-4"/>Print All</button></div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cards.map(c=>(
          <div key={c.u} className="bg-white border-2 border-dashed border-gray-200 rounded-xl p-4 text-center hover:border-blue-400 transition-colors">
            <div className="text-xs text-gray-400 mb-2">NetBangla ISP</div>
            <div className="text-sm font-bold text-blue-600 mb-1">{c.pkg}</div>
            <div className="text-xs text-gray-500 mb-3">{c.price}</div>
            <div className="bg-gray-50 rounded-lg p-2 mb-2"><div className="text-xs text-gray-500">Username</div><div className="font-mono text-sm font-bold text-gray-800">{c.u}</div></div>
            <div className="bg-gray-50 rounded-lg p-2"><div className="text-xs text-gray-500">Password</div><div className="font-mono text-sm font-bold text-gray-800">{c.p}</div></div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
