import { RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';
import router from './routes/routes';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './context/AuthContext';

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router}>
          <Layout />
        </RouterProvider>
        <Toaster />
      </AuthProvider>
    </>
  );
}

export default App;
