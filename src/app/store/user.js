import { getLocalStorage, setLocalStorage } from "@/utils/localStorageUtils";
import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
        user: getLocalStorage('user') || null,
    }),
    actions: {
        setUser(user) {
            this.user = user
            setLocalStorage('user', this.user);
        },
        resetUser() {
            this.user = null;
            setLocalStorage('user', null);
        },
    }
})