import { Output_profile_image_verification } from "@/generated";

export type User = {
  userId: string;
  userName: string;
};

export const isProfileImageVerificationOutput = (
  result: unknown
): result is Output_profile_image_verification => {
  return typeof result === "object" && result !== null && "id" in result;
};
