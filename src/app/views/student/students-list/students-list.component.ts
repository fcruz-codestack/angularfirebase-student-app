import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CrudService } from '../../../shared/services/crud.service';  // CRUD API service class
import { ToastrService } from 'ngx-toastr';      // Alert message using NGX toastr
import { IStudent } from 'src/app/shared/interfaces/student';


@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})

export class StudentsListComponent implements OnInit {
  p = 1;                      // Fix for AOT compilation error for NGX pagination
  student: IStudent[];        // Save students data in Student's array.
  hideWhenNoStudent = false;  // Hide students data table when no student.
  noData  = false;            // Showing No Student Message, when no student in database.
  preLoader  = true;          // Showing Preloader to show user data is coming for you from the server(A tiny UX Shit)


  constructor(
    public crudApi: CrudService, // Inject student CRUD services in constructor.
    public toastr: ToastrService // Toastr service for alert message
    ) { }


  ngOnInit() {
    this.dataState(); // Initialize student's list, when component is ready
    const s = this.crudApi.GetStudentsList();
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.student = [];
      data.forEach(item => {
        const a = item.payload.toJSON();
        a['$key'] = item.key;
        this.student.push(a as IStudent);
      });
    });
  }

  // Using valueChanges() method to fetch simple list of
  // students data. It updates the state of hide When NoStudent,
  // noData & preLoader variables when any changes occurs in student data list in real-time.
  dataState() {
    this.crudApi.GetStudentsList().valueChanges().subscribe(data => {
      this.preLoader = false;
      if (data.length <= 0) {
        this.hideWhenNoStudent = false;
        this.noData = true;
      } else {
        this.hideWhenNoStudent = true;
        this.noData = false;
      }
    });
  }

  // Method to delete student object
  deleteStudent(student: IStudent) {
    if (window.confirm('Are sure you want to delete this student ?')) { // Asking from user before Deleting student data.
      this.crudApi.DeleteStudent(student.$key); // Using Delete student API to delete student.
      this.toastr.success(student.firstName + ' successfully deleted!'); // Alert message will show up when student successfully deleted.
    }
  }
}
