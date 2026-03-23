"use client";
import GenericPage from "@/components/GenericPage";
const badge = (val: unknown) => {
  const s = String(val);
  return <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${s==="Online"?"bg-green-100 text-green-700":"bg-red-100 text-red-600"}`}>{s}</span>;
};
const data = [
  { id:"MK001", model:"RB4011", ip:"192.168.1.1", location:"Main Office", uptime:"45d 12h", cpu:"23%", memory:"45%", firmware:"7.2.3", status:"Online" },
  { id:"MK002", model:"CCR2004", ip:"192.168.2.1", location:"Zone B Hub", uptime:"30d 8h", cpu:"34%", memory:"52%", firmware:"7.1.5", status:"Online" },
  { id:"MK003", model:"RB3011", ip:"192.168.3.1", location:"Hotspot Hub", uptime:"15d 3h", cpu:"67%", memory:"78%", firmware:"6.49.10", status:"Online" },
  { id:"MK004", model:"RB1100", ip:"192.168.4.1", location:"Backup Room", uptime:"0d 0h", cpu:"0%", memory:"0%", firmware:"7.2.1", status:"Offline" },
];
export default function MikrotikList() {
  return <GenericPage title="Mikrotik List" subtitle="All Mikrotik router devices"
    addLabel="Add Device"
    columns={[{key:"id",label:"ID"},{key:"model",label:"Model"},{key:"ip",label:"IP Address"},{key:"location",label:"Location"},{key:"uptime",label:"Uptime"},{key:"cpu",label:"CPU"},{key:"memory",label:"Memory"},{key:"status",label:"Status",render:badge}]}
    data={data} />;
}
