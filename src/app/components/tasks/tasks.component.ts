import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit{
toggleStatus(task: Task) {
  console.log('toggle event in main class');
  task.reminder=!task.reminder;
  console.log(task);
}
deleteTask(task: Task) {
  console.log(task);
  this.taskService.removeTask(task).subscribe(()=>(this.tasks=this.tasks.filter((t)=>t.id!==task.id)));
}
  tasks:Task[]=[];
  constructor(private taskService:TaskService){}
  ngOnInit(): void {
    this.taskService.getTask().subscribe((task)=>this.tasks=task);
  }

}
