import { useMutation, useQueryClient } from "@tanstack/react-query"
import { bootstrapSocietyAction } from "../dal/bootstrap-society.dal"
import { usersQueryKeys } from "@/features/users/queryKeys/query-keys";
import { toast } from "sonner";
import { HttpError } from "@/http-infrastructure/src/http/client/errors.http";
import { SocietyOnboardingInput } from "../types/society.types";

export const useBootstrapSociety = () => {
  const queryClient = useQueryClient();
  return useMutation<
  // why dont we need SOResult, see claude
    Awaited<ReturnType<typeof bootstrapSocietyAction>>,
    HttpError,
    SocietyOnboardingInput
  >({
    mutationFn: async (input) => {
      const result = await bootstrapSocietyAction(input)
      return result;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: usersQueryKeys.current(),
      });
      toast.success(
        "society is successfully bootstraped!",
        { position: "bottom-right" }
      );
    },
    onError: (error) => {
      toast.error(
        "society is not bootstraped!",
        { position: "bottom-right" }
      );
    }
  })
}