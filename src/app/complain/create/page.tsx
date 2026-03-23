import MainLayout from "@/components/MainLayout";

export default function CreateTicket() {
  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <h1 className="text-xl font-bold text-gray-800">Create Support Ticket</h1>
          <p className="text-gray-500 text-sm mt-1">Log a new customer complaint or support request</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Client <span className="text-red-500">*</span></label>
              <input type="text" placeholder="Search client by name or phone..." className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Issue Type <span className="text-red-500">*</span></label>
              <select className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>-- Select Type --</option>
                <option>No Internet</option>
                <option>Slow Speed</option>
                <option>Billing Issue</option>
                <option>Connection Drop</option>
                <option>Hardware Problem</option>
                <option>WiFi Issue</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Priority</label>
              <select className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Critical</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Assigned To</label>
              <select className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>-- Auto Assign --</option>
                <option>Tech Team A</option>
                <option>Tech Team B</option>
                <option>Field Engineer 1</option>
                <option>Field Engineer 2</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Expected Resolution</label>
              <input type="datetime-local" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Description <span className="text-red-500">*</span></label>
              <textarea rows={4} placeholder="Describe the issue in detail..." className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
            </div>
            <div className="md:col-span-2 flex items-center gap-3 pt-2">
              <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold">
                Create Ticket
              </button>
              <button className="px-6 py-2.5 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
