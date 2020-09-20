import { Mutation, State } from 'vuex-simple';
export class TasksStore {
  @State()
  public selectedDate: Date;
  public tasks: Array<any>;

  constructor(nb: number = 0) {
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
  public setTask(task:Object): void {
    this.tasks.push(task)
  }

  @Mutation()
  public setDate(date:Date): void {
    this.selectedDate = date
  }

  @Mutation()
  public markTask(date:Date): void {
    this.tasks.map(todo => {
      if (todo.date === date) {
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

  public getTasksForSelectedDate(): Array<any> {
    return this.tasks.filter(todo => todo.date.getDate() === this.selectedDate.getDate());
  }

  public hasTasksForSelectedDate(day: Date): boolean {
    let tasksForDate = this.tasks.filter(todo => todo.date.getDate() === day.getDate());
    return tasksForDate.length > 0
  }

  public markTaskChecked(date: Date): void {
    this.markTask(date)
  }
}