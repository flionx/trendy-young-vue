<template>
    <div class="select" ref="selectRef">
        <div class="select__top" @click="toggleOpen" :class="{border: hasBorder}">
            <span>{{ selectedLabel }}</span>
            <span class="arrow" :class="{ open: isOpen }">></span>
        </div>
        <ul v-if="isOpen" class="select__list">
            <li
                v-for="(option, index) in options"
                :key="index"
                @click="selectOption(option)"
                :class="{ selected: option === modelValue }"
            >
                {{ option }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

const props = defineProps({
    modelValue: String,
    options: Array,
    hasBorder: Boolean,
    default: {
        type: String,
        default: 'Select option'
    }
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)
const selectRef = ref(null)

const toggleOpen = () => {
    isOpen.value = !isOpen.value
}

const selectOption = (option) => {
    emit('update:modelValue', option)
    isOpen.value = false
}

const selectedLabel = computed(() => {
    return props.modelValue || props.default
})

const handleClickOutside = (e) => {
    if (selectRef.value && !selectRef.value.contains(e.target)) {
        isOpen.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.select {
    position: relative;
    width: 200px;
    font-family: inherit;
}
.select__top {
    background: var(--text-color);
    color: var(--bg-color);
    padding: 10px 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    cursor: pointer;
}
.border {
    border: 1px solid var(--gray-light-text);
}
.select__list {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    right: 0;
    background: var(--text-color);
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 100;
    max-height: 200px;
    overflow-y: auto;
}
.select__list li {
    padding: 10px 12px;
    color: var(--bg-color);
    transition: background 0.2s;
    cursor: pointer;
}
.select__list li:hover {
    background: var(--bg-hover);
}
.select__list li.selected {
    background: var(--bg-active-hover);
}
.arrow {
    font-weight: 700;
    transform: rotate(90deg);
    transition: transform 0.3s;
}
.arrow.open {
    transform: rotate(-90deg);
}
</style>
