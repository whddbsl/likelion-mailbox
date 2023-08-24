// import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import SelectPage from "@/pages/selectpages/SelectPage";

function Layout() {
  return (
    <>
      <div className={styles.contaienr}>
        {/* <main>
          <Outlet />
        </main> */}
        <SelectPage />
      </div>
    </>
  );
}

export default Layout;
