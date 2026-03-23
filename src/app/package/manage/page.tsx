import MainLayout from "@/components/MainLayout";
export default function PackageManage() {
  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6"><h1 className="text-xl font-bold text-gray-800">Package Management</h1><p className="text-gray-500 text-sm mt-1">Create and edit internet packages</p></div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[{l:"Package Name",p:"e.g. Standard",r:true},{l:"Download Speed",p:"e.g. 10",r:true},{l:"Upload Speed",p:"e.g. 5"},{l:"Price (৳/Month)",p:"e.g. 600",r:true},{l:"Validity (Days)",p:"30"},{l:"Burst Download",p:"e.g. 15"}].map(f=>(
              <div key={f.l}><label className="block text-sm font-medium text-gray-700 mb-1.5">{f.l} {f.r&&<span className="text-red-500">*</span>}</label><input placeholder={f.p} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" /></div>
            ))}
            {[{l:"Type",o:["PPPoE","Hotspot","Static"]},{l:"Server",o:["MK-01","MK-02"]},{l:"Profile Name",o:["pppoe-10m","pppoe-20m"]}].map(f=>(
              <div key={f.l}><label className="block text-sm font-medium text-gray-700 mb-1.5">{f.l}</label><select className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">{f.o.map(o=><option key={o}>{o}</option>)}</select></div>
            ))}
            <div className="md:col-span-2 flex gap-3 pt-2 border-t border-gray-100">
              <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-semibold">Save Package</button>
              <button className="px-6 py-2.5 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 text-sm">Reset</button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
