# 🧠 Task Management Application
The Task Management Application is a comprehensive Angular-based project designed to help users manage their tasks efficiently. This application provides a user-friendly interface for adding, toggling, and removing tasks, utilizing local storage to persist task data. The core features of the application include task management, routing, and error handling, making it a robust and reliable tool for task organization.

## 🚀 Features
- **Task Management**: The application allows users to add, toggle, and remove tasks, providing a simple yet effective way to manage their to-do lists.
- **Local Storage**: Task data is persisted in local storage, ensuring that user data is retained even after the application is closed.
- **Error Handling**: The application includes error handling mechanisms to catch and log any errors that occur during the bootstrapping process, providing a more stable user experience.
- **Routing**: Although the current implementation does not include explicit routes, the application is designed to be extensible, allowing for the easy addition of routes as needed.
- **Component-Based Architecture**: The application follows a component-based architecture, with separate components for task lists and task items, promoting modularity and reusability.

## 🛠️ Tech Stack
- **Angular**: The application is built using Angular, a popular JavaScript framework for building single-page applications.
- **TypeScript**: The application uses TypeScript, a superset of JavaScript that provides optional static typing and other features to improve the development experience.
- **@angular/core**: The application depends on the @angular/core library for component decoration and functionality.
- **@angular/forms**: The application uses the @angular/forms library for form handling.
- **@angular/router**: The application depends on the @angular/router library for routing configuration.
- **Local Storage**: The application utilizes local storage to store and retrieve task data.

## 📦 Installation
To install the application, follow these steps:
1. Clone the repository using `git clone`.
2. Navigate to the project directory using `cd`.
3. Install the dependencies using `npm install`.
4. Build the application using `ng build`.
5. Serve the application using `ng serve`.

## 💻 Usage
To use the application, follow these steps:
1. Open a web browser and navigate to `http://localhost:4200`.
2. Add tasks by entering a task title and clicking the "Add" button.
3. Toggle task completion by clicking the checkbox next to the task.
4. Remove tasks by clicking the "Remove" button next to the task.

## 📂 Project Structure
```markdown
├── 📁 .angular
├── 📁 public
│   └── 📄 favicon.ico
├── 📁 src
│   ├── 📁 app
│   │   ├── 📁 components
│   │   │   ├── 📁 task-item
│   │   │   │   ├── 🎨 task-item.css
│   │   │   │   ├── 🌐 task-item.html
│   │   │   │   ├── 📄 task-item.spec.ts
│   │   │   │   └── 📄 task-item.ts
│   │   │   └── 📁 task-list
│   │   │       ├── 🎨 task-list.css
│   │   │       ├── 🌐 task-list.html
│   │   │       ├── 📄 task-list.spec.ts
│   │   │       └── 📄 task-list.ts
│   │   ├── 📁 services
│   │   │   ├── 📄 task-service.spec.ts
│   │   │   └── 📄 task-service.ts
│   │   ├── 📄 app.config.ts
│   │   ├── 🎨 app.css
│   │   ├── 🌐 app.html
│   │   ├── 📄 app.routes.ts
│   │   ├── 📄 app.spec.ts
│   │   └── 📄 app.ts
│   ├── 🌐 index.html
│   ├── 📄 main.ts
│   └── 🎨 styles.css
├── ⚙️ .editorconfig
├── ⚙️ .gitignore
├── ⚙️ .prettierrc
├── 📝 README.md
├── ⚙️ angular.json
├── ⚙️ package-lock.json
├── ⚙️ package.json
├── ⚙️ tsconfig.app.json
├── ⚙️ tsconfig.json
└── ⚙️ tsconfig.spec.json
```
