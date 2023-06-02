import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: { description: string, completed: boolean, status: string }[] = [];
  @Input() filter: string = 'all';
  filteredTasks: { description: string, completed: boolean, status: string }[] = [];

  ngOnChanges() {
    this.filterTasks();
  }

  filterTasks() {
    if (this.filter === 'completed') {
      this.filteredTasks = this.tasks.filter(task => task.completed);
    } else if (this.filter === 'uncompleted') {
      this.filteredTasks = this.tasks.filter(task => !task.completed);
    } else {
      this.filteredTasks = this.tasks;
    }
  }

  updateTaskStatus(task: { description: string, completed: boolean, status: string }) {
    task.completed = !task.completed;
  }
}
