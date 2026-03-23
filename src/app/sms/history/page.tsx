"use client";
import GenericPage from "@/components/GenericPage";
const badge = (val: unknown) => { const s = String(val); return <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${s==="Delivered"?"bg-green-100 text-green-700":s==="Failed"?"bg-red-100 text-red-600":"bg-yellow-100 text-yellow-700"}`}>{s}</span>; };
const data = [{id:"SMS001",to:"01711-234567",message:"Your account expires on...",type:"Single",sent:"2026-03-23 09:15",cost:"1 SMS",status:"Delivered"},{id:"BULK001",to:"342 numbers",message:"Renewal reminder - Your...",type:"Bulk",sent:"2026-03-22 10:00",cost:"342 SMS",status:"Delivered"}];
export default function SMSHistory() {
  return <GenericPage title="SMS History" subtitle="All sent SMS messages" stats={[{label:"Total Sent",value:"12,450",color:"text-blue-600"},{label:"This Month",value:"2,341",color:"text-gray-800"},{label:"Success Rate",value:"98.7%",color:"text-green-600"},{label:"Balance",value:"4,850",color:"text-purple-600"}]} columns={[{key:"id",label:"ID"},{key:"to",label:"To"},{key:"message",label:"Message"},{key:"type",label:"Type"},{key:"sent",label:"Sent At"},{key:"cost",label:"Cost"},{key:"status",label:"Status",render:badge}]} data={data} />;
}
