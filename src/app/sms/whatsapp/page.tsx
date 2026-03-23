import MainLayout from "@/components/MainLayout";
export default function WhatsAppAPI() {
  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6"><h1 className="text-xl font-bold text-gray-800">WhatsApp API</h1><p className="text-gray-500 text-sm mt-1">Configure WhatsApp Business API integration</p></div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="space-y-4">
            {[{l:"API Key",p:"Enter your WhatsApp API key",t:"password"},{l:"Business Phone Number",p:"e.g. +8801711000001",t:"tel"},{l:"Instance ID",p:"WhatsApp instance ID"},{l:"Webhook URL",p:"https://your-domain.com/webhook"}].map(f=>(
              <div key={f.l}><label className="block text-sm font-medium text-gray-700 mb-1.5">{f.l}</label><input type={f.t||"text"} placeholder={f.p} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" /></div>
            ))}
            <div className="flex gap-3 pt-2 border-t border-gray-100">
              <button className="px-6 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm font-semibold">Save & Test Connection</button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
