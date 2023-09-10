import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <h1>Categories</h1>
      <div
        style={{ minHeight: "85vh" }}
        className="d-flex align-items-center gap-4"
      >
        <aside className="bg-white p-5 rounded d-flex flex-column gap-5 text-black">
          <NavLink
            className="text-black text-decoration-none nav-link"
            to={"/categories"}
          >
            History
          </NavLink>
          <NavLink
            className="text-black text-decoration-none nav-link"
            to={"/categories/story"}
          >
            Story
          </NavLink>
        </aside>

        <Outlet />
      </div>
    </>
  );
};

export default Layout;
