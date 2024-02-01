import React from "react";
import { Card } from "@/components/ui/card";
import ProductCarousel from "./ProductCarousel";
import { Badge } from "@/components/ui/badge";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

function ProductDetail() {
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
          <ToggleGroup className="flex justify-start mt-5" type="single">
            <ToggleGroupItem className="w-28" value="black" defaultChecked>
              Black
            </ToggleGroupItem>
            <ToggleGroupItem className="w-28" value="white">
              White
            </ToggleGroupItem>
            <ToggleGroupItem className="w-28" value="blue">
              Blue
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-normal text-gray-400">SIZE</h2>
          <Select>
            <SelectTrigger className="w-full mt-5">
              <SelectValue placeholder="SELECT FEET SIZE" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="240">240mm</SelectItem>
                <SelectItem value="250">250mm</SelectItem>
                <SelectItem value="260">260mm</SelectItem>
                <SelectItem value="270">270mm</SelectItem>
                <SelectItem value="280">280mm</SelectItem>
                <SelectItem value="290">290mm</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
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
