import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';

const routes: Routes = [
    {
        path: 'dashboard', component: PagesComponent,
        children:[
         { path: '', component: DashBoardComponent },
         { path: 'Progress', component: ProgressComponent },
         { path: 'Grafica', component: Grafica1Component },
         //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
     }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
