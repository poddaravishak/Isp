"use client";
import GenericPage from "@/components/GenericPage";
const usedBadge = (val: unknown) => { const s = String(val); return <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${s==="Used"?"bg-red-100 text-red-600":"bg-green-100 text-green-700"}`}>{s}</span>; };
const data = [{username:"HS001234",package:"1 Hour",price:"৳20",created:"2026-03-20",used:"2026-03-20 10:15",server:"MK-01",status:"Used"},{username:"HS001235",package:"1 Day",price:"৳80",created:"2026-03-21",used:"-",server:"MK-01",status:"Active"}];
export default function WiFiCardSearch() {
  return <GenericPage title="WiFi User/Card Search" subtitle="Search hotspot voucher cards" columns={[{key:"username",label:"Username"},{key:"package",label:"Package"},{key:"price",label:"Price"},{key:"created",label:"Created"},{key:"used",label:"Used On"},{key:"server",label:"Server"},{key:"status",label:"Status",render:usedBadge}]} data={data} />;
}
