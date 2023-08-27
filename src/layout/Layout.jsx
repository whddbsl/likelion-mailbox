import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="flex min-h-screen bg-primary justify-center">
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;
