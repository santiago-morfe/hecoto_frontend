// App.tsx
import { AuthProvider } from './auth/AuthContext';
import AppRoutes from './routes/routes';

function App() {
  return (
    <AuthProvider> {/* Proveedor de autenticación */}
      <AppRoutes /> {/* Aquí se montan todas las rutas */}
    </AuthProvider>
  );
}

export default App
