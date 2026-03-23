import MainLayout from "@/components/MainLayout";
import { Upload, FileSpreadsheet, CheckCircle, AlertCircle } from "lucide-react";

export default function ImportClient() {
  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h1 className="text-xl font-bold text-gray-800">Import Clients</h1>
          <p className="text-gray-500 text-sm mt-1">Bulk import clients from Excel/CSV file</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-4">
          <h2 className="font-semibold text-gray-700 mb-4">Upload File</h2>

          <div className="border-2 border-dashed border-gray-200 rounded-xl p-10 text-center hover:border-blue-400 transition-colors cursor-pointer bg-gray-50">
            <Upload className="w-10 h-10 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-600 font-medium">Drag & drop your file here</p>
            <p className="text-gray-400 text-sm mt-1">or click to browse</p>
            <p className="text-xs text-gray-400 mt-3">Supports: .xlsx, .xls, .csv (Max 10MB)</p>
            <button className="mt-4 px-5 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
              Select File
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-4">
          <div className="flex items-center gap-3 mb-4">
            <FileSpreadsheet className="w-5 h-5 text-green-600" />
            <h2 className="font-semibold text-gray-700">Download Template</h2>
          </div>
          <p className="text-sm text-gray-500 mb-4">Use our template to ensure correct data formatting</p>
          <div className="flex gap-3">
            <button className="px-4 py-2 text-sm border border-green-200 text-green-700 rounded-lg hover:bg-green-50 transition-colors">
              Download Excel Template
            </button>
            <button className="px-4 py-2 text-sm border border-blue-200 text-blue-700 rounded-lg hover:bg-blue-50 transition-colors">
              Download CSV Template
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="font-semibold text-gray-700 mb-4">Required Columns</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {["Full Name*", "Phone*", "Package*", "Username*", "Password*", "Zone", "Address", "NID", "IP Address", "Install Date"].map((col) => (
              <div key={col} className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                {col}
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-yellow-50 rounded-lg flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-yellow-700">Fields marked with * are required. Duplicate phone numbers will be skipped.</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
