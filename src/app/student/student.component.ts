import { Component, OnInit } from '@angular/core';
import { studentservice } from './studentservice';
import { Student }  from './student';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  providers :[studentservice],
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentList : Student[];
  errorMessage : string;
  constructor(private stdService :studentservice ) { }

  ngOnInit() {
    this.stdService.getStudents().subscribe(
      stds => this.studentList = stds,
      error => this .errorMessage = error
    );
  }

}
