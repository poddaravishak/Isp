"use client";
import MainLayout from "./MainLayout";
import PageTemplate from "./PageTemplate";

interface GenericPageProps {
  title: string;
  subtitle: string;
  columns: { key: string; label: string; render?: (value: unknown, row: Record<string, unknown>) => React.ReactNode }[];
  data: Record<string, unknown>[];
  addLabel?: string;
  stats?: { label: string; value: string; color: string }[];
}

export default function GenericPage({ title, subtitle, columns, data, addLabel, stats }: GenericPageProps) {
  return (
    <MainLayout>
      <PageTemplate
        title={title}
        subtitle={subtitle}
        columns={columns}
        data={data}
        addLabel={addLabel}
        stats={stats}
      />
    </MainLayout>
  );
}
