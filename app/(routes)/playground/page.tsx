import ProfileCard from "@/components/profile/ProfileCard";
import React from "react";

function page() {
  return (
    <div className="flex gap-10 text-center">
      <ProfileCard
        header="Session 정보 확인"
        content="현재 로그인한 정보를 확인합니다."
        actionHref="/playground/user"
      />
      <ProfileCard
        header="결제 라이브러리"
        content="결제 라이브러리를 활용합니다."
        actionHref="/playground/payment"
      />
      <ProfileCard
        header="State 관리"
        content="state 관리를 학습합니다."
        actionHref="/playground/state"
      />
    </div>
  );
}

export default page;
