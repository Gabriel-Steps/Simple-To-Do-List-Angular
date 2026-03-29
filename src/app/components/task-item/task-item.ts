import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Task {
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css',
})
export class TaskItem {
  @Input() task!: Task;

  @Output() toggle = new EventEmitter<void>();
  @Output() remove = new EventEmitter<void>();
}
