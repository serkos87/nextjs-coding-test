'use server';

// import { revalidatePath } from 'next/cache';
import { z } from 'zod';

export const createTodo = async (prevState: any, formData: FormData) => {
  const schema = z.object({
    title: z.string(),
  });

  const data = schema.parse({
    title: formData.get('title'),
  });

  try {
    await fetch(`https://jsonplaceholder.typicode.com/todos`, {
      method: 'POST',
      body: JSON.stringify({
        title: data.title,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    // revalidatePath('/todos');

    return {
      message: `"${data.title}" todo is successfully created`,
    };
  } catch (error) {
    return { message: `Failed to create todo` };
  }
};

export const deleteTodo = async (prevState: any, formData: FormData) => {
  const schema = z.object({
    id: z.string(),
    title: z.string(),
  });

  const data = schema.parse({
    id: formData.get('id'),
    title: formData.get('title'),
  });

  try {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${data.id}`, {
      method: 'DELETE',
    });

    return {
      message: `"${data.title}" todo is successfully deleted`,
    };
  } catch (error) {
    return { message: `Failed to delete todo` };
  }
};
