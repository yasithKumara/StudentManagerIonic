import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public student!: Student;
  public students!: Student[];
  public editStudent!: Student;
  public deleteStudent!: Student;

  constructor(private studentService: StudentService){}

  ngOnInit() {
    this.getStudents();

  }

  public getStudents(): void {
    this.studentService.getStudents().subscribe(
      (response: Student[]) => {
        this.students = response;
        console.log(this.students);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
