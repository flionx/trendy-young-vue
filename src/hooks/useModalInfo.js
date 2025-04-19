import { nextTick, reactive } from "vue";

export function useModalInfo() {
    const modalInfo = reactive({
        className: '',
        text: 'Added to',
        show: false,
    })
    async function setModalInfo(text, className) {
        modalInfo.text = text;
        modalInfo.className = className;
        modalInfo.show = false;
        await nextTick();
        modalInfo.show = true;
    }

    return {modalInfo, setModalInfo}
}