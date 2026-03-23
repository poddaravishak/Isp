import MainLayout from "@/components/MainLayout";

export default function AddNewUser() {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-xl font-bold text-gray-800">Add New Client</h1>
          <p className="text-gray-500 text-sm mt-1">Register a new ISP client</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
            <h2 className="font-semibold text-gray-700">Client Information</h2>
          </div>

          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Personal Info */}
            <div className="md:col-span-2">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Personal Details</h3>
            </div>
            <FormField label="Full Name" placeholder="Enter full name" required />
            <FormField label="Father's Name" placeholder="Enter father's name" />
            <FormField label="Phone Number" placeholder="01XXXXXXXXX" required type="tel" />
            <FormField label="Alternate Phone" placeholder="01XXXXXXXXX" type="tel" />
            <FormField label="National ID" placeholder="NID number" />
            <FormField label="Date of Birth" type="date" />

            {/* Address */}
            <div className="md:col-span-2 pt-2">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Address Details</h3>
            </div>
            <FormField label="House/Road" placeholder="House no, road no" />
            <FormField label="Area" placeholder="Area/Para" />
            <FormSelect label="Zone" options={["Zone A", "Zone B", "Zone C", "Zone D"]} />
            <FormSelect label="Sub Zone" options={["Sub Zone 1", "Sub Zone 2", "Sub Zone 3"]} />
            <FormField label="City" placeholder="City" />
            <FormField label="Upazila" placeholder="Upazila" />

            {/* Connection Details */}
            <div className="md:col-span-2 pt-2">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Connection Details</h3>
            </div>
            <FormSelect label="Package" options={["5 Mbps - ৳400", "10 Mbps - ৳600", "20 Mbps - ৳1,000", "50 Mbps - ৳2,000", "100 Mbps - ৳3,500"]} required />
            <FormSelect label="Connection Type" options={["Fiber", "Wireless", "Cable", "VDSL"]} />
            <FormField label="IP Address" placeholder="192.168.x.x" />
            <FormField label="MAC Address" placeholder="XX:XX:XX:XX:XX:XX" />
            <FormField label="Username" placeholder="Client username" required />
            <FormField label="Password" type="password" placeholder="••••••••" required />
            <FormSelect label="POP/Reseller" options={["Main POP", "Reseller A", "Reseller B"]} />
            <FormField label="Install Date" type="date" />

            {/* Submit */}
            <div className="md:col-span-2 flex items-center gap-3 pt-4 border-t border-gray-100">
              <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold shadow-sm">
                Add Client
              </button>
              <button className="px-6 py-2.5 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

function FormField({ label, placeholder, required, type = "text" }: {
  label: string; placeholder?: string; required?: boolean; type?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
}

function FormSelect({ label, options, required }: { label: string; options: string[]; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
        <option value="">Select {label}</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
