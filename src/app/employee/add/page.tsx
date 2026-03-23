import MainLayout from "@/components/MainLayout";

export default function AddEmployee() {
  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h1 className="text-xl font-bold text-gray-800">Add Employee</h1>
          <p className="text-gray-500 text-sm mt-1">Register a new staff member</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { label: "Full Name", placeholder: "Employee full name", required: true },
              { label: "Phone", placeholder: "01XXXXXXXXX", required: true, type: "tel" },
              { label: "Email", placeholder: "email@example.com", type: "email" },
              { label: "NID Number", placeholder: "National ID" },
              { label: "Date of Birth", type: "date" },
              { label: "Join Date", type: "date" },
            ].map((f) => (
              <div key={f.label}>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">{f.label} {f.required && <span className="text-red-500">*</span>}</label>
                <input type={f.type||"text"} placeholder={f.placeholder} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            ))}
            {[
              { label: "Department", options: ["Technical", "Support", "Finance", "Sales", "Admin"] },
              { label: "Role", options: ["Network Engineer", "Field Technician", "Customer Service", "Billing Officer", "Sales Officer", "Manager"] },
              { label: "Zone", options: ["Zone A", "Zone B", "Zone C", "Zone D"] },
            ].map((f) => (
              <div key={f.label}>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">{f.label}</label>
                <select className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select {f.label}</option>
                  {f.options.map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
            ))}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Salary (৳)</label>
              <input type="number" placeholder="Monthly salary" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Address</label>
              <textarea rows={2} placeholder="Employee address" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
            </div>
            <div className="md:col-span-2 flex items-center gap-3 pt-2 border-t border-gray-100">
              <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold">Add Employee</button>
              <button className="px-6 py-2.5 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors text-sm">Reset</button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
