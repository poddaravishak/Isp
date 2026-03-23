import MainLayout from "@/components/MainLayout";
export default function AddUser() {
  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6"><h1 className="text-xl font-bold text-gray-800">Add User</h1><p className="text-gray-500 text-sm mt-1">Create a new system user account</p></div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[{l:"Full Name",r:true},{l:"Username",r:true},{l:"Email",t:"email"},{l:"Phone",t:"tel"},{l:"Password",t:"password",r:true},{l:"Confirm Password",t:"password",r:true}].map(f=>(
              <div key={f.l}><label className="block text-sm font-medium text-gray-700 mb-1.5">{f.l} {f.r&&<span className="text-red-500">*</span>}</label><input type={f.t||"text"} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" /></div>
            ))}
            {[{l:"Role",o:["Super Admin","Admin","Manager","Collector","Technician","Reseller","View Only"]},{l:"Zone Access",o:["All Zones","Zone A","Zone B","Zone C"]}].map(f=>(
              <div key={f.l}><label className="block text-sm font-medium text-gray-700 mb-1.5">{f.l}</label><select className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"><option>Select {f.l}</option>{f.o.map(o=><option key={o}>{o}</option>)}</select></div>
            ))}
            <div className="md:col-span-2 flex gap-3 pt-2 border-t border-gray-100">
              <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-semibold">Create User</button>
              <button className="px-6 py-2.5 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 text-sm">Reset</button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
