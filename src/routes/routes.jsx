import Layout from "@/layout/Layout";
import SignIn from "@/pages/SignIn";
import SiginUp from "@/pages/SiginUp";
import Selection from "@/pages/Selection";
import { createBrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import SelectEnvelope from "@/pages/SelectEnvelope";
import SelectPage from "@/pages/SelectPage";
import SelectStamp from "@/pages/SelectStamp";
import Home from "@/pages/Home";
import ShowCardList from "@/pages/ShowCardList";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="selectenvelope" element={<SelectEnvelope />} />
      <Route path="signup" element={<SiginUp />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="selection" element={<Selection />} />
      <Route path="giphy" element={<SelectStamp />} />
      <Route path="selectpage" element={<SelectPage />} />
      <Route path="showcardlist" element={<ShowCardList />} />
    </Route>,
  ),
);

export default router;
