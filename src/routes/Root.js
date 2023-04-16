import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="container mt-2">
      <Link to="/hobbies/new">Create Hobby</Link>

      {/* where we want the dynamic content */}
      <Outlet />
    </div>
  );
}
