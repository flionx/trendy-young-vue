import { authApiUrl } from "@/constants/auth";
import { getLocalStorage, setLocalStorage } from "../localStorageUtils";

async function refreshAccessToken() {
    try {
        const refreshToken = getLocalStorage('refreshToken');
        if (!refreshToken) {
            throw new Error('No refresh token available');
        }

        const response = await fetch(`${authApiUrl}/refresh`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ refreshToken }),
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Token refresh failed');
        }

        setLocalStorage('accessToken', data.accessToken);
        return data.accessToken;
    } catch (error) {
        console.error('Refresh error:', error.message);
    }
}
// use it, if error with protected route
// if error - navigate to login