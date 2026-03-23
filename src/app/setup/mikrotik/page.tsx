"use client";
import GenericPage from "@/components/GenericPage";
const badge = (val: unknown) => {
  const s = String(val);
  return <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${s==="Online"?"bg-green-100 text-green-700":s==="Offline"?"bg-red-100 text-red-600":"bg-yellow-100 text-yellow-700"}`}>{s}</span>;
};
const data = [
  { id:"MK001", name:"MK-01 Main Router", ip:"192.168.1.1", port:"8728", user:"admin", zone:"All Zones", clients:"3,421", version:"RouterOS 7.2", status:"Online" },
  { id:"MK002", name:"MK-02 Zone B", ip:"192.168.2.1", port:"8728", user:"admin", zone:"Zone B", clients:"1,245", version:"RouterOS 6.49", status:"Online" },
  { id:"MK003", name:"MK-03 Hotspot", ip:"192.168.3.1", port:"8728", user:"admin", zone:"Hotspot", clients:"342", version:"RouterOS 7.1", status:"Online" },
  { id:"MK004", name:"MK-04 Backup", ip:"192.168.4.1", port:"8728", user:"admin", zone:"Backup", clients:"0", version:"RouterOS 7.2", status:"Offline" },
];
export default function MikrotikSetup() {
  return <GenericPage title="Mikrotik Setup" subtitle="Configure Mikrotik routers"
    addLabel="Add Mikrotik"
    columns={[{key:"id",label:"ID"},{key:"name",label:"Name"},{key:"ip",label:"IP Address"},{key:"port",label:"Port"},{key:"zone",label:"Zone"},{key:"clients",label:"Clients"},{key:"version",label:"Version"},{key:"status",label:"Status",render:badge}]}
    data={data} />;
}
