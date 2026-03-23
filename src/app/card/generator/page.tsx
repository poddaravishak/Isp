import MainLayout from "@/components/MainLayout";

export default function CardGenerator() {
  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <h1 className="text-xl font-bold text-gray-800">Card Generator</h1>
          <p className="text-gray-500 text-sm mt-1">Generate hotspot voucher cards</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Package Type <span className="text-red-500">*</span></label>
              <select className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>1 Hour - ৳20</option>
                <option>3 Hours - ৳50</option>
                <option>1 Day - ৳80</option>
                <option>3 Days - ৳150</option>
                <option>1 Week - ৳300</option>
                <option>1 Month - ৳800</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Number of Cards <span className="text-red-500">*</span></label>
              <input type="number" defaultValue="10" min="1" max="500" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Card Prefix</label>
              <input type="text" placeholder="e.g. HS" defaultValue="HS" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Password Length</label>
              <select className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>6 Characters</option>
                <option>8 Characters</option>
                <option>10 Characters</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Server</label>
              <select className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>MK-01 (Main)</option>
                <option>MK-02 (Backup)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Profile</label>
              <select className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>hotspot-1hour</option>
                <option>hotspot-1day</option>
                <option>hotspot-1week</option>
              </select>
            </div>
          </div>
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-sm text-blue-700">
              <strong>Preview:</strong> 10 cards will be generated for &quot;1 Hour - ৳20&quot; package.
              Total value: <strong>৳200</strong>
            </p>
          </div>
          <div className="flex items-center gap-3 mt-6">
            <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold">
              Generate Cards
            </button>
            <button className="px-6 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-semibold">
              Generate & Print
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
