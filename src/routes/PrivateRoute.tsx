// routes/PrivateRoute.tsx
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';

/**
 * A component that restricts access to routes based on the user's authentication status.
 * 
 * This component checks if the user is authenticated using the `useAuth` hook. If the user
 * is authenticated, it renders the child routes using the `Outlet` component. Otherwise,
 * it redirects the user to the login page using the `Navigate` component.
 * 
 * @returns {JSX.Element} The `Outlet` component if the user is authenticated, or a 
 * `Navigate` component redirecting to the login page if not.
 */
const PrivateRoute = () => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;