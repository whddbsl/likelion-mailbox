import Layout from '@/layout/Layout';
import Home from '@/pages/home/Home';
import { createBrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { createRoutesFromElements } from 'react-router-dom';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />} >
            <Route index element={<Home />} />
        </Route>
    )
)

export default router