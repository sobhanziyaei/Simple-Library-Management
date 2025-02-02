import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./core/components/book/book.component').then(m => m.BookComponent),
    }
];
