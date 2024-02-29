"use client";
import React, { ReactNode } from "react";
import { Button } from "../ui/button";
import { Dialog } from "../ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import DialogCodeViewer from "../state/product/DialogCodeViewer";

type TButtonProps = {
  className?: string;
  variant?:
    | "secondary"
    | "outline"
    | "default"
    | "destructive"
    | "ghost"
    | "link"
    | null
    | undefined;
  children: ReactNode;
  codeData: string;
};

function CodeViewButton(props: TButtonProps) {
  const { className, variant, children, codeData } = props;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={variant} className={className}>
          {children}
        </Button>
      </DialogTrigger>
      <DialogCodeViewer codeData={codeData} />
    </Dialog>
  );
}

export default CodeViewButton;
