import GenericPage from "@/components/GenericPage";
const data = [{date:"2026-03-24",count:"28",clients:"Belal, Ripa, Habib...",packages:"10 Mbps (12), 5 Mbps (8), 20 Mbps (8)",amount:"৳18,400"},{date:"2026-03-25",count:"34",clients:"Kamal, Sumon, Lima...",packages:"10 Mbps (18), 20 Mbps (10), 50 Mbps (6)",amount:"৳26,200"}];
export default function DateWiseExpireList() {
  return <GenericPage title="Date Wise Expire List" subtitle="Client expiry schedule by date" columns={[{key:"date",label:"Expire Date"},{key:"count",label:"Count"},{key:"clients",label:"Clients"},{key:"packages",label:"Packages"},{key:"amount",label:"Due Amount"}]} data={data} />;
}
