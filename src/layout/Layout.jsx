import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <div>
        <main className="bg-primary w-screen h-screen">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;
