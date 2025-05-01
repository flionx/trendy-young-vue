import { authApiUrl } from "@/constants/auth"

const logOut = async () => {
  const loggedOut = await fetch(`${authApiUrl}/logout`, {
    credentials: 'include'
  })
  return (loggedOut.ok)
}

export default logOut