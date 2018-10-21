import { postJSON } from "@Helpers/HttpRequestHelper";
import { Users } from "@Constants/APIUrls";

export function registerUser(user) {
  return postJSON(`${Users.registerUser}`, user);
}
