import sendRequest from "./send-request";

const BASE_URL = "http://localhost:3001/api/users";

export async function signup(userData) {
  return sendRequest(`${BASE_URL}/signup`, "POST", userData);
}

export async function login(userData) {
  return sendRequest(`${BASE_URL}/login`, "POST", userData);
}

export async function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}

// the function that send all type of request
