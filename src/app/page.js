"use client";

import ProductConfigurator from "@/components/ProductConfigurator";
import { products } from "@/data/ProductsData";

export default function Home() {
  return (
    <>
      <ProductConfigurator productType="Cars" products={products} />
    </>
  );
}
