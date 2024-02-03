import React from "react";
import { Card } from "@/components/ui/card";
import ProductCarousel from "./ProductCarousel";
import { Badge } from "@/components/ui/badge";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const colorVariants = ["black", "white", "blue"];
const sizeVariants = ["230", "240", "260", "270", "280", "290"];

type SearchParamsType = {
  searchParams: { [key: string]: string | string[] | undefined };
};

function ProductDetail(props: SearchParamsType) {
  const selectedColor = props.searchParams.color as string;
  const selectedSize = props.searchParams.size as string;

  return (
    <Card className="w-[90vw] h-[90vh] flex">
      <div className="w-[60%] h-full">
        <ProductCarousel />
      </div>
      <div className="w-auto h-full flex flex-col justify-center">
        <h1 className="text-5xl font-bold">Plain Sneakers A10</h1>
        <div className="w-auto mt-3">
          <Badge>₩ 135,000 KW</Badge>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-normal text-gray-400">COLOR</h2>
          <ToggleGroup
            className="flex justify-start mt-5"
            type="single"
            variant="outline"
            value={selectedColor}>
            {colorVariants.map((color, idx) => (
              <ToggleGroupItem key={idx} className={`w-28`} value={color}>
                <Link
                  href={`/playground/state/URL-State?color=${color}&size=${selectedSize}`}>
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </Link>
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-normal text-gray-400">SIZE</h2>
          <ToggleGroup
            className="grid grid-cols-3 gap-4 mt-5"
            type="single"
            variant="outline"
            value={selectedSize}>
            {sizeVariants.map((size, idx) => (
              <ToggleGroupItem key={idx} className={`w-full`} value={size}>
                <Link
                  href={`/playground/state/URL-State?color=${selectedColor}&size=${size}`}>
                  {size}mm
                </Link>
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
          <p className="text-gray-400 text-sm mt-10">
            7 Days Easy Returns We assure easy return exchange of purchased
            items within 7 days of delivery.
          </p>
          <div className="flex mt-10 gap-4">
            <Button className="w-[50%] h-12" variant="outline">
              Add Cart
            </Button>
            <Button className="w-[50%] h-12">Buy Now</Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ProductDetail;
