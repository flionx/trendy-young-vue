import { authApiUrl } from "@/constants/auth";

async function refreshAccessToken() {
    const response = await fetch(`${authApiUrl}/refresh`, {
        credentials: 'include',
    });

    if (!response.ok) throw Error('Failed to refresh token')
}
export default refreshAccessToken;