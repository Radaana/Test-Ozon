import { Mutation, State } from 'vuex-simple';

interface Task {
  date: Date;
  text: string;
  done: boolean;
}

export class TasksStore {
  @State()
  public selectedDate: Date;
  public tasks: Array<Task>;

  constructor() {
    this.tasks = [
      {
        date: new Date(),
        text: 'Выполнить задание',
        done: false
      }
    ];

    this.selectedDate = new Date()
  }

  @Mutation()
  public setTask(task:Task): void {
    this.tasks.push(task)
  }

  @Mutation()
  public setDate(date:Date): void {
    this.selectedDate = date
  }

  @Mutation()
  public markTask(task:Task): void {
    this.tasks.map(todo => {
      if (todo.date === task.date && todo.text === task.text) {
        todo.done = true
      }
    })
  }

  public setNewTask(taskText:string): void {
    this.setTask({
      date: this.selectedDate,
      text: taskText,
      done: false
    })
  }

  public setNewSelectedDate(date:Date): void {
    this.setDate(date)
  }

  public getTasksForSelectedDate(): Array<Task> {
    return this.tasks.filter(todo => todo.date.getDate() === this.selectedDate.getDate());
  }

  public hasTasksForSelectedDate(day: Date): boolean {
    let tasksForDate = this.tasks.filter(todo => todo.date.getDate() === day.getDate());
    return tasksForDate.length > 0
  }

  public markTaskChecked(task:Task): void {
    this.markTask(task)
  }
}