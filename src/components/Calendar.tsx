import { Component, Prop, Vue } from 'vue-property-decorator';
import { useStore } from 'vuex-simple';
import { TasksStore } from '@/store/store';

const styles = require ('@/styles/calendar.css?module')

@Component
export default class Calendar extends Vue {
  public store: TasksStore = useStore(this.$store);
  monthArray: Array<string> = ['Январь','Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь','Ноябрь', 'Декабрь']
  weekdaysArray: Array<string> = ['Пн','Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

  get selectedDay (): number {
    return this.store.selectedDate.getDate()
  }

  get currentDate (): Date {
    return new Date();
  }

  get currentMonth(): number {
    return this.currentDate.getUTCMonth();
  }
  
  get currentYear(): number {
    return this.currentDate.getFullYear()
  }

  get currentMonthDays(): Array<number | string> {
    let month = this.currentDate.getUTCMonth();
    let first_day = new Date(this.currentYear, this.currentMonth, 1);

    let daysArray:Array<number | string> = []
    for (let i = 1; i < first_day.getDay(); i++) {
      daysArray.push('')
    }

    let day = first_day
    while (day.getMonth() == this.currentMonth) {
      daysArray.push(day.getDate())
      day.setDate(day.getDate() + 1);
    }
    return daysArray
  }

  hasTasks (day:number): boolean {
    return this.store.hasTasksForSelectedDate(new Date(this.currentYear, this.currentMonth, day))
  }

  setNewSelectedDate (day:number): void {
    this.store.setNewSelectedDate(new Date(this.currentYear, this.currentMonth, day))
  }

  render() {
    return (
      <div class={styles.calendar}>
        {console.log(styles)}
        <div class={styles.header}>
          { this.monthArray[this.currentMonth] } { this.currentYear }
        </div>
        <div class={styles.weekdays}>
          {this.weekdaysArray.map((weekday) =>
            <div class={styles.weekday} key={weekday.toString()}>
              {weekday}
            </div>
          )}
        </div>
        <div class={styles.days}>
          {this.currentMonthDays.map((day) =>
            <div class={`${styles.day} ${day == this.selectedDay ? styles.active : ''} ${this.hasTasks(+day) ? styles.tasks : '' }`}
              key={day.toString()}
              onClick={() => this.setNewSelectedDate(+day)}
            >
              {day}
            </div>
          )}
        </div>
      </div>
    )
  }
}


