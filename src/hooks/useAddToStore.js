import useBasketStore from "@/app/store/basket";
import { useModalStore } from "@/app/store/modal";
import { useWishlistStore } from "@/app/store/wishlist";

export function useAddToStore() {    
    const basketStore = useBasketStore();
    const wishlistStore = useWishlistStore();
    const modalStore = useModalStore();

    function addToBasket(product) {
        basketStore.addToBasket(product)
        modalStore.setModal('Added to Cart', 'basket')
    }

    function toggleWishlist(product, isLike) {    
        if (isLike) { 
            wishlistStore.deleteFromWishlist(product._id);
            modalStore.setModal('Removed from Wishlist', 'like');
        } else {
            wishlistStore.addToWishlist(product);
            modalStore.setModal('Added to Wishlist', 'like');
        }
    }
    return {addToBasket, toggleWishlist}
}
