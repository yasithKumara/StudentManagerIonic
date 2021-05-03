 import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class StudentService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiServerUrl}/student/all`);
  }

  // public getStudentsByClassID(classID:number): Observable<Student[]> {
  //   return this.http.get<Student[]>(`${this.apiServerUrl}/class/findstudents/${classID}`);
  // }


  // public addStudent(student: Student, classID:number): Observable<Student> {
  //   return this.http.post<Student>(`${this.apiServerUrl}/student/${classID}/add`, student);
  // }

  // public updateStudent(student: Student,classID:number): Observable<Student> {
  //   return this.http.put<Student>(`${this.apiServerUrl}/student/${classID}/update`, student);
  // }



  // public deleteStudent(studentID: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiServerUrl}/student/delete/${studentID}`);
  // }

}
