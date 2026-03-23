"use client";
import GenericPage from "@/components/GenericPage";
const badge = (val: unknown) => { const s = String(val); return <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${s==="Active"?"bg-green-100 text-green-700":"bg-red-100 text-red-600"}`}>{s}</span>; };
const data = [{id:"USR001",name:"Admin User",username:"admin",role:"Super Admin",zone:"All",lastLogin:"2026-03-23 09:15",status:"Active"},{id:"USR002",name:"Collector A",username:"collector1",role:"Collector",zone:"Zone A",lastLogin:"2026-03-23 08:30",status:"Active"},{id:"USR003",name:"Tech User",username:"tech1",role:"Technician",zone:"Zone B",lastLogin:"2026-03-22 17:00",status:"Active"},{id:"USR004",name:"Old User",username:"old1",role:"View Only",zone:"Zone C",lastLogin:"2026-02-15 10:00",status:"Inactive"}];
export default function UserFilter() {
  return <GenericPage title="System Users" subtitle="All system user accounts" addLabel="Add User" columns={[{key:"id",label:"ID"},{key:"name",label:"Name"},{key:"username",label:"Username"},{key:"role",label:"Role"},{key:"zone",label:"Zone"},{key:"lastLogin",label:"Last Login"},{key:"status",label:"Status",render:badge}]} data={data} />;
}
