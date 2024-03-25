import TodoList from '../_components/TodoList/TodoList';
import { ITodo } from '../interfaces/todo.interface';
import { loadTodos } from '../_components/TodoList/loadTodos';
import Link from 'next/link';

export default async function Todos() {
  const data: ITodo[] = await loadTodos();

  return (
    <main>
      <h1>Todos</h1>
      <Link href={`/todos/new`}>Add New Todo</Link>
      <TodoList todos={data} />
    </main>
  );
}
