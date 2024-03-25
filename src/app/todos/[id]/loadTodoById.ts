export const loadTodoById = async (id: string) => {
  'use server';

  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return res.json();
  } catch (err) {
    return null;
  }
};
