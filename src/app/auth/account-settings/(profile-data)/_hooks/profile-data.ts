import { useQuery } from "@tanstack/react-query";
import { profileDataAction } from "../_actions/profile-data.action";

export default function useProfileData() {
  return useQuery({
    queryKey: ["profileData"],
    queryFn: async () => {
      const payload = await profileDataAction();

      if ("code" in payload) throw new Error(payload.message);

      return payload;
    },
  });
}
