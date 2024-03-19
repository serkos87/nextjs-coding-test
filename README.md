# Next.js coding test

## The task

Implement the missing "Todos" section consisting of the following pages:

### `/todos`

This page shows the list of all todos, where each todo in the list has a "delete" button. The page also has a link to the `/todos/new` page.

### `/todos/new`

This page allows the user to create a new todo.

### `/todos[id]`

This page allows the user to edit the todo with the specified id. The page also has a "delete" button that allows the user to delete the todo.

## Other requirements

All data should be loaded from the mock API service provided by [JSON Placeholder](https://jsonplaceholder.typicode.com/). Their API also provides the endpoints required for creating, updating, and deleting todos. **Note:** this is a mock API, so creating/updating/deleting will not really update the resources on the server.

The application should take advantage of [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components) and [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations) whenever appropriate.

As for the visual design, the new pages should look like the mockup images in the `_mockups` folder.

## Submission

Please create a pull request in this repository with your submission.
