import { defineStore } from "pinia";
import { nextTick } from "vue";

export const useModalStore = defineStore('modal', {
    state: () => ({
        className: '',
        text: '',
        show: false,
    }),
    actions: {
        async setModal(newText, newClass) {
            this.text = newText;
            this.className = newClass;
            this.show = false;
            await nextTick();
            this.show = true;
        },
        hideModal() {
            this.show = false;
        }
    }
})