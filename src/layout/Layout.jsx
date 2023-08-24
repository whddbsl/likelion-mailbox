import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <div className="flex h-screen justify-center items-center bg-primary">
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;
