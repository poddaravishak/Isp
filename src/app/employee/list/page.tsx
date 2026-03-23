"use client";
import GenericPage from "@/components/GenericPage";
const badge = (val: unknown) => {
  const s = String(val);
  return <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${s==="Active"?"bg-green-100 text-green-700":"bg-red-100 text-red-600"}`}>{s}</span>;
};
const data = [
  { id:"EMP001", name:"Md. Rafiqul Islam", phone:"01711-100001", role:"Network Engineer", dept:"Technical", joined:"2023-01-15", salary:"৳35,000", status:"Active" },
  { id:"EMP002", name:"Sadia Akter", phone:"01812-100002", role:"Customer Service", dept:"Support", joined:"2023-03-20", salary:"৳22,000", status:"Active" },
  { id:"EMP003", name:"Kamal Hossain", phone:"01913-100003", role:"Field Technician", dept:"Technical", joined:"2022-08-10", salary:"৳25,000", status:"Active" },
  { id:"EMP004", name:"Ruma Khatun", phone:"01614-100004", role:"Billing Officer", dept:"Finance", joined:"2024-01-05", salary:"৳28,000", status:"Active" },
  { id:"EMP005", name:"Joynal Abedin", phone:"01715-100005", role:"Sales Officer", dept:"Sales", joined:"2023-11-12", salary:"৳20,000", status:"Inactive" },
];
export default function EmployeeList() {
  return <GenericPage title="Employee List" subtitle="All staff members"
    stats={[{label:"Total Staff",value:"24",color:"text-blue-600"},{label:"Active",value:"22",color:"text-green-600"},{label:"Salary/Month",value:"৳6,20,000",color:"text-purple-600"},{label:"Departments",value:"5",color:"text-orange-600"}]}
    addLabel="Add Employee"
    columns={[{key:"id",label:"ID"},{key:"name",label:"Name"},{key:"phone",label:"Phone"},{key:"role",label:"Role"},{key:"dept",label:"Department"},{key:"joined",label:"Joined"},{key:"salary",label:"Salary"},{key:"status",label:"Status",render:badge}]}
    data={data} />;
}
