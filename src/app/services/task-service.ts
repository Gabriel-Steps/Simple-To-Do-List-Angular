import { Injectable } from '@angular/core';

interface Task {
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private storageKey = 'tasks';

  getTasks(): Task[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  saveTasks(tasks: Task[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }

  addTask(tasks: Task[], title: string): Task[] {
    const updated = [...tasks, { title, completed: false }];
    this.saveTasks(updated);
    return updated;
  }

  toggleTask(tasks: Task[], index: number): Task[] {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    this.saveTasks(updated);
    return updated;
  }

  removeTask(tasks: Task[], index: number): Task[] {
    const updated = tasks.filter((_, i) => i !== index);
    this.saveTasks(updated);
    return updated;
  }
}
