import GenericPage from "@/components/GenericPage";
const data = Array.from({length:6},(_,i)=>({
  session:`HS${(1000+i).toString()}`,mac:`AA:BB:CC:${i.toString(16).padStart(2,'0').toUpperCase()}:EE:FF`,ip:`10.10.1.${10+i}`,
  package:["1 Hour","1 Day","3 Days","1 Week","1 Month"][i%5],started:["09:15","09:22","09:45","10:00","10:15","10:30"][i],
  remaining:["45 min","20 hr","2d 15h","6d 5h","28d","22 hr"][i],data:`${(Math.random()*500).toFixed(0)} MB`,ap:"AP-0"+(i%4+1)
}));
export default function HotspotActive() {
  return <GenericPage title="Active Hotspot Users" subtitle="Currently connected hotspot sessions"
    stats={[{label:"Active Sessions",value:"342",color:"text-green-600"},{label:"Bandwidth",value:"1.2 Gbps",color:"text-blue-600"},{label:"Avg Session",value:"2.4 hr",color:"text-purple-600"},{label:"APs Online",value:"28/30",color:"text-orange-600"}]}
    columns={[{key:"session",label:"Session ID"},{key:"mac",label:"MAC"},{key:"ip",label:"IP"},{key:"package",label:"Package"},{key:"started",label:"Started"},{key:"remaining",label:"Remaining"},{key:"data",label:"Data Used"},{key:"ap",label:"Access Point"}]}
    data={data} />;
}
