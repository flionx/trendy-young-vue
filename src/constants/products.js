export const productTargets = ['women', 'men', 'children', 'all'];
export const productTypes = ['casual', 'formal', 'sport', 'sleep'];

export const productApiUrl = process.env.NODE_ENV === 'production' 
  ? `${import.meta.env.VITE_API_URL}/auth`
  : 'http://localhost:5000/api/product';
