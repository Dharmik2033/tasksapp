"use client";
import { Toaster } from "@/components/ui/toaster";

type Props = {
  children: React.ReactNode;
};
export default function ProviderWrapper(props: Props) {
  const { children } = props;
  return (
    <>
      <Toaster />
      {children}
    </>
  );
}
