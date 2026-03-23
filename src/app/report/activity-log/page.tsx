import GenericPage from "@/components/GenericPage";
const data = [{time:"2026-03-23 09:15:23",user:"Admin",action:"Login",details:"Logged in from 192.168.1.100",module:"Auth"},{time:"2026-03-23 09:20:11",user:"Admin",action:"Add Client",details:"Added client: Rahim Uddin (C001)",module:"Client"},{time:"2026-03-23 09:45:02",user:"Collector A",action:"Payment",details:"Collected ৳600 from C001",module:"Billing"},{time:"2026-03-23 10:00:33",user:"Admin",action:"Edit Package",details:"Updated 10 Mbps price to ৳600",module:"Package"}];
export default function ActivityLog() {
  return <GenericPage title="Soft Activity Log" subtitle="System activity and audit trail" columns={[{key:"time",label:"Time"},{key:"user",label:"User"},{key:"action",label:"Action"},{key:"details",label:"Details"},{key:"module",label:"Module"}]} data={data} />;
}
