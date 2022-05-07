import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as exercisesAPI from "../../utilities/exercises-api";
import styles from "./Category.module.css";
export default function Category({ user }) {
  //declaring variables and states
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const { type } = useParams();
  const Navigate = useNavigate();

  // fetching  the data  selected chosing the type of workout

  const getSpecificData = async () => {
    try {
      const response = await exercisesAPI.GetExerciseType(user._id, type);
      setData(response);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  useEffect(() => {
    getSpecificData();
  }, []);

  // handle delete
  const handleDelete = async (exerciseId) => {
    try {
      const response = await exercisesAPI.Delete(exerciseId);
    } catch (err) {
      setError(err.message);
    } finally {
      getSpecificData();
    }
  };
  // handle back
  const handleBack = () => {
    Navigate("/exercises");
  };
  return (
    <div className={styles.main}>
      <div className={styles.exerciseTypeContainer}>
        <h1 className={styles.type}> Category {type}</h1>
        <ul className={styles.exercisesList}>
          {data &&
            data.map((exercise) => {
              return (
                <div className={styles.oneListItem} key={exercise._id}>
                  <Link to={`/exercises/${type}/${exercise._id}`}>
                    {exercise.name}
                  </Link>
                  <button
                    className={styles.delete}
                    onClick={() => {
                      handleDelete(exercise._id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
        </ul>

        <button onClick={handleBack} className={styles.back}>
          back
        </button>
      </div>
    </div>
  );
}
