/**
 * Read Report & Discussions: 
 * be-me-docs/Readme/Society-Onboarding-Model/Society-OnBoarding-Model-Report.md
 */

import { Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SocietyOnboardingForm from "./society-onboarding-form";

function SocietyOnboardingModel() {
  return (
    <div
      aria-label="Society setup"
      aria-modal="true"
      className="fixed inset-0 z-40 grid place-items-center 
      overflow-y-auto bg-background/80 p-4 backdrop-blur-sm sm:p-6"
      role="dialog"
    >
      <Card className="w-full max-w-xl border border-brand-300/80 bg-card py-0 shadow-2xl shadow-brand-900/10">
        <div className="border-b border-brand-300/80 px-5 py-5 sm:px-7 sm:py-6">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-brand-300/60 text-brand-700">
              <Building2 aria-hidden="true" className="size-5" />
            </div>
            <span className="text-xs font-semibold tracking-[0.14em] text-text-secondary uppercase">
              Gate-G setup
            </span>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-brand-900 sm:text-3xl">
            Set up your society
          </h1>
          <p className="mt-2 max-w-md text-[clamp(0.75rem,2vw+0.5rem,0.875rem)] leading-6 text-text-secondary sm:text-base">
            Start with the essentials. This helps us personalise your dashboard from day one.
          </p>
        </div>
        <CardContent className="px-5 py-5 sm:px-7 sm:py-6">
          <SocietyOnboardingForm />
        </CardContent>
      </Card>
    </div>
  );
}

export default SocietyOnboardingModel;
