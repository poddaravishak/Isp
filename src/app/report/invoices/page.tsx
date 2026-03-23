"use client";
import GenericPage from "@/components/GenericPage";
const badge = (val: unknown) => { const s = String(val); return <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${s==="Paid"?"bg-green-100 text-green-700":"bg-red-100 text-red-600"}`}>{s}</span>; };
const data = [{inv:"INV-001",client:"Rahim Uddin",package:"10 Mbps",period:"Mar 2026",amount:"৳600",issued:"2026-03-01",paid:"2026-03-23",status:"Paid"},{inv:"INV-002",client:"Karim Ahmed",package:"20 Mbps",period:"Mar 2026",amount:"৳1,000",issued:"2026-03-01",paid:"-",status:"Unpaid"}];
export default function ClientInvoices() {
  return <GenericPage title="Client Invoices" subtitle="All client billing invoices" columns={[{key:"inv",label:"Invoice #"},{key:"client",label:"Client"},{key:"package",label:"Package"},{key:"period",label:"Period"},{key:"amount",label:"Amount"},{key:"issued",label:"Issued"},{key:"paid",label:"Paid On"},{key:"status",label:"Status",render:badge}]} data={data} addLabel="Generate Invoice" />;
}
