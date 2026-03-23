import GenericPage from "@/components/GenericPage";
const data = [
  { id: "C001", name: "Rahim Uddin", phone: "01711-234567", package: "10 Mbps", expire: "2026-04-23", days: "31 days", zone: "Zone A", pop: "Main POP" },
  { id: "C002", name: "Karim Ahmed", phone: "01812-345678", package: "20 Mbps", expire: "2026-04-15", days: "23 days", zone: "Zone B", pop: "Reseller A" },
  { id: "C004", name: "Jamal Hossain", phone: "01614-567890", package: "50 Mbps", expire: "2026-05-01", days: "39 days", zone: "Zone A", pop: "Main POP" },
  { id: "C006", name: "Rubel Islam", phone: "01916-789012", package: "20 Mbps", expire: "2026-04-30", days: "38 days", zone: "Zone D", pop: "Reseller B" },
];
export default function ActiveAccounts() {
  return <GenericPage title="Active Accounts" subtitle="All currently active client accounts" stats={[{label:"Active",value:"7,891",color:"text-green-600"},{label:"This Month",value:"+324",color:"text-blue-600"},{label:"Revenue",value:"৳47.3L",color:"text-purple-600"},{label:"Avg Days Left",value:"18.4",color:"text-orange-600"}]} columns={[{key:"id",label:"ID"},{key:"name",label:"Client"},{key:"phone",label:"Phone"},{key:"package",label:"Package"},{key:"expire",label:"Expire Date"},{key:"days",label:"Days Left"},{key:"zone",label:"Zone"},{key:"pop",label:"POP"}]} data={data} />;
}
