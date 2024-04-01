'use client';

import Link from 'next/link';
import { Todo } from '../../types/todo.type';
import styles from './TodoList.module.css';
import { DeleteForm } from '../DeleteForm/DeleteForm';

type TodoListProps = { todos: Todo[] };

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <>
      {todos?.length ? (
        todos.map((todo) => (
          <div key={todo.id} className={styles.todoListing}>
            <Link href={`/todos/${todo.id}`} className={styles.todoTitle}>
              {todo.title}
            </Link>

            <DeleteForm id={todo.id} title={todo.title} />
          </div>
        ))
      ) : (
        <h3>Failed to fetch todos</h3>
      )}
    </>
  );
};

export default TodoList;
