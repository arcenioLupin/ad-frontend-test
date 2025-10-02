import { Suspense } from "react";
import CatalogPageClient from "@/components/CatalogPageClient";

export default function Home() {
  return (
    <Suspense fallback={<div className="text-center text-gray-500 py-10">Loading…</div>}>
      <CatalogPageClient />
    </Suspense>
  );
}
