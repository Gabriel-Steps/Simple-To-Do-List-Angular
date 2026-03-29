import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskList } from './components/task-list/task-list';

interface Task {
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  imports: [FormsModule, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  tasks: Task[] = [];
  newTask: string = '';

  addTask() {
    if (!this.newTask.trim()) return;

    this.tasks.push({
      title: this.newTask,
      completed: false
    });

    this.newTask = '';
  }

  toggleTask(task: Task) {
    task.completed = !task.completed;
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
