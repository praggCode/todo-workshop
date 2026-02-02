# Post App Backend

This application has been converted from a Todo app to a **Post (Article) App**, reusing the existing file structure.

## Features
- **CRUD Operations**: Create, Read, Update, Delete for Posts.
- **Resource**: `Post` (Title, Content, Author, CreatedAt).
- **Architecture**: OOP-based (Controller, Service, Schema, Route).

## Code Base Note
To maintain the existing project structure, the filenames remain `todo.*` but the internal logic is now for **Posts**:
- `src/Schema/todo.schema.ts` → **Post Schema**
- `src/Services/todo.service.ts` → **Post Service**
- `src/controllers/todo.controller.ts` → **Post Controller**
- `src/routes/todo.routes.ts` → **Post Routes** (`/posts`)

## API Endpoints (`/posts`)

| Method | Endpoint | Description          | Payload |
| :----- | :------- | :------------------- | :------ |
| GET    | `/posts`      | Get all posts        | - |
| GET    | `/posts/:id`   | Get post by ID       | - |
| POST   | `/posts`      | Create a new post    | `{ "title": "...", "content": "...", "author": "..." }` |
| PUT    | `/posts/:id`   | Update post          | `{ "title": "..." }` |
| DELETE | `/posts/:id`   | Delete post          | - |

## Installation & Run
1. `npm install`
2. `npm run dev` (Runs on port 4000)

**Note**: Ensure valid MongoDB connection string in `src/app.ts`.
