import MainLayout from "@/components/MainLayout";
import { FileSpreadsheet, Download } from "lucide-react";
export default function CardGeneratorExcel() {
  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6"><h1 className="text-xl font-bold text-gray-800">Card Generator Excel</h1><p className="text-gray-500 text-sm mt-1">Generate and export cards to Excel</p></div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="grid grid-cols-2 gap-4 mb-6">
            {[{label:"Package",opt:["1 Hour - ৳20","1 Day - ৳80","1 Week - ৳300"]},{label:"Server",opt:["MK-01","MK-02"]}].map(f=>(
              <div key={f.label}><label className="block text-sm font-medium text-gray-700 mb-1.5">{f.label}</label><select className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm">{f.opt.map(o=><option key={o}>{o}</option>)}</select></div>
            ))}
            <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Quantity</label><input type="number" defaultValue="50" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm" /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Format</label><select className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm"><option>.xlsx</option><option>.csv</option></select></div>
          </div>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-semibold">
            <FileSpreadsheet className="w-4 h-4" /><Download className="w-4 h-4" />Generate & Export Excel
          </button>
        </div>
      </div>
    </MainLayout>
  );
}
