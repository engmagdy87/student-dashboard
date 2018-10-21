require("dotenv");

let API_BASE_PATH = "https://reqres.in/api/";

export const Users = {
  registerUser: `${API_BASE_PATH}register`,
  loginUser: `${API_BASE_PATH}login`,
  getUser: `${API_BASE_PATH}users`
};
