import { authApiUrl } from "@/constants/auth"
import { setLocalStorage } from "../localStorageUtils";

const logIn = async (login, password) => {
    const response = await fetch(`${authApiUrl}/login`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({ login, password })
    })
    if (!response.status === 200) return false;

    const userData = await response.json();
    setLocalStorage('accessToken', userData.accessToken)
    setLocalStorage('refreshToken', userData.refreshToken)
    setLocalStorage('user', userData.user)
    return userData;
}

export default logIn