import { useProductsStore } from "@/app/store/products";
import { scrollToUp } from "@/utils/scrollToUp";
import { computed, onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
// how terrible it looks...
const useCategoriesHeader = () => {
    const route = useRoute();
    const router = useRouter();
    const productsStore = useProductsStore();
    
    const headerTitle = computed(() => {
      if (route.path.includes('basket')) return 'Cart';
      if (route.path.includes('wishlist')) return 'Wishlist';
      return 'Catalog';
    });
    const isCatalog = computed(() => headerTitle.value === 'Catalog');
    const isOtherPage = computed(() => headerTitle.value === 'Cart' || headerTitle.value === 'Wishlist');
    
    const isActiveTarget = (target) => (target === route.params.category);
    const isAdminPage = computed(() => route.path.includes('admin'));
    const linkToPage = (target) => (isAdminPage.value ? '/store/admin/' : '/store/') + target;
    
    const activeType = ref(route.query.type || '');
    
    watch(() => activeType.value, 
      () => {
        if (!isOtherPage.value) {
          router.push(`${linkToPage((route.params.category || 'all'))}?type=${activeType.value}`);
        }
      },{ deep: true}
    );
    watch(
      [() => activeType.value, () => route.params.category],
      async ([newType, newCategory]) => {
        await productsStore.loadProducts({
          type: newType,
          target: newCategory === 'all' ? '' : newCategory,
        });
      },
      { deep: true, immediate: true }
    );
    onMounted(async () => {
      scrollToUp();
      if (!productsStore.loading && productsStore.products.length === 0) {
        await productsStore.loadProducts({
          type: activeType.value,
          target: route.params.category === 'all' ? '' : route.params.category,
        });
      }
    })
    return { isCatalog, headerTitle, linkToPage, isActiveTarget, activeType }
}

export default useCategoriesHeader