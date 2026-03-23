import GenericPage from "@/components/GenericPage";
const data = [
  { id: "C099", name: "Shaheen Alam", phone: "01711-009900", package: "10 Mbps", left: "2026-02-15", reason: "Moved area", zone: "Zone A", due: "৳0" },
  { id: "C112", name: "Ratan Kumar", phone: "01812-112233", package: "5 Mbps", left: "2026-01-30", reason: "Better offer", zone: "Zone C", due: "৳200" },
];
export default function LeftAccounts() {
  return (
    <GenericPage title="Left Accounts" subtitle="Clients who have terminated their service"
      stats={[{label:"Left This Month",value:"34",color:"text-red-600"},{label:"Total Left",value:"189",color:"text-gray-700"},{label:"Due Recovery",value:"৳12,400",color:"text-orange-600"},{label:"Churn Rate",value:"0.4%",color:"text-red-500"}]}
      columns={[{key:"id",label:"ID"},{key:"name",label:"Client"},{key:"phone",label:"Phone"},{key:"package",label:"Package"},{key:"left",label:"Left On"},{key:"reason",label:"Reason"},{key:"zone",label:"Zone"},{key:"due",label:"Due"}]}
      data={data} />
  );
}
