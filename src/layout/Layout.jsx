import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

function Layout() {
  return (
    <>
      <div className={styles.contaienr}>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;
