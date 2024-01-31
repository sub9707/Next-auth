"use client";
import React from "react";
import { Button } from "../ui/button";
import { PG, PaymentMethod } from "@/types/portone";

type sessionProps = {
  email: string;
  name: string;
};

function PayButton(props: sessionProps) {
  const handlePayment = () => {
    if (!window.IMP) return;

    // 가맹점 식별코드
    const { IMP } = window;
    IMP.init(process.env.NEXT_PUBLIC_STORE_ID_CODE!);

    // 결제 데이터 설정
    const data = {
      pg: "nice_v2" as PG,
      pay_method: "card" as PaymentMethod,
      merchant_uid: `mid_${new Date().getTime()}`,
      name: "결제 테스트",
      amount: 100,
      buyer_email: props.email,
      buyer_name: props.name,
    };
    console.table(data);

    // 결제창 호출
    IMP.request_pay(data, callback);
  };

  async function callback(rsp: any) {
    console.log(rsp);
    const { success, error_msg, merchant_uid, imp_uid } = rsp;

    console.log("imp_uid : ", imp_uid);

    if (success) {
      const res = await fetch("ENDPOINT", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          imp_uid: imp_uid,
          merchant_uid: merchant_uid,
        }),
      });

      const data = await res.json();
      console.log(data);
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  }
  return (
    <Button className="w-[80%]" onClick={handlePayment}>
      결제하기
    </Button>
  );
}

export default PayButton;
