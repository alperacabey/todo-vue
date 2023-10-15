// store.ts
import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

export const useTodoStore = defineStore({
    id: 'todo',
    state: () => ({
        todos: [] as Todo[],
    }),
    actions: {
        addItem(text: string, status: TodoStatus) {
            const newTodo: Todo = {
                id: uuidv4(),
                text,
                status: status,
                creationDate: new Date(),
            };
            this.todos.push(newTodo);
        },
        removeItem(id: string) {
            this.todos = this.todos.filter((todo) => todo.id !== id);
        },
        changeStatus(id: string, newStatus: TodoStatus) {
            const todoToChange = this.todos.find((todo) => todo.id === id);
            if (todoToChange) {
                todoToChange.status = newStatus;
            }
        },
        sortByName() {
            const backlog = this.todos.filter((todo) => todo.status === 'backlog');
            const completedAndPlanned = this.todos.filter((todo) => todo.status !== 'backlog')
            this.todos = [
                ...completedAndPlanned,
                ...backlog.sort((a, b) => a.text.localeCompare(b.text))
            ]
        },
        sortByDate() {
            const backlog = this.todos.filter((todo) => todo.status === 'backlog');
            const completedAndPlanned = this.todos.filter((todo) => todo.status !== 'backlog')
            this.todos = [
                ...completedAndPlanned,
                ...backlog.sort((a, b) => new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime())
            ]
        }
    },
    getters: {
        plannedTodos: (state) => {
            return state.todos.filter((todo) => todo.status === 'planned');
        },
        backlog: (state) => {
            return state.todos.filter((todo) => todo.status === 'backlog');
        },
        completedTodos: (state) => {
            return state.todos.filter((todo) => todo.status === 'completed');
        },
    },
});
