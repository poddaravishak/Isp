import GenericPage from "@/components/GenericPage";
const data = [{server:"MK-01 Main",clients:"4,200",active:"3,980",bw:"1.2 Gbps",load:"65%",revenue:"৳18,90,000"},{server:"MK-02 Zone B",clients:"2,100",active:"1,980",bw:"580 Mbps",load:"42%",revenue:"৳9,45,000"},{server:"MK-03 Hotspot",clients:"342",active:"342",bw:"120 Mbps",load:"78%",revenue:"৳48,000"}];
export default function ServerWiseSales() {
  return <GenericPage title="Server Wise Sales" subtitle="Sales breakdown by server" columns={[{key:"server",label:"Server"},{key:"clients",label:"Total Clients"},{key:"active",label:"Active"},{key:"bw",label:"Bandwidth"},{key:"load",label:"Load"},{key:"revenue",label:"Revenue"}]} data={data} />;
}
