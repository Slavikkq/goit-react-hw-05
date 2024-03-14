import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>
        Go back to <Link to="/">homepage</Link>.
      </p>
    </div>
  );
}
