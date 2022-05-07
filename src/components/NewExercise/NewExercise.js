import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import * as exercisesAPI from "../../utilities/exercises-api";
import styles from "./NewExercise.module.css";
import { getUser } from "../../utilities/users-service";

export default function NewExercise({ setChoice }) {
  //declare variables
  const [exercise, setExercise] = useState({
    user: getUser()._id,
    name: "",
    type: "",
    duration: "",
    description: "",
    repetition: 0,
    err: "",
  });

  const formDiv = document.getElementById("form");
  const anotherOneDiv = document.getElementById("anotherOne");
  const radioInput = document.querySelectorAll("input.form-check-input");

  const Navigate = useNavigate();

  // handlers
  const handleChange = (evt) => {
    setExercise({ ...exercise, [evt.target.name]: evt.target.value, err: "" });
  };

  // handle create
  const handleCreate = async (evt) => {
    evt.preventDefault();

    try {
      const userData = { ...exercise };
      delete userData.err;
      const response = await exercisesAPI.Create(userData);
      formDiv.style.display = "none";
      anotherOneDiv.style.display = "block";

      // setChoice("Type");
    } catch (error) {
      setExercise({ ...exercise, err: "Creation failed  ! try again " });
    }
  };

  // handle create another one
  const handleCreateAnotherOne = () => {
    anotherOneDiv.style.display = "none";
    formDiv.style.display = "block";
    setExercise({
      user: getUser()._id,
      name: "",
      type: "",
      duration: "",
      description: "",
      repetition: 0,
      err: "",
    });
    // setChoice("Type");
    // setChoice("New Exercise");
    radioInput.forEach((ele) => {
      ele.checked = false;
    });
  };

  //handle done
  const handleDone = () => {
    setChoice("Type");
  };

  return (
    <div>
      <div className={styles.exerciseTypeContainer}>
        <div className={styles.type}> New Exercise </div>
        {/* form start from here  */}
        <form
          className={styles.NewExerciseForm}
          onSubmit={handleCreate}
          id="form"
        >
          <div>
            <label>Name : </label>
            <input onChange={handleChange} name="name" value={exercise.name} />
          </div>
          <br />
          <div>
            <label style={{ textAlign: "left", width: "250px" }}>Type : </label>
            <ul>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="type"
                  id="exampleRadios1"
                  value="Endurance"
                  onChange={handleChange}
                />
                <label className="form-check-label" for="exampleRadios1">
                  Endurance
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="type"
                  id="exampleRadios2"
                  value="Strength"
                  onChange={handleChange}
                />
                <label className="form-check-label" for="exampleRadios2">
                  Strength
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="type"
                  id="exampleRadios3"
                  value="Balance"
                  onChange={handleChange}
                />
                <label className="form-check-label" for="exampleRadios3">
                  Balance
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="type"
                  id="exampleRadios4"
                  value="Flexibility"
                  onChange={handleChange}
                />
                <label className="form-check-label" for="exampleRadios4">
                  Flexibility
                </label>
              </div>
            </ul>
          </div>
          <br />
          {/************************ */}

          <div>
            <label>Duration : </label>
            <input
              onChange={handleChange}
              name="duration"
              value={exercise.duration}
            />
          </div>
          <br />
          <div>
            <label>Description: </label>
            <textarea
              onChange={handleChange}
              name="description"
              value={exercise.description}
            />
          </div>
          <button type="submit">Create </button>
          <p className={styles.err}>&nbsp;{exercise.err}</p>
          {/* form ends  here  */}
        </form>
        <div
          style={{ display: "none" }}
          id="anotherOne"
          className={styles.createAnotherOne}
        >
          <h2>Finished</h2>
          <button onClick={handleCreateAnotherOne}>Create Another One</button>
          <br />
          <button onClick={handleDone}>Done</button>
        </div>
      </div>
    </div>
  );
}
