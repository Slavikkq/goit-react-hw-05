import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "./Loader";
import { getCast } from "../api";

const MovieCast = () => {
  const { movieId } = useParams();
  const [actor, setActor] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const data = await getCast(movieId);
        setActor(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Something is wrong! Reload.</p>}
      {actor.length > 0 && (
        <ul className={css.list}>
          {actor.map(({ id, name, character }) => (
            <li key={id} className={css.item}>
              <div>
                <p>{name ? name : "No information available"} </p>
                <p>{character ? character : "No information available"} </p>
              </div>
            </li>
          ))}
        </ul>
      )}
      {!actor.length && <p>We don`t have nobody for this movie</p>}
    </>
  );
};

export default MovieCast;
