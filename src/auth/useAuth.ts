// auth/useAuth.ts
import { useContext } from 'react';
import AuthContext from './AuthContext';

// Movemos el hook useAuth a su propio archivo
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }
  return context;
}