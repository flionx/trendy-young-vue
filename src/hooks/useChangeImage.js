import { useProductStore } from "@/app/store/product";
import supabase from "@/app/supabase";
import { ref } from "vue";

const useChangeImage = () => {
    const uploading = ref(false);
    const productStore = useProductStore();

    const changeImage = async (e, currProduct) => {
        const file = e.target.files?.[0];
        if (!file) return;
    
        uploading.value = true;
        try {
            const fileNameEnd = (Math.random() * 10000).toFixed(3);
            const fileName = `${Date.now()}_${fileNameEnd}`;
        
            const { error: uploadError } = await supabase.storage
                .from('product')
                .upload(fileName, file);
        
            if (uploadError) throw uploadError;
        
            const { data: { publicUrl } } = supabase.storage
                .from('product')
                .getPublicUrl(fileName);
            
            currProduct.img = publicUrl; // for TEST, new image
        } catch (error) {
            console.error("Error uploading image:", error);
        } finally {
            uploading.value = false;
        }
    }

    return {changeImage, uploading}
}

export default useChangeImage