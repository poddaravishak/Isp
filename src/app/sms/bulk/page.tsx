import MainLayout from "@/components/MainLayout";

export default function BulkMessage() {
  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h1 className="text-xl font-bold text-gray-800">Bulk Message</h1>
          <p className="text-gray-500 text-sm mt-1">Send SMS/WhatsApp to multiple clients</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[{label:"SMS Balance",value:"4,850",color:"text-blue-600"},{label:"Sent Today",value:"342",color:"text-green-600"},{label:"Failed",value:"12",color:"text-red-500"}].map(s=>(
            <div key={s.label} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <p className="text-xs text-gray-500">{s.label}</p>
              <p className={`text-2xl font-bold mt-1 ${s.color}`}>{s.value}</p>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Send To</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {["All Clients","Active Only","Expired","Expire in 3 Days","Expire in 7 Days","Suspended","Custom"].map(opt=>(
                  <label key={opt} className="flex items-center gap-2 p-2.5 border border-gray-200 rounded-lg cursor-pointer hover:border-blue-400 text-sm text-gray-600">
                    <input type="radio" name="sendTo" className="accent-blue-600" />
                    {opt}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Channel</label>
              <div className="flex gap-3">
                {["SMS","WhatsApp","Both"].map(c=>(
                  <label key={c} className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg cursor-pointer hover:border-blue-400 text-sm text-gray-600">
                    <input type="radio" name="channel" className="accent-blue-600" />
                    {c}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Template</label>
              <select className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>-- Select Template --</option>
                <option>Renewal Reminder</option>
                <option>Payment Received</option>
                <option>Service Disruption</option>
                <option>Offer Announcement</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Message <span className="text-gray-400 font-normal">(160 chars = 1 SMS)</span>
              </label>
              <textarea
                rows={4}
                placeholder="Type your message here... Use {name}, {expire}, {package} as variables"
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
              <div className="flex justify-between mt-1">
                <span className="text-xs text-gray-400">0/160 characters</span>
                <span className="text-xs text-gray-400">1 SMS</span>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold">
                Send Now
              </button>
              <button className="px-6 py-2.5 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                Schedule
              </button>
              <button className="px-6 py-2.5 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                Preview
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
