import Layout from '@/layout/Layout';
import SiginUp from '@/pages/SiginUp';
import SignIn from '@/pages/SignIn';
import Home from '@/pages/home/Home';
import ViewCard from '@/pages/viewCard/ViewCard';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import WriteCard from '../pages/writeCard/WriteCard';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="writecard" element={<WriteCard />} />
      <Route path="viewcard" element={<ViewCard />} />
      <Route path="signup" element={<SiginUp />} />
      <Route path="signin" element={<SignIn />} />
    </Route>
  )
);

export default router;
