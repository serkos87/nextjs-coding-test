'use client';

import Link from 'next/link';
import { ITodo } from '../../interfaces/todo.interface';
import styles from './TodoList.module.css';
import { DeleteForm } from '../DeleteForm/DeleteForm';
import { useCallback, useState } from 'react';

interface ITodoListProps {
  todos: ITodo[];
}

const TodoList = ({ todos }: ITodoListProps) => {
  const [todoList, setTodoList] = useState<ITodo[]>(todos);

  const handleRemoveTodoFromList = useCallback((id: string) => {
    setTodoList((prevList) => prevList.filter((todo) => todo.id !== id));
  }, []);

  return (
    <>
      {todoList?.length ? (
        todoList.map((todo) => (
          <div key={todo.id} className={styles.todoListing}>
            <Link href={`/todos/${todo.id}`} className={styles.todoTitle}>
              {todo.title}
            </Link>

            <DeleteForm id={todo.id} title={todo.title} onTodoRemove={handleRemoveTodoFromList} />
          </div>
        ))
      ) : (
        <h3>Failed to fetch todos</h3>
      )}
    </>
  );
};

export default TodoList;
