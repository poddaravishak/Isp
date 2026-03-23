"use client";
import GenericPage from "@/components/GenericPage";
const data = [
  { txn: "TXN001", client: "Rahim Uddin", phone: "01711-234567", amount: "৳600", method: "bKash", date: "2026-03-23", collector: "Admin", status: "Success" },
  { txn: "TXN002", client: "Karim Ahmed", phone: "01812-345678", amount: "৳1,000", method: "Nagad", date: "2026-03-23", collector: "Admin", status: "Success" },
  { txn: "TXN003", client: "Jamal Hossain", phone: "01614-567890", amount: "৳2,500", method: "Cash", date: "2026-03-23", collector: "Collector A", status: "Success" },
  { txn: "TXN004", client: "Rubel Islam", phone: "01916-789012", amount: "৳1,000", method: "Rocket", date: "2026-03-22", collector: "Collector B", status: "Success" },
  { txn: "TXN005", client: "Monika Das", phone: "01617-890123", amount: "৳600", method: "bKash", date: "2026-03-22", collector: "Admin", status: "Pending" },
];
const badge = (val: unknown) => {
  const s = String(val);
  return <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${s==="Success"?"bg-green-100 text-green-700":"bg-yellow-100 text-yellow-700"}`}>{s}</span>;
};
export default function Payments() {
  return <GenericPage title="Payments" subtitle="All payment transactions"
    stats={[{label:"Today",value:"৳1,24,500",color:"text-green-600"},{label:"This Month",value:"৳28,45,000",color:"text-blue-600"},{label:"bKash",value:"৳12,30,000",color:"text-pink-600"},{label:"Cash",value:"৳8,90,000",color:"text-orange-600"}]}
    columns={[{key:"txn",label:"Txn ID"},{key:"client",label:"Client"},{key:"phone",label:"Phone"},{key:"amount",label:"Amount"},{key:"method",label:"Method"},{key:"date",label:"Date"},{key:"collector",label:"Collector"},{key:"status",label:"Status",render:badge}]}
    data={data} />;
}
