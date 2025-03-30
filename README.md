# Hecoto - Frontend

Frontend de la plataforma Hecoto desarrollado con React 18 y TypeScript, con autenticación JWT.

## Características Principales
- Autenticación con JWT y protección de rutas
- Enrutamiento con React Router DOM v6
- Estructura modular
- Estado global con Context API
- Integración con APIs REST

## Requisitos Previos
- Node.js v18+
- npm v9+ o yarn v1.22+

## Primeros Pasos

1. Clonar el repositorio
```bash
git clone https://github.com/tu-organizacion/hecoto-frontend.git
cd hecoto-frontend
```

2. Instalar dependencias
```bash
npm install
```

3. Configurar variables de entorno
```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_JWT_SECRET_KEY=tu_clave_secreta_local
```

4. Iniciar servidor de desarrollo
```bash
npm run dev
```

## Estructura del Proyecto
```
src/
├── api/           # Configuración de API
├── assets/        # Recursos multimedia
├── auth/          # Lógica de autenticación
├── components/    # Componentes reutilizables
├── hooks/         # Custom hooks
├── layouts/       # Diseños base
├── pages/         # Componentes de páginas
├── routes/        # Configuración de enrutamiento
├── store/         # Estado global
├── types/         # Tipos TypeScript
└── utils/         # Funciones utilitarias
```

## Scripts Principales
```bash
npm run dev        # Modo desarrollo
npm run build      # Build de producción
npm run typecheck  # Verificar tipos
npm run lint       # Linter
npm run format     # Formatear código
npm test           # Ejecutar tests
```

## Stack Tecnológico
- React 18
- TypeScript 4.9+
- Vite
- React Router DOM v6
- Context API
- JWT

## Guía de Contribución
1. Crear rama desde `develop`
2. Seguir convenciones de código
3. Validar código antes de commit
4. Crear Pull Request a `develop`

## Licencia
MIT License © 2024 Equipo Hecoto