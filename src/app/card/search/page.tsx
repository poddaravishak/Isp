"use client";
import GenericPage from "@/components/GenericPage";
const badge = (val: unknown) => { const s = String(val); return <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${s==="Active"?"bg-green-100 text-green-700":"bg-red-100 text-red-600"}`}>{s}</span>; };
const data = [{id:"HS001234",package:"1 Hour",price:"৳20",batch:"B001",created:"2026-03-20",server:"MK-01",status:"Active"},{id:"HS001235",package:"1 Day",price:"৳80",batch:"B001",created:"2026-03-20",server:"MK-01",status:"Used"}];
export default function CardSearch() {
  return <GenericPage title="Card Search" subtitle="Search hotspot voucher cards" columns={[{key:"id",label:"Card ID"},{key:"package",label:"Package"},{key:"price",label:"Price"},{key:"batch",label:"Batch"},{key:"created",label:"Created"},{key:"server",label:"Server"},{key:"status",label:"Status",render:badge}]} data={data} />;
}
