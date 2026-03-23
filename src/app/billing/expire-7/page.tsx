import GenericPage from "@/components/GenericPage";
const data = [
  { id: "C051", name: "Masum Billah", phone: "01711-777001", package: "10 Mbps", expire: "2026-03-28", days: "5 days", zone: "Zone A", amount: "৳600" },
  { id: "C062", name: "Shilpi Roy", phone: "01812-777002", package: "20 Mbps", expire: "2026-03-29", days: "6 days", zone: "Zone B", amount: "৳1,000" },
  { id: "C073", name: "Kamal Uddin", phone: "01913-777003", package: "5 Mbps", expire: "2026-03-30", days: "7 days", zone: "Zone C", amount: "৳400" },
];
export default function ExpireIn7Days() {
  return (
    <GenericPage title="Expire In 7 Days" subtitle="Accounts expiring within 7 days"
      stats={[{label:"Expiring In 7 Days",value:"213",color:"text-orange-600"},{label:"Expected Revenue",value:"৳1,28,000",color:"text-green-600"},{label:"Collected",value:"৳45,200",color:"text-blue-600"},{label:"Remaining",value:"৳82,800",color:"text-red-500"}]}
      columns={[{key:"id",label:"ID"},{key:"name",label:"Client"},{key:"phone",label:"Phone"},{key:"package",label:"Package"},{key:"expire",label:"Expire Date"},{key:"days",label:"Days Left"},{key:"zone",label:"Zone"},{key:"amount",label:"Amount"}]}
      addLabel="Bulk SMS" data={data} />
  );
}
