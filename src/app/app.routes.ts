import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { CitasComponent } from './components/citas/citas.component';
const APP_ROUTES: Routes = [
 { path: 'body', component: BodyComponent },
 { path: 'citas', component: CitasComponent },
 { path: '**', pathMatch: 'full', redirectTo: 'body' }
];

export const APPROUTING = RouterModule.forRoot(APP_ROUTES);
