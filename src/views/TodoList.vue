<template>
    <div>
        <div class="pb-28">
            <div class="border-b py-3 px-4 md:px-0">
                <span @click="toggleCollapse" class="cursor-pointer flex items-center text-lg text-gray">
                    <img v-if="!collapsed" src="@/assets/icons/arrow-down.svg" alt="Collapse" class="mr-2" />
                    <img v-else src="@/assets/icons/arrow-right.svg" alt="Expand" class="mr-2" />
                    {{ completedTodos.length }} Done
                </span>
                <ul v-if="!collapsed">
                    <li v-for="(todo, index) in completedTodos" :key="todo.id + index" class="mt-4">
                        <TodoItem :todo="todo" @click:item="changeStatus(todo)" />
                    </li>
                </ul>
            </div>
            <ul class="mb-3 px-4 md:px-0">
                <li v-for="(todo, index) in plannedTodos" :key="todo.id + index" class="mt-4">
                    <TodoItem :todo="todo" @click:item="changeStatus(todo)" @handle:action="handleAction" />
                </li>
            </ul>
            <ItemAddBox @add:item="addItem" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import ItemAddBox from '@/components/ItemAddBox.vue';
import TodoItem from '@/components/common/TodoItem.vue'
import { useTodoStore } from '@/store';

export default defineComponent({
    name: 'TodoList',
    components: {
        ItemAddBox,
        TodoItem
    },
    setup() {
        const store = useTodoStore();
        const plannedTodos = computed(() => store.plannedTodos);
        const completedTodos = computed(() => store.completedTodos);

        const collapsed = ref(true);

        const toggleCollapse = () => {
            collapsed.value = !collapsed.value;
        };

        const addItem = (value: string): void => {
            store.addItem(value, 'planned')
        }

        const handleAction = (id: string, action: TodoAction) => {
            switch (action) {
                case 'delete': store.removeItem(id)
                    break;
                case 'moveToBacklog': store.changeStatus(id, 'backlog')
                    break;
                case 'moveToPlanned': store.changeStatus(id, 'planned')
                    break;
                default:
                    break;
            }
        }

        const changeStatus = (todo: Todo) => {
            if (todo.status === 'completed') {
                store.changeStatus(todo.id, 'planned')
            } else if (todo.status === 'planned') {
                store.changeStatus(todo.id, 'completed')
            }
        }

        return {
            plannedTodos,
            completedTodos,
            collapsed,
            addItem,
            toggleCollapse,
            changeStatus,
            handleAction
        }
    }
})
</script>