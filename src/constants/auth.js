export const authApiUrl = process.env.NODE_ENV === 'production' 
  ? `${import.meta.env.VITE_API_URL}/auth`
  : 'http://localhost:5000/api/auth';