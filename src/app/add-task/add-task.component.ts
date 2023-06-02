import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  taskDescription: string = '';
  taskStatus: string = 'uncompleted'; // Valor predeterminado para el estado de la tarea

  @Output() taskAdded = new EventEmitter<{ description: string, status: string }>();

  addTask() {
    this.taskAdded.emit({ description: this.taskDescription, status: this.taskStatus });
    this.taskDescription = ''; // Limpiar el campo de descripción después de agregar la tarea
    this.taskStatus = 'uncompleted'; // Restablecer el estado a "no completada"
  }
}
