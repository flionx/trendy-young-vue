import { useModalStore } from "@/app/store/modal";

const useClipboard = () => {
    const modalStore = useModalStore();

    async function shareLink(href) {
        if (navigator.share) {
            try {
                await navigator.share({
                title: 'Trendy Young',
                text: 'Modern, Comfortable, Fashionable',
                url: href
            })   
            } catch (error) {
                console.log('Error when trying to share:', error);
            }
        } else {
            copyToClipboard(href);
        }
    }

    async function copyToClipboard(value) {
        try {
            await navigator.clipboard.writeText(value);
            modalStore.setModal('Copied to clipboard', '')
        } catch (err) {
            modalStore.setModal('Could not copy the link...', '')
        }
    }
    return {shareLink, copyToClipboard}
}

export default useClipboard