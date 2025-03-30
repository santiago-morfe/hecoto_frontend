// routes/RoleRoute.tsx
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { UserRole } from '../types/types';

interface RoleRouteProps {
    allowedRoles: UserRole[];
}

const RoleRoute = ({ allowedRoles }: RoleRouteProps) => {
    const { userRole, isAuthenticated } = useAuth();

    if (!isAuthenticated) return <Navigate to="/login" replace />;

    return allowedRoles.includes(userRole!) ? (
        <Outlet />
    ) : (
        <Navigate to="/unauthorized" replace />
    );
};

export default RoleRoute;