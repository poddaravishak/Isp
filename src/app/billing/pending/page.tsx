import GenericPage from "@/components/GenericPage";
const data = [
  { id: "C006", name: "Rubel Islam", phone: "01916-789012", package: "20 Mbps", amount: "৳1,000", since: "2026-03-20", zone: "Zone D", pop: "Reseller B" },
  { id: "C019", name: "Sonia Ahmed", phone: "01717-891234", package: "10 Mbps", amount: "৳600", since: "2026-03-19", zone: "Zone A", pop: "Main POP" },
];
export default function PendingAccounts() {
  return (
    <GenericPage title="Pending Accounts" subtitle="Accounts awaiting payment confirmation"
      stats={[{label:"Pending",value:"220",color:"text-blue-600"},{label:"Pending Amount",value:"৳1,32,000",color:"text-orange-600"},{label:"bKash Pending",value:"87",color:"text-pink-600"},{label:"Online Pending",value:"133",color:"text-purple-600"}]}
      columns={[{key:"id",label:"ID"},{key:"name",label:"Client"},{key:"phone",label:"Phone"},{key:"package",label:"Package"},{key:"amount",label:"Amount"},{key:"since",label:"Pending Since"},{key:"zone",label:"Zone"},{key:"pop",label:"POP"}]}
      addLabel="Verify Payments" data={data} />
  );
}
