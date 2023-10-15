<template>
    <div class="flex justify-between">
        <div class="flex items-start">
            <label class="relative flex cursor-pointer items-center mr-2" :for="'checkbox' + todo.id"
                data-ripple-dark="true">
                <input type="checkbox"
                    class="appearance-none w-6 h-6 border border-gray-light rounded-full checked:bg-blue peer relative cursor-pointer rounded-full"
                    :checked="todo.status === 'completed'" @click="handleClick" :id="'checkbox' + todo.id"
                    :disabled="todo.status === 'backlog'" />
                <div
                    class="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white peer-checked:opacity-100">
                    <img class="h-3.5 w-3.5" src="@/assets/icons/check.svg" alt="Check" />
                </div>
            </label>
            <div class="flex flex-col">
                <span :class="{
                    'text-lg': true,
                    'text-gray line-through': todo.status === 'completed'
                }">{{ todo.text }}</span>
                <small class="text-gray text-sm mt-2">{{ todo.creationDate.toLocaleString() }}</small>
            </div>
        </div>
        <ActionButton v-if="todo.status === 'planned'" :id="todo.id" @handle:action="handleAction" />
        <Button v-else-if="todo.status === 'backlog'" secondary @click="handleAction('moveToPlanned')">Move to List</Button>
    </div>
</template>
  
<script lang="ts" setup>
import ActionButton from '@/components/common/ActionButton.vue';
import Button from "@/components/common/Button.vue"

const { todo } = defineProps<{
    todo: Todo;
}>();

const emit = defineEmits(['click:item', 'handle:action']);

const handleClick = () => emit('click:item');

const handleAction = (action: TodoAction) => emit('handle:action', todo.id, action);

</script>
  