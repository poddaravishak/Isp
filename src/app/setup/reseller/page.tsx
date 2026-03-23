import GenericPage from "@/components/GenericPage";
const data = [{id:"POP001",name:"Main POP",type:"POP",owner:"Company",clients:"4,210",zone:"Zone A,D",commission:"0%",revenue:"৳18,90,000"},{id:"POP002",name:"Reseller A",type:"Reseller",owner:"Karim Ahmed",clients:"2,100",zone:"Zone B",commission:"10%",revenue:"৳9,45,000"},{id:"POP003",name:"Reseller B",type:"Reseller",owner:"Jamal Co.",clients:"1,654",zone:"Zone C",commission:"10%",revenue:"৳7,43,000"}];
export default function ResellerPOP() {
  return <GenericPage title="Reseller / POP" subtitle="Manage resellers and points of presence" addLabel="Add Reseller/POP" columns={[{key:"id",label:"ID"},{key:"name",label:"Name"},{key:"type",label:"Type"},{key:"owner",label:"Owner"},{key:"clients",label:"Clients"},{key:"zone",label:"Zone"},{key:"commission",label:"Commission"},{key:"revenue",label:"Revenue"}]} data={data} />;
}
