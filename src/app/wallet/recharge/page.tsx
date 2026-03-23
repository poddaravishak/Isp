import MainLayout from "@/components/MainLayout";
export default function WalletRecharge() {
  return (
    <MainLayout>
      <div className="max-w-lg mx-auto">
        <div className="mb-6"><h1 className="text-xl font-bold text-gray-800">Wallet Recharge</h1><p className="text-gray-500 text-sm mt-1">Add funds to your wallet</p></div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="grid grid-cols-3 gap-3 mb-5">
            {["৳5,000","৳10,000","৳25,000","৳50,000","৳1,00,000","Custom"].map(a=>(
              <label key={a} className="flex items-center justify-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:border-blue-400 text-sm font-semibold text-gray-700"><input type="radio" name="amt" className="sr-only"/>{a}</label>
            ))}
          </div>
          <div className="space-y-4">
            <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Payment Method</label>
              <div className="grid grid-cols-3 gap-2">
                {["bKash","Nagad","Rocket","Bank Transfer","Card","Cash"].map(m=>(
                  <label key={m} className="flex items-center gap-2 p-2.5 border border-gray-200 rounded-lg cursor-pointer hover:border-blue-400 text-xs text-gray-600"><input type="radio" name="method" className="accent-blue-600"/>{m}</label>
                ))}
              </div>
            </div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Transaction ID</label><input placeholder="Payment reference/txn ID" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" /></div>
            <button className="w-full py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-semibold">Submit Recharge Request</button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
