import GenericPage from "@/components/GenericPage";
const data = [{id:"SRV001",name:"Main PPPoE Server",ip:"192.168.1.1",type:"PPPoE",mikrotik:"MK-01",zones:"All",clients:"4,200",status:"Active"},{id:"SRV002",name:"Hotspot Server",ip:"192.168.3.1",type:"Hotspot",mikrotik:"MK-03",zones:"Hotspot",clients:"342",status:"Active"}];
export default function ServerBind() {
  return <GenericPage title="Server Bind" subtitle="Bind servers to zones and Mikrotik" addLabel="Add Server Bind" columns={[{key:"id",label:"ID"},{key:"name",label:"Server Name"},{key:"ip",label:"IP"},{key:"type",label:"Type"},{key:"mikrotik",label:"Mikrotik"},{key:"zones",label:"Zones"},{key:"clients",label:"Clients"},{key:"status",label:"Status"}]} data={data} />;
}
