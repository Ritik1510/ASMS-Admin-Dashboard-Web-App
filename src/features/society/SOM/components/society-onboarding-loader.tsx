"use client";

import dynamic from "next/dynamic";

const SocietyOnboardingModal = dynamic(
  () => import("./society-onboarding-model"),
  { ssr: false }
);

export function SocietyOnboardingLoader() {
  return <SocietyOnboardingModal />;
}