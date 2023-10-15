<template>
    <input :id="name" :value="inputValue" :placeholder="placeholder" @input="handleInput" @keydown.enter="clickEnter"
        class="w-full rounded py-3 px-4 text-lg border-gray-light border outline-0" autocomplete="off" />
</template>
  
<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
    name: 'TextField',
    props: {
        name: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            default: '',
        },
        value: {
            type: String,
            required: true,
        },
    },
    emits: ['update:value', 'click:enter'],
    setup(props, { emit }) {
        const inputValue = computed(() => props.value);

        const handleInput = (event: Event): void => {
            const target = event.target as HTMLInputElement;
            emit('update:value', target.value);
        };

        const clickEnter = (): void => {
            emit('click:enter');
        };

        return {
            inputValue,
            handleInput,
            clickEnter
        };
    },
});
</script>