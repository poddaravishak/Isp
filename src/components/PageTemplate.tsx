"use client";
import { Search, Plus, Filter, Download, RefreshCw } from "lucide-react";

interface Column {
  key: string;
  label: string;
  render?: (value: unknown, row: Record<string, unknown>) => React.ReactNode;
}

interface PageTemplateProps {
  title: string;
  subtitle?: string;
  columns: Column[];
  data: Record<string, unknown>[];
  addLabel?: string;
  addHref?: string;
  showSearch?: boolean;
  showFilter?: boolean;
  showExport?: boolean;
  headerExtra?: React.ReactNode;
  stats?: { label: string; value: string; color: string }[];
}

export default function PageTemplate({
  title,
  subtitle,
  columns,
  data,
  addLabel,
  showSearch = true,
  showFilter = true,
  showExport = true,
  headerExtra,
  stats,
}: PageTemplateProps) {
  return (
    <div>
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-xl font-bold text-gray-800">{title}</h1>
          {subtitle && <p className="text-gray-500 text-sm mt-0.5">{subtitle}</p>}
        </div>
        <div className="flex items-center gap-2">
          {headerExtra}
          {showExport && (
            <button className="flex items-center gap-1.5 px-3 py-2 text-sm border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors">
              <Download className="w-3.5 h-3.5" />
              Export
            </button>
          )}
          {addLabel && (
            <button className="flex items-center gap-1.5 px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
              <Plus className="w-3.5 h-3.5" />
              {addLabel}
            </button>
          )}
        </div>
      </div>

      {/* Stats Row */}
      {stats && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <p className="text-xs text-gray-500">{stat.label}</p>
              <p className={`text-xl font-bold mt-1 ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>
      )}

      {/* Table Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 px-4 py-3 border-b border-gray-100">
          {showSearch && (
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 flex-1 max-w-xs">
              <Search className="w-3.5 h-3.5 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent text-sm text-gray-600 placeholder-gray-400 outline-none w-full"
              />
            </div>
          )}
          <div className="flex items-center gap-2 ml-auto">
            {showFilter && (
              <button className="flex items-center gap-1.5 px-3 py-2 text-sm border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter className="w-3.5 h-3.5" />
                Filter
              </button>
            )}
            <button className="p-2 border border-gray-200 text-gray-500 rounded-lg hover:bg-gray-50 transition-colors">
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-4 py-3 text-left">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide whitespace-nowrap"
                  >
                    {col.label}
                  </th>
                ))}
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {data.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </td>
                  {columns.map((col) => (
                    <td key={col.key} className="px-4 py-3 text-gray-700 whitespace-nowrap">
                      {col.render
                        ? col.render(row[col.key], row)
                        : String(row[col.key] ?? "")}
                    </td>
                  ))}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1">
                      <button className="px-2.5 py-1 text-xs bg-blue-50 text-blue-600 rounded hover:bg-blue-100 transition-colors font-medium">
                        Edit
                      </button>
                      <button className="px-2.5 py-1 text-xs bg-red-50 text-red-600 rounded hover:bg-red-100 transition-colors font-medium">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
          <p className="text-sm text-gray-500">
            Showing <span className="font-medium">1-{data.length}</span> of{" "}
            <span className="font-medium">{data.length * 12}</span> entries
          </p>
          <div className="flex items-center gap-1">
            <button className="px-3 py-1.5 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600 disabled:opacity-40">
              Prev
            </button>
            {[1, 2, 3].map((p) => (
              <button
                key={p}
                className={`px-3 py-1.5 text-sm rounded-lg ${
                  p === 1
                    ? "bg-blue-600 text-white"
                    : "border border-gray-200 hover:bg-gray-50 text-gray-600"
                }`}
              >
                {p}
              </button>
            ))}
            <button className="px-3 py-1.5 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
