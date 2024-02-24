import { Card } from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

function page() {
  return (
    <div className="flex gap-5">
      <Card className="w-[90vw] h-[90vh] flex bg-slate-200 dark:bg-slate-900 relative">
        <Link
          className="absolute top-5 left-5 z-50 flex items-center gap-2"
          href="/playground/hooks">
          <FaArrowLeft />
          뒤로가기
        </Link>
      </Card>
    </div>
  );
}

export default page;
