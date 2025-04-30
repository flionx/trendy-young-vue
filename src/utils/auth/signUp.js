import { authApiUrl } from '@/constants/auth';
import { setLocalStorage } from '../localStorageUtils';

const signUp = async (login, password) => {
    const response = await fetch(`${authApiUrl}/signup`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({ login, password })
    })
    return {
        isCreate: (response.status === 201), 
        error: (await response.json()).error 
    };
}

export default signUp