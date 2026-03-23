import GenericPage from "@/components/GenericPage";

const data = Array.from({ length: 6 }, (_, i) => ({
  id: `C0${10 + i}`,
  name: ["Nasrin Akter", "Salma Begum", "Arif Rahman", "Piya Roy", "Babul Mia", "Kohinoor"][i],
  phone: `017${11 + i}${Math.floor(Math.random() * 1000000).toString().padStart(6, "0")}`,
  package: ["5 Mbps", "10 Mbps", "20 Mbps"][i % 3],
  lastSeen: `${i + 1} hour${i > 0 ? "s" : ""} ago`,
  zone: ["Zone A", "Zone B", "Zone C"][i % 3],
  reason: ["PPPoE Disconnected", "Router Offline", "Line Fault", "Payment Due", "Self Disconnected", "Mikrotik Block"][i],
}));

export default function OfflineUsers() {
  return (
    <GenericPage
      title="Offline Users"
      subtitle="Clients currently not connected"
      stats={[
        { label: "Offline", value: "285", color: "text-red-500" },
        { label: "Last 1 Hour", value: "42", color: "text-orange-500" },
        { label: "Last 24 Hours", value: "186", color: "text-yellow-600" },
        { label: "Payment Due", value: "89", color: "text-red-600" },
      ]}
      columns={[
        { key: "id", label: "ID" },
        { key: "name", label: "Client Name" },
        { key: "phone", label: "Phone" },
        { key: "package", label: "Package" },
        { key: "zone", label: "Zone" },
        { key: "lastSeen", label: "Last Seen" },
        { key: "reason", label: "Reason" },
      ]}
      data={data}
    />
  );
}
