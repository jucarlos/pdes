import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

import { DirectivasComponent } from './pages/directivas/directivas.component';
import { HomeComponent } from './pages/home/home.component';
import { TemarioComponent } from './pages/temario/temario.component';


const routes: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'temario', component: TemarioComponent },
    { path: 'directivas', component: DirectivasComponent },
    { path: '**', redirectTo: 'home'}
]

@NgModule({
    imports: [ RouterModule.forRoot( routes, { useHash: true} ) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}