import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', //root path
        pathMatch: 'full', //required if path is empty route like above
        loadComponent: () => {
            return import('./home/home.component').then(module => module.HomeComponent) //return HomeComponent class
        }

    },
    {
        path: 'todos',
        loadComponent: () => {
            return import('./todos/todos.component').then(module => module.TodosComponent)
        }

    }
];
