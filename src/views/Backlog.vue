<template>
    <div>
        <div class="pb-28">
            <SearchBox :searchText="searchText" @update:text="updateSearchText" @sort:Date="sortByDate"
                @sort:Name="sortByName" />
            <ul class="mb-3 px-4 md:px-0">
                <li v-for="(todo, index) in filteredBacklog" :key="todo.id + index" class="mt-4">
                    <TodoItem :todo="todo" @handle:action="handleAction" />
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
import SearchBox from '@/components/SearchBox.vue';
import { useTodoStore } from '@/store';

export default defineComponent({
    name: 'Backlog',
    components: {
        ItemAddBox,
        TodoItem,
        SearchBox
    },
    setup() {
        const store = useTodoStore();

        const searchText = ref<string>('');
        const backlog = computed(() => store.backlog);
        const filteredBacklog = computed(() =>
            searchText.value ? backlog.value.filter(todo => todo.text.toLowerCase().includes(searchText.value.toLowerCase())) : backlog.value
        );

        const addItem = (value: string): void => {
            store.addItem(value, 'backlog')
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

        const updateSearchText = (value: string) => {
            searchText.value = value;
        }

        const sortByName = () => store.sortByName()

        const sortByDate = () => store.sortByDate()

        return {
            searchText,
            filteredBacklog,
            addItem,
            handleAction,
            sortByName,
            sortByDate,
            updateSearchText
        }
    }
})
</script>