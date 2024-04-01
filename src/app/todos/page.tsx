import TodoList from '../_components/TodoList/TodoList';
import { Todo } from '../types/todo.type';
import { loadTodos } from '../_components/TodoList/loadTodos';
import Link from 'next/link';
import styles from './Todo.module.css';

export default async function Todos() {
  const data: Todo[] = await loadTodos();

  return (
    <main>
      <h1>Todos</h1>
      <Link href={`/todos/new`} className={styles.todoLink}>
        Add New Todo
      </Link>
      <TodoList todos={data} />
    </main>
  );
}
