import { ITodo } from '@/app/interfaces/todo.interface';
import { UpdateForm } from '../../_components/UpdateForm/UpdateForm';
import { loadTodoById } from './loadTodoById';

export default async function UpdateTodo({ params }: { params: { id: string } }) {
  const data: ITodo = await loadTodoById(params.id);
  const { id, title } = data;

  return (
    <main>
      <h1>Todo Update</h1>
      <UpdateForm id={id} title={title} />
    </main>
  );
}
