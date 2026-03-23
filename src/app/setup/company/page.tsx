import MainLayout from "@/components/MainLayout";

export default function CompanyInfo() {
  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h1 className="text-xl font-bold text-gray-800">Company Information</h1>
          <p className="text-gray-500 text-sm mt-1">Manage your ISP company details</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          {/* Logo */}
          <div className="flex items-center gap-6 mb-6 pb-6 border-b border-gray-100">
            <div className="w-20 h-20 bg-blue-100 rounded-xl flex items-center justify-center">
              <span className="text-3xl font-bold text-blue-600">IS</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Company Logo</p>
              <button className="px-4 py-2 text-sm border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors">Upload Logo</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { label: "Company Name", placeholder: "ISP Company Ltd.", defaultValue: "NetBangla ISP" },
              { label: "Trade License No.", placeholder: "TL-XXXX-XXXX" },
              { label: "BTRC License No.", placeholder: "BTRC-XXXX" },
              { label: "VAT/TIN Number", placeholder: "VAT Registration" },
              { label: "Phone", placeholder: "01XXXXXXXXX", type: "tel", defaultValue: "01711-000001" },
              { label: "Email", placeholder: "info@company.com", type: "email" },
              { label: "Website", placeholder: "www.company.com" },
              { label: "City", placeholder: "Dhaka", defaultValue: "Dhaka" },
            ].map((f) => (
              <div key={f.label}>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">{f.label}</label>
                <input type={f.type||"text"} placeholder={f.placeholder} defaultValue={f.defaultValue} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            ))}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Address</label>
              <textarea rows={2} defaultValue="House 12, Road 5, Sector 10, Uttara, Dhaka-1230" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
            </div>
            <div className="md:col-span-2 flex gap-3 pt-2 border-t border-gray-100">
              <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
