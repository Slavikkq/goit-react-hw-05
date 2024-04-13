import { Suspense } from "react";
import { NavLink } from "react-router-dom";
import { Loader } from "./Loader";

export const Navigation = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
        <hr style={{ width: "100%" }} />
      </header>
      <main>
        <Suspense fallback={<Loader />}></Suspense>
      </main>
    </>
  );
};
