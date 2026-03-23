import GenericPage from "@/components/GenericPage";
const data = [{mac:"AA:BB:CC:DD:EE:01",ip:"10.0.0.10",first:"2026-03-01",last:"2026-03-23",count:"45",ap:"AP-01",vendor:"Apple Inc."},{mac:"AA:BB:CC:DD:EE:02",ip:"10.0.0.11",first:"2026-03-10",last:"2026-03-22",count:"12",ap:"AP-02",vendor:"Samsung"}];
export default function MacLog() {
  return <GenericPage title="MAC Log" subtitle="Device MAC address activity" columns={[{key:"mac",label:"MAC Address"},{key:"ip",label:"Last IP"},{key:"first",label:"First Seen"},{key:"last",label:"Last Seen"},{key:"count",label:"Connections"},{key:"ap",label:"AP"},{key:"vendor",label:"Vendor"}]} data={data} />;
}
