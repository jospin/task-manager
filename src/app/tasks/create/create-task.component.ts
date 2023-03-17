import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router } from '@angular/router';

import { TaskService, Task } from '../shared';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  @ViewChild('formTask', { static: true }) formTask: NgForm;
  task: Task;

  constructor(
    private taskService: TaskService,
    private router: Router
  ) {}  

  ngOnInit() {
    this.task = new Task();
  }

  add(): void {
    if (this.formTask.form.valid) {
        this.taskService.create(this.task);
        this.router.navigate(['/task']);
    }
  }

}
