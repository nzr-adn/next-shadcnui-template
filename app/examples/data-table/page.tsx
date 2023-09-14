import { DataTable } from "./components/data-table";

export default async function DemoPage() {
  return (
    <div className="container mx-auto py-10">
      <DataTable title="Master Data Product" />
    </div>
  );
}
