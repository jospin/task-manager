import { Component, OnInit } from '@angular/core';

import { TaskService, Task } from '../shared'; 

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})

export class ListTaskComponent implements OnInit {

tasks: Task[];

constructor(private taskService: TaskService) {}

ngOnInit() {
    this.tasks = this.listAll();
  }

listAll(): Task[] {
    return this.taskService.listAll()
  }

remove($event: any, task: Task): void {
    $event.preventDefault();
    if(confirm('Do you want remove the task "' + task.name + '"?')) {
      this.taskService.remove(task.id);
      this.tasks = this.listAll();
    }
  }

  updateStatus(task: Task): void {
    if(confirm('Do you want change the stats of the task "' + task.name + '"?')){
      this.taskService.updateStatus(task.id);
      this.tasks = this.taskService.listAll();
    }
  }
}
