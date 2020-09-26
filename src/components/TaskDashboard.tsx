import { Component, Prop, Vue } from 'vue-property-decorator';
import { useStore } from 'vuex-simple';
import { TasksStore } from '@/store/store';

const styles = require ('@/styles/dashboard.css?module')

interface Task {
  date: Date;
  text: string;
  done: boolean;
}

@Component
export default class TaskDashboard extends Vue {
  public store: TasksStore = useStore(this.$store)
  tasksArray:Array<Task> = []

  get tasksForDay (): Array<Task> {
    return this.store.getTasksForSelectedDate()
  }

  setTask (taskText: string): void {
    this.store.setNewTask(taskText)
  }

  markChecked (task:Task): void {
    this.store.markTaskChecked(task)
  }

  render() {
    return (
      <div class={styles.dashboard}>
        <div class={styles.header}>
          События
        </div>
        <div class={styles.tasks}>
          {this.tasksForDay.map((task, index) =>
            <div class={styles.task}
              key={task.text.toString() + index}
            >
              <form class={styles.form}>
                <label class={styles.label}>
                  <input
                    class={styles.checkmark}
                    type="checkbox"
                    name="taskCheckbox"
                    checked={task.done}
                    disabled={task.done}
                    onChange={(event: Event) => {
                      event.preventDefault()
                      let input = event.target as HTMLInputElement
                      task.done = !!input.value
                      console.log(task)
                      this.markChecked(task)
                    }}
                  >
                  </input>
                  <span class={styles.text}>{ task }</span>
                </label>
              </form>
            </div>
          )}
        </div>
        <form onSubmit={(event: Event) => {
          event.preventDefault()
          let input = document.querySelector('input[type="text"]') as HTMLInputElement
          this.setTask(input.value)
          input.value = ''
        }}>
          <input
            class={styles.input}
            type="text"
            name="taskText"
            placeholder="Текст"
          >
            </input>
        </form>
      </div>
    )
  }
}

