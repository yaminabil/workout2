import * as usersApi from "./users-api";

//the first step is to signup or to login and that's when you need to save the token coming back from the back end  in locale storage

// signup service
export async function signup(userData) {
  const token = await usersApi.signup(userData);
  localStorage.setItem("token", token);
  return getUser();
}

//login service
export async function login(userData) {
  const token = await usersApi.login(userData);
  localStorage.setItem("token", token);
  return getUser();
}

// get token if it's not expired yet if its expired  delete the token from the storage
export function getToken() {
  const token = localStorage.getItem("token");
  if (!token) return null;

  const payload = JSON.parse(window.atob(token.split(".")[1]));
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem("token");
    return null;
  }

  return token;
}
// get user function

export function getUser() {
  const token = getToken();
  return token ? JSON.parse(window.atob(token.split(".")[1])).user : null;
}

// logout  function
export function logout() {
  localStorage.removeItem("token");
}

// checkToken
// this function renews the expiration date for the token everytime gets expired

export function checkToken() {
  return usersApi.checkToken().then((dateStr) => new Date(dateStr));
}
