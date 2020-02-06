import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Use RouterModule, Routes for activating routing in angular
import { RouterModule, Routes } from '@angular/router';

// Include components for in which router service to be used
import { AddStudentComponent } from './views/student/add-student/add-student.component';
import { StudentsListComponent } from './views/student/students-list/students-list.component';
import { EditStudentComponent } from './views/student/edit-student/edit-student.component';
import { SignInComponent } from './views/sign-in/sign-in.component';
import { DashBoardComponent } from './views/dash-board/dash-board.component';

// Routes array define component along with the path name for url
const routes: Routes = [
  { path: '', redirectTo: '/register-student', pathMatch: 'full' },
  { path: 'register-student', component: AddStudentComponent },
  { path: 'view-students', component: StudentsListComponent },
  { path: 'edit-student/:id', component: EditStudentComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'dashboard', component: DashBoardComponent }/* ,
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' } */
];

// Import RouterModule and inject routes array in it and do not forget to export the RouterModule
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
