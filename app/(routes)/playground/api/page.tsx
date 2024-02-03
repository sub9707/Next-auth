import ProfileCard from "@/components/profile/ProfileCard";
import React from "react";

function page() {
  return (
    <div className="flex justify-center gap-10 text-center">
      <ProfileCard
        header="Youtube API"
        content="Youtube data API를 활용합니다."
        actionHref="/playground/api/youtube"
        detail={false}
        detailModal={null}
      />
    </div>
  );
}

export default page;
