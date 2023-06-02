import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: { description: string, completed: boolean, status: string }[] = [];
  currentFilter: string = 'all';

  addTask(task: { description: string, status: string }) {
    this.tasks.push({ description: task.description, completed: false, status: task.status });
  }

  updateFilter(filter: string) {
    this.currentFilter = filter;
  }
  
}
