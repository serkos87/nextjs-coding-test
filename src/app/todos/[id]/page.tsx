import { Todo } from '@/app/types/todo.type';
import { UpdateForm } from '../../_components/UpdateForm/UpdateForm';
import { loadTodoById } from './loadTodoById';

type RouteParams = {
  params: {
    id: string;
  };
};

export default async function UpdateTodo({ params }: RouteParams) {
  const data: Todo = await loadTodoById(params.id);
  const { id, title } = data;

  return (
    <main>
      <h1>Todo Update</h1>
      <UpdateForm id={id} title={title} />
    </main>
  );
}
