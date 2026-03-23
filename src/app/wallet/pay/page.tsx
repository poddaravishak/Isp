import MainLayout from "@/components/MainLayout";
export default function WalletPay() {
  return (
    <MainLayout>
      <div className="max-w-lg mx-auto">
        <div className="mb-6"><h1 className="text-xl font-bold text-gray-800">Wallet Pay</h1><p className="text-gray-500 text-sm mt-1">Pay client bills from wallet balance</p></div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-4 text-center">
          <p className="text-sm text-gray-500">Wallet Balance</p>
          <p className="text-4xl font-bold text-blue-600 my-2">৳ 45,200</p>
          <p className="text-xs text-gray-400">Last recharged: 20 Mar 2026</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="space-y-4">
            <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Select Client <span className="text-red-500">*</span></label><input placeholder="Search by name or ID..." className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Amount (৳) <span className="text-red-500">*</span></label><input type="number" placeholder="Enter amount" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Note</label><input placeholder="Optional note" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" /></div>
            <button className="w-full py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-semibold">Pay from Wallet</button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
