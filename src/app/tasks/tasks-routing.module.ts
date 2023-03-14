import { Routes } from '@angular/router';

import { ListTaskComponent } from './list';

export const TaskRoutes: Routes = [
	{ 
		path: 'task', 
		redirectTo: 'task/list' 
	},
	{ 
		path: 'task/list', 
		component: ListTaskComponent 
	}

]