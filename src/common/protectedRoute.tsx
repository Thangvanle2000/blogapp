import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
  const user = localStorage.getItem('access_token');
  return user === null ? <Navigate to='/' /> : <Outlet />;
};

export default ProtectedRoutes;
