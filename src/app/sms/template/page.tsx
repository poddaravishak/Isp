import GenericPage from "@/components/GenericPage";
const data = [{id:"T001",name:"Renewal Reminder",content:"Dear {name}, your internet expires on {expire}. Pay ৳{amount} to renew. Call 01711-000001",type:"Reminder",used:"1,245"},{id:"T002",name:"Payment Received",content:"Dear {name}, we received ৳{amount} for {package}. Expires: {expire}. Thank you!",type:"Confirmation",used:"8,920"},{id:"T003",name:"Offer",content:"Special offer! Upgrade to 20 Mbps for only ৳800 this month. Call 01711-000001",type:"Marketing",used:"342"}];
export default function SMSTemplate() {
  return <GenericPage title="SMS Templates" subtitle="Reusable SMS message templates" addLabel="Add Template" columns={[{key:"id",label:"ID"},{key:"name",label:"Template Name"},{key:"content",label:"Content"},{key:"type",label:"Type"},{key:"used",label:"Times Used"}]} data={data} />;
}
