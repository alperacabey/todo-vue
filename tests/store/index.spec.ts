import { setActivePinia, createPinia } from 'pinia'
import { useTodoStore } from '@/store';

describe('useTodoStore', () => {

    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('should add a new item', () => {
        const store = useTodoStore();

        const initialTodoCount = store.todos.length;
        store.addItem('Test Todo', 'planned');

        expect(store.todos.length).toBe(initialTodoCount + 1);

        const addedTodo = store.todos[store.todos.length - 1];
        expect(addedTodo.text).toBe('Test Todo');
        expect(addedTodo.status).toBe('planned');
    });

    it('should remove an item', () => {
        const store = useTodoStore();
        store.addItem('Test Todo', 'planned');

        const initialTodoCount = store.todos.length;

        const todoToDelete = store.todos[0];
        store.removeItem(todoToDelete.id);

        expect(store.todos.length).toBe(initialTodoCount - 1);

        expect(store.todos.includes(todoToDelete)).toBe(false);
    });
});
