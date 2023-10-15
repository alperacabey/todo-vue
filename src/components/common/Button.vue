<template>
    <button :class="{
        'rounded min-w-max border': true,
        'bg-blue text-white text-lg px-4 py-3 border-blue-dark': primary,
        'bg-white text-blue text-md px-3 py-2 border-light-gray': secondary,
        'border-gray bg-gray-light': isDisabled
    }" :disabled="isDisabled" @click="handleClick">
        <slot></slot>
    </button>
</template>

<script lang="ts" setup>
const { isDisabled, primary, secondary } = defineProps<{
    isDisabled?: boolean;
    primary?: boolean;
    secondary?: boolean;
}>();

const emit = defineEmits(['handle:click']);

const handleClick = () => emit('handle:click');
</script>
  