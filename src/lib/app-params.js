export const appParams = {
  isProduction: import.meta.env.MODE === 'production',
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  appId: import.meta.env.VITE_APP_ID || 'thubalethu',
  token: localStorage.getItem('auth_token') || null
};