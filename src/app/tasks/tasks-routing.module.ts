import { Routes } from '@angular/router';

import { ListTaskComponent } from './list';
import { EditTaskComponent } from './edit';
import { CreateTaskComponent } from './create';

export const TaskRoutes: Routes = [
	{ 
		path: 'task', 
		redirectTo: 'task/list' 
	},
	{ 
		path: 'task/list', 
		component: ListTaskComponent 
	},
	{ 
		path: 'task/edit/:id', 
		component: EditTaskComponent
	},
	{ 
		path: 'task/create', 
		component: CreateTaskComponent
	}

]