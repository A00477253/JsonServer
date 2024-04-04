import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions={
  headers:  new HttpHeaders({
    'Content-type':'application/json'
    
  })
}
 

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl:string="http://localhost:3000/tasks";
  
  

  constructor(private http:HttpClient) { }
  getTask(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);
  }

  removeTask(task:Task):Observable<Task>{
    const url=`${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task:Task):Observable<Task>{
    const url=`${this.apiUrl}/${task.id}`;
    return this.http.put<Task>
    
  }

}
