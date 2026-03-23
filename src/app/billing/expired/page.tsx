import GenericPage from "@/components/GenericPage";
const data = [
  { id: "C003", name: "Salma Begum", phone: "01913-456789", package: "5 Mbps", expired: "2026-03-20", days: "3 days ago", zone: "Zone C", amount: "৳400" },
  { id: "C009", name: "Salam Mia", phone: "01614-456321", package: "10 Mbps", expired: "2026-03-18", days: "5 days ago", zone: "Zone B", amount: "৳600" },
  { id: "C018", name: "Rehana Parvin", phone: "01715-654321", package: "20 Mbps", expired: "2026-03-15", days: "8 days ago", zone: "Zone A", amount: "৳1,000" },
];
export default function ExpiredAccounts() {
  return (
    <GenericPage title="Expired Accounts" subtitle="Accounts that have passed their expiry date"
      stats={[{label:"Total Expired",value:"421",color:"text-red-600"},{label:"This Month",value:"87",color:"text-orange-600"},{label:"Due Amount",value:"৳2,52,600",color:"text-red-700"},{label:"Recoverable",value:"৳1,80,000",color:"text-green-600"}]}
      columns={[{key:"id",label:"ID"},{key:"name",label:"Client"},{key:"phone",label:"Phone"},{key:"package",label:"Package"},{key:"expired",label:"Expired On"},{key:"days",label:"Overdue"},{key:"zone",label:"Zone"},{key:"amount",label:"Due Amount"}]}
      addLabel="Renew Selected" data={data} />
  );
}
