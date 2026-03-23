import GenericPage from "@/components/GenericPage";
const data = [
  { id: "C011", name: "Belal Hossain", phone: "01711-999001", package: "10 Mbps", expire: "2026-03-24", days: "1 day", zone: "Zone A", amount: "৳600" },
  { id: "C022", name: "Ripa Akter", phone: "01812-999002", package: "5 Mbps", expire: "2026-03-25", days: "2 days", zone: "Zone B", amount: "৳400" },
  { id: "C033", name: "Habib Rahman", phone: "01913-999003", package: "20 Mbps", expire: "2026-03-26", days: "3 days", zone: "Zone C", amount: "৳1,000" },
  { id: "C044", name: "Rina Chowdhury", phone: "01614-999004", package: "10 Mbps", expire: "2026-03-24", days: "1 day", zone: "Zone A", amount: "৳600" },
];
export default function ExpireIn3Days() {
  return (
    <GenericPage title="Expire In 3 Days" subtitle="Accounts expiring within 3 days - Requires immediate action"
      stats={[{label:"Expiring",value:"87",color:"text-red-600"},{label:"Today",value:"28",color:"text-red-700"},{label:"Tomorrow",value:"34",color:"text-orange-600"},{label:"In 3 Days",value:"25",color:"text-yellow-600"}]}
      columns={[{key:"id",label:"ID"},{key:"name",label:"Client"},{key:"phone",label:"Phone"},{key:"package",label:"Package"},{key:"expire",label:"Expire Date"},{key:"days",label:"Remaining"},{key:"zone",label:"Zone"},{key:"amount",label:"Due Amount"}]}
      addLabel="Send SMS Reminder" data={data} />
  );
}
