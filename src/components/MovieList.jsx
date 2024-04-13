
import { NavLink, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ id, title, original_title, poster_path }) => (
        <li key={id}>
          <NavLink to={`/movies/${id}`} state={{ from: location }}>
            <div>
              <h3>{title || original_title}</h3>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
