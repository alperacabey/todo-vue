<template>
    <div class="relative inline-block text-left" :id="'action-button-' + $props.id">
        <button :class="{
            'h-10 w-10 rounded-full hover:bg-chrome flex items-center justify-center group': true,
            'bg-chrome': isMenuOpen
        }" @click="toggleMenu">
            <img src="@/assets/icons/dots.svg" alt="Options" />
        </button>
        <div v-if="isMenuOpen" class="absolute z-50 right-12 top-0 bg-white rounded-md border">
            <ul class="w-max text-blue cursor-pointer">
                <li class="px-3 py-2 border-b text-md" @click="handleAction('delete')">Delete</li>
                <li class="px-3 py-2 text-md" @click="handleAction('moveToBacklog')">Move to Backlog</li>
            </ul>
        </div>
    </div>
</template>
  
<script lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
    name: 'ActionButton',
    emits: ['handle:action'],
    props: ['id'],
    setup(props, { emit }) {
        const isMenuOpen = ref(false);

        const toggleMenu = () => {
            isMenuOpen.value = !isMenuOpen.value;
        };

        const handleAction = (action: TodoAction) => {
            isMenuOpen.value = false;
            emit('handle:action', action);
        };

        const clickOutside = (event: MouseEvent) => {
            if (isMenuOpen.value) {
                const button = document.getElementById('action-button-' + props.id);
                if (button && !button.contains(event.target as Node)) {
                    isMenuOpen.value = false;
                }
            }
        };

        onMounted(() => {
            window.addEventListener('click', clickOutside);
        });

        onBeforeUnmount(() => {
            window.removeEventListener('click', clickOutside);
        });

        return {
            isMenuOpen,
            toggleMenu,
            handleAction,
        };
    },
};
</script>
  