import MainLayout from "@/components/MainLayout";
export default function SMSRecharge() {
  return (
    <MainLayout>
      <div className="max-w-lg mx-auto">
        <div className="mb-6"><h1 className="text-xl font-bold text-gray-800">SMS Recharge</h1><p className="text-gray-500 text-sm mt-1">Top up your SMS balance</p></div>
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[{l:"Current Balance",v:"4,850 SMS",c:"text-blue-600"},{l:"Used This Month",v:"2,341",c:"text-gray-800"},{l:"Validity",v:"Dec 2026",c:"text-green-600"}].map(s=>(
            <div key={s.l} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center"><p className="text-xs text-gray-500">{s.l}</p><p className={`text-lg font-bold mt-1 ${s.c}`}>{s.v}</p></div>
          ))}
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-semibold text-gray-700 mb-4">Recharge Package</h3>
          <div className="grid grid-cols-2 gap-3 mb-5">
            {[{s:"1,000 SMS",p:"৳200"},{s:"5,000 SMS",p:"৳900"},{s:"10,000 SMS",p:"৳1,700"},{s:"50,000 SMS",p:"৳8,000"}].map(pkg=>(
              <label key={pkg.s} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg cursor-pointer hover:border-blue-400">
                <div className="flex items-center gap-2"><input type="radio" name="pkg" className="accent-blue-600"/><span className="text-sm font-medium text-gray-700">{pkg.s}</span></div>
                <span className="text-sm font-bold text-blue-600">{pkg.p}</span>
              </label>
            ))}
          </div>
          <button className="w-full py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-semibold">Proceed to Payment</button>
        </div>
      </div>
    </MainLayout>
  );
}
