import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TaskService, TaskCompletedDirective } from './shared';
import { ListTaskComponent } from './list';
import { EditTaskComponent } from './edit';
import { CreateTaskComponent } from './create';


@NgModule({
  declarations: [
    ListTaskComponent,
    EditTaskComponent,
    CreateTaskComponent,
    TaskCompletedDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    TaskService  
  ]
})
export class TasksModule { }
