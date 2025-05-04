import { useModalStore } from "@/app/store/modal";
import { useUserStore } from "@/app/store/user";
import logOut from "@/utils/auth/logOut";

const useLogout = (closeModal) => {
    const userStore = useUserStore();
    const modalStore = useModalStore();

    async function logout() {
        closeModal();
        await logOut();
        userStore.resetUser();
        localStorage.clear();
        modalStore.setModal('Successful logout')
    }
    return logout;
}

export default useLogout