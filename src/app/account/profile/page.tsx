import MainLayout from "@/components/MainLayout";

export default function MyAccount() {
  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h1 className="text-xl font-bold text-gray-800">My Account</h1>
          <p className="text-gray-500 text-sm mt-1">Manage your admin profile</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">A</div>
            <h2 className="font-bold text-gray-800 text-lg">Admin User</h2>
            <p className="text-gray-500 text-sm">Super Administrator</p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-400">Last Login</p>
              <p className="text-sm text-gray-600 font-medium">23 Mar 2026, 09:15 AM</p>
            </div>
            <div className="mt-3">
              <p className="text-xs text-gray-400">Account Created</p>
              <p className="text-sm text-gray-600 font-medium">01 Jan 2024</p>
            </div>
            <button className="mt-4 w-full px-4 py-2 text-sm border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors">Change Photo</button>
          </div>

          {/* Profile Form */}
          <div className="md:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-700 mb-5">Profile Information</h3>
            <div className="space-y-4">
              {[
                { label: "Full Name", value: "Admin User" },
                { label: "Username", value: "admin" },
                { label: "Email", value: "admin@ispmanager.com", type: "email" },
                { label: "Phone", value: "01711-000001", type: "tel" },
              ].map((f) => (
                <div key={f.label}>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">{f.label}</label>
                  <input type={f.type||"text"} defaultValue={f.value} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Role</label>
                <input type="text" value="Super Administrator" readOnly className="w-full px-3 py-2.5 border border-gray-100 rounded-lg text-sm text-gray-500 bg-gray-50" />
              </div>
              <div className="flex gap-3 pt-2">
                <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold">Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
