import GenericPage from "@/components/GenericPage";
const data = [{phone:"01711-234567",otp:"123456",created:"2026-03-23 09:15",expires:"2026-03-23 09:20",used:"Yes",ip:"10.0.0.15"},{phone:"01812-345678",otp:"654321",created:"2026-03-23 10:30",expires:"2026-03-23 10:35",used:"No",ip:"-"}];
export default function OTPSearch() {
  return <GenericPage title="OTP Search" subtitle="Search OTP authentication logs" columns={[{key:"phone",label:"Phone"},{key:"otp",label:"OTP"},{key:"created",label:"Created"},{key:"expires",label:"Expires"},{key:"used",label:"Used"},{key:"ip",label:"IP"}]} data={data} />;
}
