import ProfileCard from "@/components/profile/ProfileCard";
import DetailModal from "@/components/state/DetailModal";
import React from "react";

function page() {
  return (
    <div className="flex gap-5">
      <ProfileCard
        header="UseReducer"
        content="UseReducer를 학습합니다."
        actionHref="/playground/hooks/usereducer"
      />
      <ProfileCard
        header="UseCallback"
        content="UseCallback를 학습합니다."
        actionHref="/playground/hooks/usecallback"
      />
      <ProfileCard
        header="UseMemo"
        content="UseMemo를 학습합니다."
        actionHref="/playground/hooks/usememo"
      />
    </div>
  );
}

export default page;
