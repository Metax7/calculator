"use client";

import { products } from "@/data/ProductsData";
import { useState } from "react";
import ProductOptions from "./ProductOptions";

export default function ProductConfigurator() {
  const [selectedProduct, setSelectedProduct] = useState();
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleChangeProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleChangeOptions = (option) => {
    setSelectedOptions((prevOptions) => {
      if (
        option === "mobileConnector" ||
        option === "wallConnector" ||
        option === "topFreezer" ||
        option === "bottomFreezer"
      ) {
        return {
          ...prevOptions,
          mobileConnector: option === "mobileConnector",
          wallConnector: option === "wallConnector",
          topFreezer: option === "topFreezer",
          bottomFreezer: option === "bottomFreezer",
        };
      }

      return {
        ...prevOptions,
        [option]: !prevOptions[option],
      };
    });
  };

  const calculateTotalPrice = () => {
    const selectedProductData = products.find(
      (product) => product.name === selectedProduct
    );

    let totalPrice = selectedProductData ? selectedProductData.price : 0;

    for (const option in selectedOptions) {
      if (
        selectedOptions[option] &&
        selectedProductData.options[option] !== undefined
      ) {
        totalPrice += selectedProductData.options[option];
      }
    }

    return totalPrice;
  };

  const productCost = selectedProduct
    ? products.find((product) => product.name === selectedProduct).price
    : 0;

  return (
    <main className="flex justify-center items-center h-screen">
      <div className="border border-blue-950 w-[600px] rounded-xl overflow-hidden">
        <div className="flex justify-evenly text-white font-bold text-2xl bg-blue-950 py-10">
          <span className="uppercase">
            <span>
              {selectedProduct
                ? `${selectedProduct}: $${productCost}`
                : "Select a product"}
            </span>
          </span>
          <span>Full Price: ${calculateTotalPrice()}</span>
        </div>
        <div className="text-center py-5">
          <h1 className="text-3xl font-bold">Products</h1>
          <div className="grid grid-cols-2 px-10 gap-5 uppercase mt-2">
            {products.map((product) => (
              <label
                key={product.name}
                htmlFor={product.name}
                className="border rounded-md py-2 px-4"
              >
                <input
                  type="radio"
                  id={product.name}
                  name="product"
                  onChange={() => handleChangeProduct(product.name)}
                  className="mr-1"
                />
                {product.name}
              </label>
            ))}
          </div>
          <div className="mt-5 border-t border-blue-950 py-5">
            <h1 className="text-3xl font-bold mb-5">Product Options</h1>
            <div className="flex flex-wrap justify-center px-10 gap-2 uppercase">
              {selectedProduct ? "" : "Select a Product"}
              <ProductOptions
                optionName={
                  selectedProduct
                    ? products.find((p) => p.name === selectedProduct).options
                    : {}
                }
                optionId={selectedProduct}
                radioOptions={[
                  "wallConnector",
                  "mobileConnector",
                  "topFreezer",
                  "bottomFreezer",
                ]}
                handleChangeOptions={handleChangeOptions}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
