import { Outlet } from 'react-router';
import AuthService from './AuthService';
import LoginPage from './LoginPage';

export default function ProtectedRoutes() {
  const isAuth = AuthService.useAuth();
  return isAuth ? <Outlet /> : <LoginPage unauthed={true} />;
}
