"use client";
import GenericPage from "@/components/GenericPage";

const data = [
  { id: "C001", name: "Rahim Uddin", phone: "01711-234567", address: "Mirpur, Dhaka", package: "10 Mbps", zone: "Zone A", status: "Active", expire: "2026-04-23" },
  { id: "C002", name: "Karim Ahmed", phone: "01812-345678", address: "Agrabad, Chittagong", package: "20 Mbps", zone: "Zone B", status: "Active", expire: "2026-04-15" },
  { id: "C003", name: "Salma Begum", phone: "01913-456789", address: "Zindabazar, Sylhet", package: "5 Mbps", zone: "Zone C", status: "Expired", expire: "2026-03-20" },
  { id: "C004", name: "Jamal Hossain", phone: "01614-567890", address: "Rajpara, Rajshahi", package: "50 Mbps", zone: "Zone A", status: "Active", expire: "2026-05-01" },
  { id: "C005", name: "Nasrin Akter", phone: "01715-678901", address: "Banani, Dhaka", package: "10 Mbps", zone: "Zone A", status: "Suspend", expire: "2026-03-10" },
  { id: "C006", name: "Rubel Islam", phone: "01916-789012", address: "Khulna Sadar", package: "20 Mbps", zone: "Zone D", status: "Active", expire: "2026-04-30" },
  { id: "C007", name: "Monika Das", phone: "01617-890123", address: "Barisal Sadar", package: "5 Mbps", zone: "Zone E", status: "Active", expire: "2026-04-18" },
];

const statusBadge = (val: unknown) => {
  const s = String(val);
  const cls = s === "Active" ? "bg-green-100 text-green-700" : s === "Expired" ? "bg-red-100 text-red-600" : "bg-yellow-100 text-yellow-700";
  return <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${cls}`}>{s}</span>;
};

export default function SearchCustomer() {
  return (
    <GenericPage
      title="Search Customer"
      subtitle="Search and manage all ISP clients"
      addLabel="Add New Client"
      stats={[
        { label: "Total", value: "8,532", color: "text-blue-600" },
        { label: "Active", value: "7,891", color: "text-green-600" },
        { label: "Expired", value: "421", color: "text-red-500" },
        { label: "Suspended", value: "220", color: "text-yellow-600" },
      ]}
      columns={[
        { key: "id", label: "ID" },
        { key: "name", label: "Name" },
        { key: "phone", label: "Phone" },
        { key: "package", label: "Package" },
        { key: "zone", label: "Zone" },
        { key: "expire", label: "Expire Date" },
        { key: "status", label: "Status", render: statusBadge },
      ]}
      data={data}
    />
  );
}
