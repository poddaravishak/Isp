import GenericPage from "@/components/GenericPage";
const data = [{id:"C001",name:"Rahim Uddin",from:"5 Mbps",to:"10 Mbps",date:"2026-03-15",reason:"Upgrade Request",by:"Admin"},{id:"C004",name:"Jamal Hossain",from:"20 Mbps",to:"50 Mbps",date:"2026-03-10",reason:"Speed Upgrade",by:"Admin"},{id:"C007",name:"Monika Das",from:"10 Mbps",to:"5 Mbps",date:"2026-03-08",reason:"Downgrade - Financial",by:"Collector A"}];
export default function PackageHistory() {
  return <GenericPage title="Package Change History" subtitle="Log of all package changes" columns={[{key:"id",label:"Client ID"},{key:"name",label:"Client"},{key:"from",label:"From Package"},{key:"to",label:"To Package"},{key:"date",label:"Change Date"},{key:"reason",label:"Reason"},{key:"by",label:"Changed By"}]} data={data} />;
}
