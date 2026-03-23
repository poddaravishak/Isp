import GenericPage from "@/components/GenericPage";

const data = Array.from({ length: 8 }, (_, i) => ({
  id: `C00${i + 1}`,
  name: ["Rahim Uddin", "Karim Ahmed", "Jamal Hossain", "Rubel Islam", "Monika Das", "Sohel Rana", "Lima Akter", "Farhan Islam"][i],
  ip: `192.168.1.${10 + i}`,
  mac: `AA:BB:CC:DD:EE:${(10 + i).toString(16).toUpperCase()}`,
  uptime: `${Math.floor(Math.random() * 24)}h ${Math.floor(Math.random() * 60)}m`,
  download: `${(Math.random() * 5).toFixed(2)} Mbps`,
  upload: `${(Math.random() * 2).toFixed(2)} Mbps`,
  server: "MK-01",
}));

export default function OnlineUsers() {
  return (
    <GenericPage
      title="Online Users"
      subtitle="Currently connected clients"
      stats={[
        { label: "Online Now", value: "1,247", color: "text-green-600" },
        { label: "Peak Today", value: "1,583", color: "text-blue-600" },
        { label: "Bandwidth In", value: "2.4 Gbps", color: "text-purple-600" },
        { label: "Bandwidth Out", value: "856 Mbps", color: "text-orange-600" },
      ]}
      columns={[
        { key: "id", label: "ID" },
        { key: "name", label: "Client Name" },
        { key: "ip", label: "IP Address" },
        { key: "mac", label: "MAC Address" },
        { key: "uptime", label: "Uptime" },
        { key: "download", label: "Download" },
        { key: "upload", label: "Upload" },
        { key: "server", label: "Server" },
      ]}
      data={data}
    />
  );
}
