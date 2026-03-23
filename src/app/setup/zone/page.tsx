import GenericPage from "@/components/GenericPage";
const data = [
  { id:"Z001", name:"Zone A", area:"Mirpur, Pallabi, Kafrul", clients:"2,841", pop:"Main POP", manager:"Rafiq Ahmed", status:"Active" },
  { id:"Z002", name:"Zone B", area:"Gulshan, Banani, Baridhara", clients:"1,932", pop:"Reseller A", manager:"Kamal Hossain", status:"Active" },
  { id:"Z003", name:"Zone C", area:"Dhanmondi, Mohammadpur", clients:"1,654", pop:"Reseller B", manager:"Sohel Rana", status:"Active" },
  { id:"Z004", name:"Zone D", area:"Motijheel, Tejgaon", clients:"1,205", pop:"Main POP", manager:"Lima Akter", status:"Active" },
  { id:"Z005", name:"Zone E", area:"Uttara, Tongi", clients:"900", pop:"Reseller C", manager:"Farhan Islam", status:"Active" },
];
export default function ZoneSetup() {
  return <GenericPage title="Zone Management" subtitle="Manage service zones"
    addLabel="Add Zone"
    columns={[{key:"id",label:"ID"},{key:"name",label:"Zone"},{key:"area",label:"Coverage Area"},{key:"clients",label:"Clients"},{key:"pop",label:"POP"},{key:"manager",label:"Manager"},{key:"status",label:"Status"}]}
    data={data} />;
}
