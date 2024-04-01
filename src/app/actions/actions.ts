'use server';

// import { revalidatePath } from 'next/cache';
import { z } from 'zod';

type ButtonParams = {
  id: string;
  title: string;
};

type UpdateParams = {
  formData?: FormData;
  buttonData?: ButtonParams;
};

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

    // Recently revalidatePath is not working
    // revalidatePath('/todos');

    return {
      message: `"${data.title}" todo is successfully created`,
    };
  } catch (error) {
    return { message: `Failed to create todo` };
  }
};

export const updateTodo = async (id: string, todoTitle: string) => {
  // TODO Add validations
  try {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        todoTitle,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    // Recently revalidatePath is not working
    // revalidatePath('/todos');

    return {
      message: `"${todoTitle}" todo is successfully created`,
    };
  } catch (error) {
    return { message: `Failed to create todo` };
  }
};

// Mediator to handle delete action not only from form action but also from button event
// Works quite strange with a button event and should be refactored
export const deleteTodo = async (params: UpdateParams) => {
  const { formData, buttonData } = params;
  let reqParams: ButtonParams;

  if (!!formData) {
    reqParams = getDeleteFormDataParams(formData);
  } else if (!!buttonData) {
    reqParams = { ...buttonData };
  } else {
    return;
  }

  try {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${reqParams.id}`, {
      method: 'DELETE',
    });

    // Recently revalidatePath is not working
    // revalidatePath('/todos');

    return {
      message: `"${reqParams.title}" todo is successfully deleted`,
    };
  } catch (error) {
    return { message: `Failed to delete todo` };
  }
};

const getDeleteFormDataParams = (formData: FormData) => {
  const schema = z.object({
    id: z.string(),
    title: z.string(),
  });

  const data = schema.parse({
    id: formData.get('id'),
    title: formData.get('title'),
  });

  return data;
};
