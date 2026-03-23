import GenericPage from "@/components/GenericPage";
const data = [{id:"SZ001",name:"Mirpur-1",zone:"Zone A",area:"Section 1, 2",clients:"456",pop:"Main POP"},{id:"SZ002",name:"Mirpur-2",zone:"Zone A",area:"Section 6, 7",clients:"378",pop:"Main POP"},{id:"SZ003",name:"Gulshan-1",zone:"Zone B",area:"Circle 1",clients:"289",pop:"Reseller A"}];
export default function SubZone() {
  return <GenericPage title="Sub Zone Management" subtitle="Manage sub-zones within zones" addLabel="Add Sub Zone" columns={[{key:"id",label:"ID"},{key:"name",label:"Sub Zone"},{key:"zone",label:"Parent Zone"},{key:"area",label:"Area"},{key:"clients",label:"Clients"},{key:"pop",label:"POP"}]} data={data} />;
}
