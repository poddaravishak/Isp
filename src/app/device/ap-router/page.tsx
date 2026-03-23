"use client";
import GenericPage from "@/components/GenericPage";
const badge = (val: unknown) => <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${String(val)==="Online"?"bg-green-100 text-green-700":String(val)==="Offline"?"bg-red-100 text-red-600":"bg-yellow-100 text-yellow-700"}`}>{String(val)}</span>;
const data = [{id:"AP001",model:"Ubiquiti UniFi AC Pro",ip:"10.20.1.1",location:"Main Area",ssid:"NetBangla-5G",clients:"45",freq:"5 GHz",status:"Online"},{id:"AP002",model:"MikroTik cAP ac",ip:"10.20.1.2",location:"Zone B",ssid:"NetBangla-2G",clients:"32",freq:"2.4 GHz",status:"Online"},{id:"AP003",model:"TP-Link EAP225",ip:"10.20.1.3",location:"Zone C",ssid:"NetBangla-HS",clients:"67",freq:"Both",status:"Warning"}];
export default function APRouterList() {
  return <GenericPage title="AP Router List" subtitle="All access point and router devices" addLabel="Add AP Router" columns={[{key:"id",label:"ID"},{key:"model",label:"Model"},{key:"ip",label:"IP"},{key:"location",label:"Location"},{key:"ssid",label:"SSID"},{key:"clients",label:"Clients"},{key:"freq",label:"Frequency"},{key:"status",label:"Status",render:badge}]} data={data} />;
}
