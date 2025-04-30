import { authApiUrl } from "@/constants/auth";

async function refreshAccessToken() {
    try {
        const response = await fetch(`${authApiUrl}/refresh`, {
            credentials: 'include',
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Token refresh failed');
        }

        return data.accessToken;
    } catch (error) {
        console.error('Refresh error:', error.message);
    }
}
// use it, if error with protected route
// if error - navigate to login