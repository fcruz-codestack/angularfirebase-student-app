import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AddStudentComponent } from './views/student/add-student/add-student.component';
import { StudentsListComponent } from './views/student/students-list/students-list.component';
import { EditStudentComponent } from './views/student/edit-student/edit-student.component';

// Reactive Form Module
import { ReactiveFormsModule } from '@angular/forms';

// Firebase Modules
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

// Router Module
import { AppRoutingModule } from './/app-routing.module';

// Toaster for Alert Messages
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// NGX Pagination
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { SignInComponent } from './views/sign-in/sign-in.component';
import { DashBoardComponent } from './views/dash-board/dash-board.component';


@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    StudentsListComponent,
    EditStudentComponent,
    SignInComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase), // Main Angular fire module
    AngularFirestoreModule,     // Only required for database features
    AngularFireDatabaseModule,  // Firebase database module
    AngularFireAuthModule,      // Firebase auth module
    AngularFireStorageModule,   // Firebase storage module
    ReactiveFormsModule,        // Reactive forms module
    AppRoutingModule,           // Main routing module
    BrowserAnimationsModule,    // Required animations module for Toastr
    ToastrModule.forRoot({      // Register NgxToast NPM module
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    NgxPaginationModule  // NGX pagination module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
