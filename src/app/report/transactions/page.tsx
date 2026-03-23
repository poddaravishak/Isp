"use client";
import GenericPage from "@/components/GenericPage";
const data = [{txn:"TXN-HS001",client:"Portal User",amount:"৳80",gateway:"bKash",ref:"BKH123456",date:"2026-03-23 09:15",status:"Success"},{txn:"TXN-HS002",client:"Portal User",amount:"৳300",gateway:"Nagad",ref:"NAG234567",date:"2026-03-23 09:30",status:"Success"}];
const badge = (val: unknown) => { const s = String(val); return <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${s==="Success"?"bg-green-100 text-green-700":"bg-yellow-100 text-yellow-700"}`}>{s}</span>; };
export default function OnlineTransactions() {
  return <GenericPage title="Online Transactions" subtitle="Online payment gateway transactions" columns={[{key:"txn",label:"Txn ID"},{key:"client",label:"Client"},{key:"amount",label:"Amount"},{key:"gateway",label:"Gateway"},{key:"ref",label:"Reference"},{key:"date",label:"Date & Time"},{key:"status",label:"Status",render:badge}]} data={data} />;
}
