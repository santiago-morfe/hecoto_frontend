// auth/AuthContext.tsx
import { createContext, useState, ReactNode, useEffect, useMemo } from 'react';
import { UserRole } from '../types/types';
import { decodeJWT } from './authUtils';

// Movemos la interfaz y el contexto a un archivo separado
interface AuthContextType {
    isAuthenticated: boolean;
    userRole: UserRole | null;
    login: (token: string) => void;
    logout: () => void;
}

// Creamos el contexto con un valor predeterminado
const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    userRole: null,
    login: () => { },
    logout: () => { },
});

// Solo exportamos el componente AuthProvider desde este archivo
export function AuthProvider({ children }: { children: ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [userRole, setUserRole] = useState<UserRole | null>(null);

    useEffect(() => {
        const checkAuthStatus = () => {
            const token = localStorage.getItem('token');
            if (!token) return;

            try {
                const { role, exp } = decodeJWT(token);
                const isTokenValid = exp * 1000 > Date.now();

                if (isTokenValid) {
                    setIsAuthenticated(true);
                    setUserRole(role);
                } else {
                    handleLogout();
                }
            } catch (error) {
                console.error('Error al validar el token:', error);
                handleLogout();
            }
        };

        checkAuthStatus();
    }, []);

    const handleLogin = (token: string) => {
        try {
            const { role } = decodeJWT(token);
            localStorage.setItem('token', token);
            setIsAuthenticated(true);
            setUserRole(role);
        } catch (error) {
            console.error('Error al procesar el token de inicio de sesión:', error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        setUserRole(null);
    };

    const contextValue = useMemo(
        () => ({
            isAuthenticated,
            userRole,
            login: handleLogin,
            logout: handleLogout,
        }),
        [isAuthenticated, userRole]
    );

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;