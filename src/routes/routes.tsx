// routes/routes.ts
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import RoleRoute from './RoleRoute';

const AppRoutes = () => {
    return (
        <Routes>
            {/* Rutas públicas */}

            {/* Rutas privadas (requiere autenticación) */}
            <Route element={<PrivateRoute />}>


                <Route element={<RoleRoute allowedRoles={['admin']} />}>
                    {/* Aquí van las rutas que solo puede ver el admin */}
                </Route>


                <Route element={<RoleRoute allowedRoles={['admin', 'user']} />}>
                    {/* Aquí van las rutas que puede ver el admin y el user */}
                </Route>
            </Route>
        </Routes>
    );
};

export default AppRoutes;
export { AppRoutes };