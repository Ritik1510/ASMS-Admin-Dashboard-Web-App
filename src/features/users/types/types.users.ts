export type ApiEnvelope<T> = { data: T };

export type UserResponse = {
  user: {
    id: string;
    clerkUserId: string;
    fullName: string | null;
    isActive: boolean;
  };
  authority: {
    role: "resident" | "admin" | "guard";
  };
  scope: {
    society: {
      id: string;
      name: string;
    };
    apartment: {
      id: string;
      code: string;
    } | null;
  };
  meta: {
    onboardingComplete: boolean;
  };
};