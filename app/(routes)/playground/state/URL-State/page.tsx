import React from "react";
import ProductDetail from "@/components/state/product/ProductDetail";

function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div className="DetailPage">
      <ProductDetail searchParams={searchParams} />
    </div>
  );
}

export default page;
