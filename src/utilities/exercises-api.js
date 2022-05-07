import sendRequest from "./send-request";
const BASE_URL = "http://localhost:3001/api/exercises";

// the create function
export function Create(exerciseData) {
  return sendRequest(`${BASE_URL}/new`, "POST", exerciseData);
}

//the get all exercises  of specific user and  certain type
export function GetExerciseType(userId, Type) {
  return sendRequest(`${BASE_URL}/user/${userId}/${Type}`, "GET", null);
}

// delete function
export function Delete(exerciseId) {
  return sendRequest(`${BASE_URL}/delete/${exerciseId}`, "DELETE");
}

// get exercise by id

export function getExerciseById(id) {
  return sendRequest(`${BASE_URL}/${id}`, "GET", null);
}

// edit  function

export function editById(id, load) {
  return sendRequest(`${BASE_URL}/edit/${id}`, "PUT", load);
}
