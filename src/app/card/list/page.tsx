"use client";
import GenericPage from "@/components/GenericPage";
const usedBadge = (val: unknown) => {
  const s = String(val);
  return <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${s === "Used" ? "bg-red-100 text-red-600" : s === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}>{s}</span>;
};
const data = Array.from({length:7},(_,i)=>({
  username:`HS${(1000+i).toString()}`,password:`pass${(100+i).toString()}`,package:["1 Hour","1 Day","3 Days","1 Week","1 Month"][i%5],
  price:["৳20","৳80","৳150","৳300","৳800"][i%5],created:"2026-03-20",server:"MK-01",status:["Active","Used","Active","Used","Active","Active","Used"][i]
}));
export default function CardList() {
  return <GenericPage title="Card List" subtitle="All generated hotspot voucher cards"
    stats={[{label:"Total Cards",value:"5,200",color:"text-blue-600"},{label:"Active",value:"3,360",color:"text-green-600"},{label:"Used",value:"1,840",color:"text-red-500"},{label:"Revenue",value:"৳1,84,000",color:"text-purple-600"}]}
    columns={[{key:"username",label:"Username"},{key:"password",label:"Password"},{key:"package",label:"Package"},{key:"price",label:"Price"},{key:"created",label:"Created"},{key:"server",label:"Server"},{key:"status",label:"Status",render:usedBadge}]}
    addLabel="Generate More" data={data} />;
}
