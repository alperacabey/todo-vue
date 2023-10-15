
type TodoStatus = 'planned' | 'backlog' | 'completed';

type TodoAction = 'delete' | 'moveToBacklog' | 'moveToPlanned'

interface Todo {
    id: string;
    text: string;
    status: TodoStatus;
    creationDate: Date;
}

interface Tab {
    name: string;
    label: string;
    url: string;
}
