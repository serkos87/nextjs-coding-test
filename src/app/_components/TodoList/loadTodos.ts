export const loadTodos = async () => {
  'use server';

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
    return res.json();
  } catch (err) {
    return [];
  }
};
