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

    const user = await response.json();
    setLocalStorage('user', user)
    return user;
}

export default logIn