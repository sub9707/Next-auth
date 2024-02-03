import ProfileCard from "@/components/profile/ProfileCard";
import DetailModal from "@/components/state/DetailModal";
import React from "react";
import URLDetailData from "@/components/state/URLStateData.json";

function page() {
  return (
    <div className="flex gap-5">
      <ProfileCard
        header="URL State"
        content="URL에 state를 관리합니다."
        actionHref="/playground/state/URL-State"
        detailModal={
          <DetailModal
            title={URLDetailData.title}
            Description={URLDetailData.Description}
          />
        }
        detail
      />
      <ProfileCard
        header="URL State"
        content="URL에 state를 관리합니다."
        actionHref="/playground/state/URL-State"
        detailModal={
          <DetailModal
            title={URLDetailData.title}
            Description={URLDetailData.Description}
          />
        }
        detail
      />
    </div>
  );
}

export default page;
