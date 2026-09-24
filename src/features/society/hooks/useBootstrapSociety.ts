import { useMutation, useQueryClient } from "@tanstack/react-query"
import { bootstrapSocietyAction } from "../api/bootstrap-society.api"
import { SocietyOnboardingInput } from "../types/society.types";
import { usersQueryKeys } from "@/features/users/queryKeys/query-keys";
import { toast } from "sonner";

export const useBootstrapSociety = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (input: SocietyOnboardingInput) => {
      const result = bootstrapSocietyAction(input);
      return result;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: usersQueryKeys.current(),
      });
      toast.success(
        "society is successfully bootstraped!",
        { position: "top-center" }
      );
    },
    onError: () => {
      toast.error(
        "society not bootstraped!",
        { position: "top-center" }
      );
    }
  })
}