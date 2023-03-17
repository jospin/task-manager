import {Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router, ActivatedRoute } from '@angular/router';

import { TaskService, Task } from '../shared';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {
  @ViewChild('formTask', { static: true }) formTask: NgForm;
  task: Task

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.task = this.taskService.findById(id);
  }

  update(): void {
    if(this.formTask.form.valid) {
      this.taskService.update(this.task);
      this.router.navigate(['/task']);
    }
  }
}
