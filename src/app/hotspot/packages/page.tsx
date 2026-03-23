import GenericPage from "@/components/GenericPage";
const data = [{id:"HS-P1",name:"1 Hour",speed:"2 Mbps",validity:"1 Hour",price:"৳20",sold:"1,240",status:"Active"},{id:"HS-P2",name:"3 Hours",speed:"5 Mbps",validity:"3 Hours",price:"৳50",sold:"640",status:"Active"},{id:"HS-P3",name:"1 Day",speed:"5 Mbps",validity:"24 Hours",price:"৳80",sold:"890",status:"Active"},{id:"HS-P4",name:"1 Week",speed:"10 Mbps",validity:"7 Days",price:"৳300",sold:"320",status:"Active"},{id:"HS-P5",name:"1 Month",speed:"20 Mbps",validity:"30 Days",price:"৳800",sold:"150",status:"Active"}];
export default function WiFiPackageList() {
  return <GenericPage title="WiFi Package List" subtitle="Hotspot internet packages" addLabel="Add Package" columns={[{key:"id",label:"ID"},{key:"name",label:"Package"},{key:"speed",label:"Speed"},{key:"validity",label:"Validity"},{key:"price",label:"Price"},{key:"sold",label:"Total Sold"},{key:"status",label:"Status"}]} data={data} />;
}
