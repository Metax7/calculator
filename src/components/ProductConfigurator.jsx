"use client";

import { useState } from "react";

export default function ProductConfigurator({ products, productType }) {
  const [selectedProduct, setSelectedProduct] = useState();
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleChangeProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleChangeOptions = (option) => {
    setSelectedOptions((prevOptions) => {
      if (option === "mobileConnector" || option === "wallConnector") {
        return {
          ...prevOptions,
          mobileConnector: option === "mobileConnector",
          wallConnector: option === "wallConnector",
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
      (p) => p.name === selectedProduct
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
    ? products.find((p) => p.name === selectedProduct).price
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
          <h1 className="text-3xl font-bold">{productType}</h1>
          <div className="flex justify-evenly">
            <label htmlFor="samsung" className="border rounded-md py-2 px-4">
              <input
                type="radio"
                id="samsung"
                name="product"
                onChange={() => handleChangeProduct("samsung")}
                className="mr-1"
              />
              Samsung
            </label>
            <label htmlFor="lg" className="border rounded-md py-2 px-4">
              <input
                type="radio"
                id="lg"
                name="product"
                onChange={() => handleChangeProduct("lg")}
                className="mr-1"
              />
              LG
            </label>
          </div>
          <div className="mt-5 border-t border-blue-950 py-5">
            <h1 className="text-3xl font-bold mb-5">Product Options</h1>
            <div>
              <div className="flex justify-evenly">
                <label htmlFor="hitch" className="border rounded-md py-2 px-4">
                  <input
                    id="hitch"
                    type="checkbox"
                    onChange={() => handleChangeOptions("towHitch")}
                    disabled={!selectedProduct}
                    className="mr-1"
                  />
                  Tow Hitch
                </label>
                <label
                  htmlFor="autopilot"
                  className="border rounded-md py-2 px-4"
                >
                  <input
                    type="checkbox"
                    id="autopilot"
                    onChange={() => handleChangeOptions("autopilot")}
                    disabled={!selectedProduct}
                    className="mr-1"
                  />
                  Autopilot
                </label>
                <label htmlFor="self" className="border rounded-md py-2 px-4">
                  <input
                    id="self"
                    type="checkbox"
                    onChange={() => handleChangeOptions("selfDriving")}
                    disabled={!selectedProduct}
                    className="mr-1"
                  />
                  Self Driving
                </label>
              </div>
              <div className="mt-4">
                <div className="flex justify-evenly">
                  <label htmlFor="wall" className="border rounded-md py-2 px-4">
                    <input
                      type="radio"
                      id="wall"
                      name="charging"
                      onChange={() => handleChangeOptions("wallConnector")}
                      disabled={!selectedProduct}
                      className="mr-1"
                    />
                    Wall Connector
                  </label>
                  <label
                    htmlFor="mobile"
                    className="border rounded-md py-2 px-4"
                  >
                    <input
                      id="mobile"
                      type="radio"
                      name="charging"
                      onChange={() => handleChangeOptions("mobileConnector")}
                      disabled={!selectedProduct}
                      className="mr-1"
                    />
                    Mobile Connector
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
