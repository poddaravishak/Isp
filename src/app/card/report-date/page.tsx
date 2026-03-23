import GenericPage from "@/components/GenericPage";
const data = [{date:"2026-03-23",package:"1 Hour",sold:"124",revenue:"৳2,480"},{date:"2026-03-23",package:"1 Day",sold:"45",revenue:"৳3,600"},{date:"2026-03-22",package:"1 Week",sold:"12",revenue:"৳3,600"}];
export default function CardReportDate() {
  return <GenericPage title="Card Report By Date" subtitle="Card sales filtered by date range" columns={[{key:"date",label:"Date"},{key:"package",label:"Package"},{key:"sold",label:"Cards Sold"},{key:"revenue",label:"Revenue"}]} data={data} />;
}
