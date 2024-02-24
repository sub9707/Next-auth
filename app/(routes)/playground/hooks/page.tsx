import ProfileCard from "@/components/profile/ProfileCard";
import DetailModal from "@/components/state/DetailModal";
import React from "react";
import HooksData from "@/components/hook/HooksModalData.json";

function page() {
  return (
    <div className="flex gap-5">
      <ProfileCard
        header="React Hooks API"
        content="React Hooks API를 학습합니다."
        actionHref="/playground/hooks"
      />
    </div>
  );
}

export default page;
