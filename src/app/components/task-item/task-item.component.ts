import { Component,Input, OnInit ,Output,EventEmitter} from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from '../../services/task.service';



@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent implements OnInit{

constructor(private  taskService : TaskService) {}
@Output() OnDeleteTask:EventEmitter<Task>=new EventEmitter();
@Output() OnToggleEvent:EventEmitter<Task>=new EventEmitter();

removeTask(task?: Task) {
this.OnDeleteTask.emit(task);
}
onToggle(task: Task|undefined) {
  console.log('double clicked');
  this.OnToggleEvent.emit(task);
}
  @Input() task:Task | undefined;
  faTimes=faTimes;
  ngOnInit(): void {
  }

}
