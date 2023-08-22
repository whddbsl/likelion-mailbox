const { default: Layout } = require('@/layout/Layout');
const { Route } = require('react-router-dom');
const { createRoutesFromElements } = require('react-router-dom');
const { createBrowserRouter } = require('react-router-dom');

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />} >

        </Route>
    )
)

export default router