"use client";
import GenericPage from "@/components/GenericPage";
const badge = (val: unknown) => <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${String(val)==="Online"?"bg-green-100 text-green-700":"bg-red-100 text-red-600"}`}>{String(val)}</span>;
const data = [{id:"OLT001",name:"Main OLT",ip:"10.10.1.1",type:"GPON",ports:"16",active:"12",location:"Main Hub",vendor:"Huawei",status:"Online"},{id:"OLT002",name:"Branch OLT",ip:"10.10.2.1",type:"EPON",ports:"8",active:"6",location:"Zone B Hub",vendor:"ZTE",status:"Online"}];
export default function OLTSetup() {
  return <GenericPage title="OLT Setup" subtitle="Optical Line Terminal configuration" addLabel="Add OLT" columns={[{key:"id",label:"ID"},{key:"name",label:"Name"},{key:"ip",label:"IP"},{key:"type",label:"Type"},{key:"ports",label:"Ports"},{key:"active",label:"Active"},{key:"location",label:"Location"},{key:"vendor",label:"Vendor"},{key:"status",label:"Status",render:badge}]} data={data} />;
}
