import request from "superagent";

export function get(url) {
  return request.get(url);
}

export function postJSON(url, body) {
  return request
    .post(url)
    .set("Content-Type", "application/json")
    .set("Accept", "application/json")
    .send(body);
}

export function deleteRequest(url) {
  return request.delete(url);
}

export function putJSON(url, body) {
  return request
    .put(url)
    .set("Content-Type", "application/json")
    .set("Accept", "application/json")
    .send(body);
}
