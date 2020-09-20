<template>
  <div class="calendar task-manager__card">
    <div class="calendar__header task-manager__header">
      {{ monthArray[currentMonth] }} {{ currentYear }}
    </div>
    <div class="calendar__weekdays">
      <div class="calendar__weekday" v-for="weekday in weekdaysArray" :key="weekday" >
        {{ weekday }}
      </div>
    </div>
    <div class="calendar__days">
      <div
        class="calendar__day"
        v-for="day in currentMonthDays"
        :key="day"
        :class="{calendar__day_active : day == selectedDay, calendar__day_tasks : hasTasks(day) }"
        @click="setNewSelectedDate(day)"
      >
        {{ day }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { useStore } from 'vuex-simple';
import { TasksStore } from '@/store/store';

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

  hasTasks (day:number):boolean {
    return this.store.hasTasksForSelectedDate(new Date(this.currentYear, this.currentMonth, day))
  }

  setNewSelectedDate (day:number): void {
    this.store.setNewSelectedDate(new Date(this.currentYear, this.currentMonth, day))
  }
}
</script>

<style scoped>
.calendar {
  padding: 29px 0 49px 33px;
}

.calendar__header {
  padding-bottom: 26px;
}

.calendar__weekdays,
.calendar__days {
  display: grid;
  grid-template-columns: repeat(7, 50px);
}

.calendar__weekdays {
  padding-bottom: 26px;
}

.calendar__weekday {
  font-weight: 500;
  font-size: 15.6548px;
  line-height: 19px;
  color: rgba(52, 72, 94, 0.536062);
  text-align: left;
}


.calendar__day {
  font-style: normal;
  font-weight: 500;
  font-size: 14.5366px;
  line-height: 18px;
  color: #7C86A2;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  line-height: 32px;
  cursor: pointer;
}

.calendar__day_tasks {
  color: #AA3434;
}

.calendar__day.calendar__day_active {
  background: linear-gradient(0deg, #7ED5FC 0%, #90D9FA 100%);
  color: #FFFFFF;
}

@media (max-width: 768px) {
  .calendar {
    padding: 25px 27px;
    margin-bottom: 20px;
  }

  .calendar__weekdays,
  .calendar__days {
    display: grid;
    grid-template-columns: repeat(7, 40px);
  }
}
</style>
