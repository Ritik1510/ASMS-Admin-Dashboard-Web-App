"use client";

import { useBootstrapSociety } from "../hooks/useBootstrapSociety";
import { SocietyOnboardingInput } from "../types/society.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { societyFormSchema } from "../schema/society.schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Spinner } from "@/components/ui/spinner";

export function SocietyOnboardingForm() {
  const bootstrapSociety = useBootstrapSociety();

  const form = useForm<SocietyOnboardingInput>({
    resolver: zodResolver(societyFormSchema),
    defaultValues: {
      name: "",
      address: "",
    },
  });

  const onSubmit = (values: SocietyOnboardingInput) => {
    bootstrapSociety.mutate(values);
  };

  const nameError = form.formState.errors.name?.message;
  const addressError = form.formState.errors.address?.message;

  return (
    <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)} noValidate>
      <div className="space-y-2">
        <label
          className="text-sm font-medium text-text-heading"
          htmlFor="society-name"
        >
          Society name
        </label>
        <Input
          {...form.register("name")}
          aria-describedby={nameError ? "society-name-error" : undefined}
          aria-invalid={Boolean(nameError)}
          autoComplete="organization"
          className="h-11 rounded-xl border-brand-300 bg-background 
            px-3.5 text-[clamp(0.75rem,2vw+0.5rem,0.875rem)] 
            text-text-primary placeholder:text-text-tertiary 
            focus-visible:border-brand-700 focus-visible:ring-brand-500/25"
          disabled={bootstrapSociety.isPending || bootstrapSociety.isError}
          id="society-name"
          placeholder="e.g. Palm Grove Residency"
        />
        {nameError && (
          <p
            className="text-[clamp(0.75rem,2vw+0.5rem,0.875rem)] 
            text-destructive"
            id="society-name-error"
            role="alert"
          >
            {nameError}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label
          className="text-[clamp(0.75rem,2vw+0.5rem,0.875rem)] 
          font-medium text-text-heading"
          htmlFor="society-address"
        >
          Society address
        </label>
        <textarea
          {...form.register("address")}
          aria-describedby={addressError ? "society-address-error" : undefined}
          aria-invalid={Boolean(addressError)}
          autoComplete="street-address"

          className="min-h-19 max-h-37 w-full resize-y 
          rounded-xl border border-brand-300 bg-background 
          px-3.5 py-3 text-[clamp(0.75rem,2vw+0.5rem,0.875rem)] 
          text-text-primary shadow-sm outline-none 
          transition-colors placeholder:text-text-tertiary 
          focus-visible:border-brand-700 
          focus-visible:ring-3 focus-visible:ring-brand-500/25 
          disabled:cursor-not-allowed disabled:opacity-50 
          aria-invalid:border-destructive aria-invalid:ring-3 
          aria-invalid:ring-destructive/20"

          disabled={bootstrapSociety.isPending || bootstrapSociety.isError}
          id="society-address"
          placeholder="Building, street, locality, city and postal code"
        />
        {addressError && (
          <p
            className="text-[clamp(0.75rem,2vw+0.5rem,0.875rem)] text-destructive"
            id="society-address-error"
            role="alert">
            {addressError}
          </p>
        )}
      </div>

      <div className="space-y-3 pt-1">
        <Button
          className="h-11 w-full rounded-xl bg-brand-700 
          px-4 text-[clamp(0.75rem,2vw+0.5rem,0.875rem)] 
          text-background shadow-sm hover:bg-brand-800 
          focus-visible:border-brand-700 
          focus-visible:ring-brand-500/35"
          disabled={
            bootstrapSociety.isPending ||
            bootstrapSociety.isSuccess ||
            bootstrapSociety.isError
          }
          type="submit"
        >
          {/*
            TODO: extract this mess into seperate seperate component, 
            Their all the states for button's label will be managed,
            use claude's chat for more context
          */}
          {bootstrapSociety.isPending ? (
            <>
              <Spinner className="size-3" />
              Creating society...
            </>
          ) : bootstrapSociety.isSuccess ? (
            "Society Created"
          ) : bootstrapSociety.error ? (
            "An account with this email address already exists."
          ) : (
            "Create Society"
          )}
        </Button>
        <p 
          className="text-center 
          text-[clamp(0.75rem,2vw+0.5rem,0.875rem)] 
          leading-5 text-text-tertiary">
          {bootstrapSociety.isError ? "" : "You can complete the rest of your society settings after setup."}
        </p>
      </div>
    </form>
  );
}

export default SocietyOnboardingForm
