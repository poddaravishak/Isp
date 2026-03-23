"use client";
import GenericPage from "@/components/GenericPage";

const statusBadge = (val: unknown) => {
  const s = String(val);
  const cls =
    s === "Active" ? "bg-green-100 text-green-700" :
    s === "Expired" ? "bg-red-100 text-red-600" :
    s === "Suspended" ? "bg-yellow-100 text-yellow-700" :
    s === "Pending" ? "bg-blue-100 text-blue-700" :
    "bg-gray-100 text-gray-600";
  return <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${cls}`}>{s}</span>;
};

const data = [
  { id: "C001", name: "Rahim Uddin", phone: "01711-234567", package: "10 Mbps", amount: "৳600", paid: "২৩ মার্চ ২০২৬", expire: "২৩ এপ্রিল ২০২৬", status: "Active" },
  { id: "C002", name: "Karim Ahmed", phone: "01812-345678", package: "20 Mbps", amount: "৳1,000", paid: "১৫ মার্চ ২০২৬", expire: "১৫ এপ্রিল ২০২৬", status: "Active" },
  { id: "C003", name: "Salma Begum", phone: "01913-456789", package: "5 Mbps", amount: "৳400", paid: "২০ ফেব্রুয়ারি ২০২৬", expire: "২০ মার্চ ২০২৬", status: "Expired" },
  { id: "C004", name: "Jamal Hossain", phone: "01614-567890", package: "50 Mbps", amount: "৳2,500", paid: "০১ মার্চ ২০২৬", expire: "০১ মে ২০২৬", status: "Active" },
  { id: "C005", name: "Nasrin Akter", phone: "01715-678901", package: "10 Mbps", amount: "৳600", paid: "-", expire: "-", status: "Suspended" },
  { id: "C006", name: "Rubel Islam", phone: "01916-789012", package: "20 Mbps", amount: "৳1,000", paid: "৩০ মার্চ ২০২৬", expire: "৩০ এপ্রিল ২০২৬", status: "Pending" },
];

export default function AllAccounts() {
  return (
    <GenericPage
      title="All Accounts"
      subtitle="View and manage all client billing accounts"
      addLabel="Add Payment"
      stats={[
        { label: "Total", value: "8,532", color: "text-gray-800" },
        { label: "Active", value: "7,891", color: "text-green-600" },
        { label: "Expired", value: "421", color: "text-red-500" },
        { label: "Pending", value: "220", color: "text-blue-600" },
      ]}
      columns={[
        { key: "id", label: "ID" },
        { key: "name", label: "Client" },
        { key: "phone", label: "Phone" },
        { key: "package", label: "Package" },
        { key: "amount", label: "Amount" },
        { key: "paid", label: "Last Paid" },
        { key: "expire", label: "Expire" },
        { key: "status", label: "Status", render: statusBadge },
      ]}
      data={data}
    />
  );
}
