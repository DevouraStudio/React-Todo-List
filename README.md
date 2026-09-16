# React Project Manager
 
A simple, fast project and task manager built with React and Tailwind CSS. Create projects, track their tasks, and pick up right where you left off — everything is saved locally in your browser.
 
## Features
 
- **Create projects** with a title, description, and due date
- **Form validation** — a modal warns you if required fields (title, due date) are left empty before a project can be saved
- **Sidebar navigation** listing all your projects, with the active project highlighted
- **Project detail view** showing the title, formatted due date, and description
- **Task management** — add tasks to a project and clear them once done, right from the project view
- **Delete projects** you no longer need
- **Persistent storage** — projects and their tasks are saved to `localStorage`, so your data survives page refreshes
- **Empty state UI** guiding you to select or create a project when none is active
## Tech Stack
 
- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/) — dev server and build tooling
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [uuid](https://www.npmjs.com/package/uuid) — unique project IDs
## Getting Started
 
### Prerequisites
 
- Node.js
- Yarn (or npm)
### Installation
 
```bash
git clone https://github.com/DevouraStudio/React-Todo-List.git
cd React-Todo-List
yarn install
```
 
### Development
 
```bash
yarn dev
```
 
The app will be available at `http://localhost:5173`.
 
### Build
 
```bash
yarn build
```
 
### Preview production build
 
```bash
yarn preview
```
 
### Lint
 
```bash
yarn lint
```
 
## Project Structure
 
```
src/
├── Components/
│   ├── App.jsx          # Root component, app state, and localStorage sync
│   ├── SideBar.jsx      # Project list navigation, highlights the active project
│   ├── NewProject.jsx   # New project creation form with validation modal
│   ├── Project.jsx      # Project detail view — tasks, due date, delete/cancel
│   ├── NoProject.jsx    # Empty state shown when no project is selected
│   ├── Modal.jsx        # Reusable dialog (used for validation warnings)
│   └── Input.jsx        # Reusable input/textarea field
├── assets/
├── index.css
└── main.jsx
```
 
## License

No license specified yet.

## Created With
 
This project was originally created with [CodeSandbox](https://codesandbox.io/).

## Author

- Website - [DevouraStudio](https://www.devoura.ir)
- Frontendmentor - [@DevouraStudio](https://www.frontendmentor.io/profile/DevouraStudio)
- Github - [@DevouraStudio](https://www.github.com/DevouraStudio)
- Codepen - [@DevouraStudio](https://www.codepen.io/DevouraStudio)
- Codesandbox - [@DevouraStudio](https://codesandbox.io/u/DevouraStudio)
