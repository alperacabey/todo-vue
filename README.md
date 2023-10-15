### 3rd party libraries
- **vue-router** (Router)
- **pinia** (Store manager)
- **tailwind** (CSS framework)
- **vue/test-utils** (Unit testing utility library)
- **jest** (Testing framework)

---
### Folder structure

    ├── public                  # Shared files
    ├── src                     # Source files
    │   ├── asseets             # Style files & icons
    │   ├── components          # Reusable components
    |   |   ├── **/*.vue
    │   ├── router              # Routes
    │   ├── store               # Store
    │   ├── views               # Pages
    ├── tests
    │   ├── **/*.spec.ts        # Unit tests

### Requirements

- [Node.js](https://nodejs.org/) v16 or newer.

### Installation

- Clone the repo - `git clone https://github.com/alperacabey/todo-vue.git`.
- Install project dependencies — `npm install` or `yarn`.
- Launch the app — `npm run dev` or `yarn dev`

   **Client** will become available at [http://localhost:3000](http://localhost:3000/)

### Available Scripts

- `dev`
- `build`
- `test`