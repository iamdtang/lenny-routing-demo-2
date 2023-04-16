import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <div className="container mt-2">
      <Link to="/">Hobbies</Link>
      <Link to="/hobbies/new">Create hobby</Link>

      {/* where we want the dynamic content */}
      <Outlet />
    </div>
  );
}
