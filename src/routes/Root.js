import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="container mt-2">
      {/* where we want the dynamic content */}
      <Outlet />
    </div>
  );
}
