import GenericPage from "@/components/GenericPage";
const data = [{month:"March 2026",total:"৳28,45,000",bkash:"৳12,30,000",cash:"৳8,90,000",nagad:"৳5,10,000",rocket:"৳2,15,000"},{month:"February 2026",total:"৳26,80,000",bkash:"৳11,20,000",cash:"৳8,50,000",nagad:"৳4,80,000",rocket:"৳2,30,000"}];
export default function PaymentsHistory() {
  return <GenericPage title="Payments History" subtitle="Monthly payment history summary" columns={[{key:"month",label:"Month"},{key:"total",label:"Total"},{key:"bkash",label:"bKash"},{key:"cash",label:"Cash"},{key:"nagad",label:"Nagad"},{key:"rocket",label:"Rocket"}]} data={data} />;
}
