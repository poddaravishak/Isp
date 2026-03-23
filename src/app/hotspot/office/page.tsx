import GenericPage from "@/components/GenericPage";
const data = [{id:"OFF001",name:"Manager Office",ip:"10.10.1.5",dept:"Management",package:"Unlimited",status:"Active"},{id:"OFF002",name:"Finance Dept",ip:"10.10.1.6",dept:"Finance",package:"50 Mbps",status:"Active"}];
export default function OfficeUser() {
  return <GenericPage title="Office Users" subtitle="Internal office hotspot users" addLabel="Add Office User" columns={[{key:"id",label:"ID"},{key:"name",label:"Name"},{key:"ip",label:"IP"},{key:"dept",label:"Department"},{key:"package",label:"Package"},{key:"status",label:"Status"}]} data={data} />;
}
