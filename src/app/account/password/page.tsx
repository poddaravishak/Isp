import MainLayout from "@/components/MainLayout";
import { Lock, ShieldCheck } from "lucide-react";

export default function PasswordChange() {
  return (
    <MainLayout>
      <div className="max-w-md mx-auto">
        <div className="mb-6">
          <h1 className="text-xl font-bold text-gray-800">Change Password</h1>
          <p className="text-gray-500 text-sm mt-1">Update your account password</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center gap-3 mb-6 p-3 bg-blue-50 rounded-lg">
            <ShieldCheck className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <p className="text-sm text-blue-700">Use a strong password with at least 8 characters</p>
          </div>
          <div className="space-y-4">
            {[
              { label: "Current Password", id: "current" },
              { label: "New Password", id: "new" },
              { label: "Confirm New Password", id: "confirm" },
            ].map((f) => (
              <div key={f.id}>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">{f.label}</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input type="password" placeholder="••••••••" className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
            ))}
            <div className="pt-2">
              <p className="text-xs text-gray-500 mb-3">Password requirements:</p>
              {["At least 8 characters","Contains uppercase letters","Contains numbers","Contains special characters"].map(r=>(
                <div key={r} className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                  {r}
                </div>
              ))}
            </div>
            <button className="w-full py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold mt-2">
              Update Password
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
