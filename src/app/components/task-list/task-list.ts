import { Component, OnInit } from '@angular/core';
import { TaskItem } from '../task-item/task-item';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task-service';
import { CommonModule } from '@angular/common';

interface Task {
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-task-list',
  imports: [TaskItem, FormsModule, CommonModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList implements OnInit{
  tasks: Task[] = [];
  newTask: string = '';

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  addTask() {
    console.log("ANTES:", this.tasks);

    if (!this.newTask.trim()) return;

    this.tasks = this.taskService.addTask(this.tasks, this.newTask);

    console.log("DEPOIS:", this.tasks);

    this.newTask = '';
  }

  toggleTask(index: number) {
    this.tasks = this.taskService.toggleTask(this.tasks, index);
  }

  removeTask(index: number) {
    this.tasks = this.taskService.removeTask(this.tasks, index);
  }
}
