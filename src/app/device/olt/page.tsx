"use client";
import GenericPage from "@/components/GenericPage";
const badge = (val: unknown) => <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${String(val)==="Online"?"bg-green-100 text-green-700":"bg-red-100 text-red-600"}`}>{String(val)}</span>;
const data = [{id:"OLT001",model:"Huawei MA5608T",ip:"10.10.1.1",location:"Main Hub",ports:"16",onu:"128",active:"112",uptime:"125d 6h",status:"Online"},{id:"OLT002",model:"ZTE C320",ip:"10.10.2.1",location:"Zone B Hub",ports:"8",onu:"64",active:"58",uptime:"98d 14h",status:"Online"}];
export default function OLTList() {
  return <GenericPage title="OLT List" subtitle="All OLT devices" addLabel="Add OLT" columns={[{key:"id",label:"ID"},{key:"model",label:"Model"},{key:"ip",label:"IP"},{key:"location",label:"Location"},{key:"ports",label:"Ports"},{key:"onu",label:"Total ONU"},{key:"active",label:"Active ONU"},{key:"uptime",label:"Uptime"},{key:"status",label:"Status",render:badge}]} data={data} />;
}
