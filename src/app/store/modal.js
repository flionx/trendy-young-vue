import { defineStore } from "pinia";
import { nextTick } from "vue";
let hideTimeout = null; // for anim
let removeTimeout = null;

export const useModalStore = defineStore('modal', {
  state: () => ({
    className: '',
    text: '',
    show: false,
    isHiding: false, 
  }),
  actions: {
    async setModal(newText, newClass) {
      this.clearTimers();
      this.text = newText;
      this.className = newClass;
      this.isHiding = false;
      this.show = false;
      await nextTick();
      this.show = true;

      hideTimeout = setTimeout(() => {
        this.isHiding = true;
      }, 1200);

      removeTimeout = setTimeout(() => {
        this.hideModal();
      }, 1800);
    },
    hideModal() {
      this.show = false;
    },
    clearTimers() {
      if (hideTimeout) clearTimeout(hideTimeout);
      if (removeTimeout) clearTimeout(removeTimeout);
      hideTimeout = null;
      removeTimeout = null;
    }
  }
});
