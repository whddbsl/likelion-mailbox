import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css'


function Layout() {
       
  return (
    <>
          <div className='contaoner'>
              <main>
                  <Outlet />
              </main>
      </div>
    </>
  );
}

export default Layout;
