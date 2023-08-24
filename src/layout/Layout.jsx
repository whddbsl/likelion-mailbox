import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <div className="flex h-screen justify-center pb-2 pt-2  items-center bg-primary">
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;
