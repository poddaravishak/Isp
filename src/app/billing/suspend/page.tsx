import GenericPage from "@/components/GenericPage";
const data = [
  { id: "C005", name: "Nasrin Akter", phone: "01715-678901", package: "10 Mbps", since: "2026-03-10", reason: "Non-payment", zone: "Zone A", due: "৳600" },
  { id: "C027", name: "Habibur Rahman", phone: "01816-789012", package: "20 Mbps", since: "2026-03-05", reason: "Policy Violation", zone: "Zone B", due: "৳2,000" },
];
export default function SuspendAccounts() {
  return (
    <GenericPage title="Suspended Accounts" subtitle="Accounts temporarily suspended"
      stats={[{label:"Suspended",value:"145",color:"text-yellow-600"},{label:"Non-payment",value:"118",color:"text-red-500"},{label:"Policy",value:"27",color:"text-orange-600"},{label:"Due Amount",value:"৳87,000",color:"text-red-600"}]}
      columns={[{key:"id",label:"ID"},{key:"name",label:"Client"},{key:"phone",label:"Phone"},{key:"package",label:"Package"},{key:"since",label:"Suspended On"},{key:"reason",label:"Reason"},{key:"zone",label:"Zone"},{key:"due",label:"Due"}]}
      addLabel="Unsuspend Selected" data={data} />
  );
}
