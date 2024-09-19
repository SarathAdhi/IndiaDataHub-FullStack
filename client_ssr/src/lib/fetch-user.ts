import { fetchFunc } from "./fetch";

export async function fetchUser() {
  return fetchFunc
    .get("/auth/verify", {
      next: {
        tags: ["auth"],
      },
    })
    .then((res) => res.data as User)
    .catch(() => undefined);
}
