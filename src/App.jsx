import { RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';
import router from './routes/routes';

function App() {
       
  return (
    <>
      <RouterProvider router={router}>
        <Layout />
      </RouterProvider>
    </>
  );
}

export default App;