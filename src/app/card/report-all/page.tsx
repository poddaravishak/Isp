import GenericPage from "@/components/GenericPage";
const data = [{batch:"B001",package:"1 Hour",generated:"500",used:"380",active:"120",revenue:"৳7,600",date:"2026-03-01"},{batch:"B002",package:"1 Day",generated:"200",used:"145",active:"55",revenue:"৳11,600",date:"2026-03-10"},{batch:"B003",package:"1 Week",generated:"100",used:"78",active:"22",revenue:"৳23,400",date:"2026-03-15"}];
export default function CardReportAll() {
  return <GenericPage title="Card Report - All" subtitle="Complete card usage report" stats={[{label:"Total Generated",value:"5,200",color:"text-blue-600"},{label:"Used",value:"1,840",color:"text-red-500"},{label:"Active",value:"3,360",color:"text-green-600"},{label:"Revenue",value:"৳1,84,000",color:"text-purple-600"}]} columns={[{key:"batch",label:"Batch"},{key:"package",label:"Package"},{key:"generated",label:"Generated"},{key:"used",label:"Used"},{key:"active",label:"Active"},{key:"revenue",label:"Revenue"},{key:"date",label:"Date"}]} data={data} />;
}
