"use client";
import GenericPage from "@/components/GenericPage";
const data = [
  { id: "PKG001", name: "Basic", speed: "5 Mbps", price: "৳400", validity: "30 Days", type: "PPPoE", clients: "1,250", status: "Active" },
  { id: "PKG002", name: "Standard", speed: "10 Mbps", price: "৳600", validity: "30 Days", type: "PPPoE", clients: "3,420", status: "Active" },
  { id: "PKG003", name: "Plus", speed: "20 Mbps", price: "৳1,000", validity: "30 Days", type: "PPPoE", clients: "2,100", status: "Active" },
  { id: "PKG004", name: "Premium", speed: "50 Mbps", price: "৳2,000", validity: "30 Days", type: "PPPoE", clients: "1,100", status: "Active" },
  { id: "PKG005", name: "Ultra", speed: "100 Mbps", price: "৳3,500", validity: "30 Days", type: "PPPoE", clients: "420", status: "Active" },
  { id: "PKG006", name: "Enterprise", speed: "200 Mbps", price: "৳6,000", validity: "30 Days", type: "PPPoE", clients: "242", status: "Active" },
  { id: "PKG007", name: "HS-1Hour", speed: "2 Mbps", price: "৳20", validity: "1 Hour", type: "Hotspot", clients: "890", status: "Active" },
  { id: "PKG008", name: "HS-1Day", speed: "5 Mbps", price: "৳80", validity: "1 Day", type: "Hotspot", clients: "650", status: "Active" },
];
const badge = (val: unknown) => <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">{String(val)}</span>;
const typeBadge = (val: unknown) => <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${String(val)==="Hotspot"?"bg-orange-100 text-orange-700":"bg-blue-100 text-blue-700"}`}>{String(val)}</span>;
export default function PackageList() {
  return <GenericPage title="Package List" subtitle="All internet service packages"
    stats={[{label:"Total Packages",value:"12",color:"text-blue-600"},{label:"PPPoE",value:"8",color:"text-blue-600"},{label:"Hotspot",value:"4",color:"text-orange-600"},{label:"Avg Price",value:"৳1,450",color:"text-green-600"}]}
    addLabel="Add Package"
    columns={[{key:"id",label:"ID"},{key:"name",label:"Package Name"},{key:"speed",label:"Speed"},{key:"price",label:"Price/Month"},{key:"validity",label:"Validity"},{key:"type",label:"Type",render:typeBadge},{key:"clients",label:"Clients"},{key:"status",label:"Status",render:badge}]}
    data={data} />;
}
