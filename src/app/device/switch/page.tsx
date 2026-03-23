"use client";
import GenericPage from "@/components/GenericPage";
const badge = (val: unknown) => <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${String(val)==="Online"?"bg-green-100 text-green-700":"bg-red-100 text-red-600"}`}>{String(val)}</span>;
const data = [{id:"SW001",model:"TP-Link TL-SG1024D",ip:"192.168.10.1",location:"Main Rack",ports:"24",active:"18",vlan:"Yes",status:"Online"},{id:"SW002",model:"Cisco SG350",ip:"192.168.10.2",location:"Zone B Rack",ports:"48",active:"32",vlan:"Yes",status:"Online"},{id:"SW003",model:"Huawei S2700",ip:"192.168.10.3",location:"Zone C Rack",ports:"24",active:"20",vlan:"No",status:"Online"}];
export default function SwitchList() {
  return <GenericPage title="Switch List" subtitle="All network switch devices" addLabel="Add Switch" columns={[{key:"id",label:"ID"},{key:"model",label:"Model"},{key:"ip",label:"IP"},{key:"location",label:"Location"},{key:"ports",label:"Ports"},{key:"active",label:"Active"},{key:"vlan",label:"VLAN"},{key:"status",label:"Status",render:badge}]} data={data} />;
}
