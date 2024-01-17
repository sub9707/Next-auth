import React from "react";
import CardWrapper from "./card-wrapper";

function LoginForm() {
  return (
    <CardWrapper
      headerLabel="환영합니다"
      backButtonLabel="아직 계정이 없으신가요?"
      backButtonHref="/auth/register"
      showSocial>
      LoginForm
    </CardWrapper>
  );
}

export default LoginForm;
