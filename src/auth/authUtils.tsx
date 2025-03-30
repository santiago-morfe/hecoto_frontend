// auth/authUtils.ts
interface DecodedJWT {
    role: 'admin' | 'user' | 'guest';
    exp: number;
    // ... otros campos del payload
}

export const decodeJWT = (token: string): DecodedJWT => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
        atob(base64).split('').map(c => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`).join('')
    );
    return JSON.parse(jsonPayload);
};