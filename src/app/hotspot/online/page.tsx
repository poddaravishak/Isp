import GenericPage from "@/components/GenericPage";
const data = Array.from({length:5},(_,i)=>({user:`HS${1000+i}`,ip:`10.0.0.${10+i}`,mac:`AA:BB:CC:DD:EE:${i.toString(16).padStart(2,'0').toUpperCase()}`,started:`0${8+i}:30 AM`,duration:`${i+1}h 20m`,data:`${(100+i*50)} MB`,ap:`AP-0${i%3+1}`}));
export default function HotspotOnline() {
  return <GenericPage title="Online Hotspot Users" subtitle="Currently active hotspot sessions" columns={[{key:"user",label:"Username"},{key:"ip",label:"IP"},{key:"mac",label:"MAC"},{key:"started",label:"Started"},{key:"duration",label:"Duration"},{key:"data",label:"Data Used"},{key:"ap",label:"AP"}]} data={data} />;
}
