import { get, postJSON } from "@Helpers/HttpRequestHelper";
import { Users } from "@Constants/APIUrls";

export function loginUser(user) {
  return postJSON(`${Users.loginUser}`, user);
}

export function getUser(userId) {
  const promise = new Promise((resolve, reject) => {
    get(`${Users.getUser}/${userId}`)
      .then(response => {
        resolve(response.body);
      })
      .catch(error => {
        reject(error);
      });
  });
  return promise;
}
