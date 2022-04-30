import sendRequest from "./send-request";
const BASE_URL = "http://localhost:3001/api/exercises";

export async function Create(exerciseData) {
  sendRequest(`${BASE_URL}/new`, "POST", exerciseData);
}
