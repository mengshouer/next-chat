import type { IuserState } from "src/store/user";

export async function fetchUserProfile(): Promise<IuserState> {
  const response = await fetch("/api/user/profile", {
    method: "get",
  });
  const result = await response.json();

  return result;
}
