"use client";
import GenericPage from "@/components/GenericPage";
const priorityBadge = (val: unknown) => {
  const s = String(val);
  const cls = s==="Critical"?"bg-red-100 text-red-700":s==="High"?"bg-orange-100 text-orange-700":s==="Medium"?"bg-yellow-100 text-yellow-700":"bg-gray-100 text-gray-600";
  return <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${cls}`}>{s}</span>;
};
const statusBadge = (val: unknown) => {
  const s = String(val);
  const cls = s==="Resolved"?"bg-green-100 text-green-700":s==="Open"?"bg-blue-100 text-blue-700":"bg-yellow-100 text-yellow-700";
  return <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${cls}`}>{s}</span>;
};
const data = [
  { id:"TKT001", client:"Rahim Uddin", issue:"No Internet", priority:"High", assigned:"Tech Team A", created:"2026-03-22", status:"Resolved" },
  { id:"TKT002", client:"Salma Begum", issue:"Slow Speed", priority:"Medium", assigned:"Tech Team B", created:"2026-03-22", status:"Open" },
  { id:"TKT003", client:"Jamal Hossain", issue:"Billing Issue", priority:"Low", assigned:"Admin", created:"2026-03-21", status:"In Progress" },
  { id:"TKT004", client:"Nasrin Akter", issue:"Connection Drop", priority:"Critical", assigned:"Field Engineer 1", created:"2026-03-23", status:"Open" },
];
export default function ComplainHistory() {
  return <GenericPage title="Complaint History" subtitle="All support tickets and complaints"
    stats={[{label:"Total Tickets",value:"342",color:"text-blue-600"},{label:"Open",value:"18",color:"text-orange-600"},{label:"Resolved",value:"298",color:"text-green-600"},{label:"Avg Resolution",value:"4.2 hr",color:"text-purple-600"}]}
    addLabel="New Ticket"
    columns={[{key:"id",label:"Ticket ID"},{key:"client",label:"Client"},{key:"issue",label:"Issue"},{key:"priority",label:"Priority",render:priorityBadge},{key:"assigned",label:"Assigned To"},{key:"created",label:"Created"},{key:"status",label:"Status",render:statusBadge}]}
    data={data} />;
}
