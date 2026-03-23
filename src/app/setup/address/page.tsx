import GenericPage from "@/components/GenericPage";
const data = [{id:"ADD001",division:"Dhaka",district:"Dhaka",upazila:"Mirpur",union:"Ward-1",code:"1216"},{id:"ADD002",division:"Dhaka",district:"Dhaka",upazila:"Gulshan",union:"Ward-19",code:"1212"},{id:"ADD003",division:"Chittagong",district:"Chittagong",upazila:"Kotwali",union:"Ward-5",code:"4000"}];
export default function AddressSetup() {
  return <GenericPage title="Address Setup" subtitle="Configure service area addresses" addLabel="Add Address" columns={[{key:"id",label:"ID"},{key:"division",label:"Division"},{key:"district",label:"District"},{key:"upazila",label:"Upazila"},{key:"union",label:"Union/Ward"},{key:"code",label:"Post Code"}]} data={data} />;
}
