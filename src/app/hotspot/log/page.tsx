import GenericPage from "@/components/GenericPage";
const data = [{time:"09:15:23",user:"HS001234",mac:"AA:BB:CC:DD:EE:01",ip:"10.0.0.10",event:"Login",ap:"AP-01"},{time:"09:22:11",user:"HS001235",mac:"AA:BB:CC:DD:EE:02",ip:"10.0.0.11",event:"Logout",ap:"AP-02"},{time:"10:05:44",user:"HS001236",mac:"AA:BB:CC:DD:EE:03",ip:"10.0.0.12",event:"Login",ap:"AP-01"}];
export default function HotspotLog() {
  return <GenericPage title="Hotspot Log" subtitle="Hotspot connection activity logs" columns={[{key:"time",label:"Time"},{key:"user",label:"User"},{key:"mac",label:"MAC"},{key:"ip",label:"IP"},{key:"event",label:"Event"},{key:"ap",label:"Access Point"}]} data={data} />;
}
