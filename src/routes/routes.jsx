import Layout from "@/layout/Layout";
import SignIn from "@/pages/SignIn";
import SiginUp from "@/pages/SiginUp";
import SelectLion from "@/pages/SelectLion";
import { createBrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import SelectEnvelope from "@/pages/SelectEnvelope";
import SelectPage from "@/pages/SelectPage";
import Home from "@/pages/Home";
import ShowCardList from "@/pages/ShowCardList";
import SelectStamp from "@/pages/SelectStamp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="signup" element={<SiginUp />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="selectLion" element={<SelectLion />} />
      <Route path="selectpage" element={<SelectPage />} />
      <Route path="showcardlist" element={<ShowCardList />} />
      <Route path="selectenvelope" element={<SelectEnvelope />} />
      <Route path="gifhy" element={<SelectStamp />} />
    </Route>,
  )
);

export default router;
