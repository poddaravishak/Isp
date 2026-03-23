import GenericPage from "@/components/GenericPage";
const data = [
  { id: "C021", name: "Rafiqul Islam", phone: "01711-111111", package: "10 Mbps", amount: "৳600", method: "bKash", time: "09:15 AM", collector: "Admin" },
  { id: "C034", name: "Shahida Khatun", phone: "01812-222222", package: "5 Mbps", amount: "৳400", method: "Cash", time: "10:30 AM", collector: "Collector A" },
  { id: "C056", name: "Milon Chandra", phone: "01913-333333", package: "20 Mbps", amount: "৳1,000", method: "Nagad", time: "11:45 AM", collector: "Admin" },
  { id: "C078", name: "Ferdous Ahmed", phone: "01614-444444", package: "50 Mbps", amount: "৳2,500", method: "bKash", time: "01:00 PM", collector: "Collector B" },
];
export default function TodaysClient() {
  return (
    <GenericPage title="Today's Clients" subtitle="Payments collected today - 23 March 2026"
      stats={[{label:"Collected Today",value:"42",color:"text-blue-600"},{label:"Total Amount",value:"৳1,24,500",color:"text-green-600"},{label:"bKash",value:"৳68,200",color:"text-pink-600"},{label:"Cash",value:"৳56,300",color:"text-orange-600"}]}
      columns={[{key:"id",label:"ID"},{key:"name",label:"Client"},{key:"phone",label:"Phone"},{key:"package",label:"Package"},{key:"amount",label:"Amount"},{key:"method",label:"Method"},{key:"time",label:"Time"},{key:"collector",label:"Collector"}]}
      data={data} />
  );
}
