<template>
  <div class="task-dashboard task-manager__card">
    <div class="task-dashboard__header task-manager__header">
      События
    </div>
    <div class="task-dashboard__tasks">
      <div class="task-dashboard__task task" v-for="task in tasksForDay" :key="task.day" @click="markChecked(task)">
        <div class="task__check" :class="{task__check_done : task.done}"></div>
        <span class="task__text">{{ task.text }}</span>
      </div>
    </div>
    <form class="task-dashboard__form">
      <input
        class="task-dashboard__input"
        type="text"
        name="taskText"
        placeholder="Текст"
        @keypress.enter.prevent="setTask"
        v-model="taskText"
      >
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { useStore } from 'vuex-simple';
import { TasksStore } from '@/store/store';

@Component
export default class TaskDashboard extends Vue {
  public store: TasksStore = useStore(this.$store);
  tasksArray:Array<Object> = []
  taskText:string = ''

  get tasksForDay (): Array<Object> {
    return this.store.getTasksForSelectedDate()
  }

  setTask (): void {
    this.store.setNewTask(this.taskText)
    this.taskText = ''
  }

  markChecked (task:any): void {
    this.store.markTaskChecked(task.date)
  }
}
</script>

<style scoped>
.task-dashboard {
  padding: 25px 27px;
}

.task-manager__header {
  padding-bottom: 17px;
}

.task-dashboard__form {
  text-align: left;
  padding-left: 35px;
}

.task-dashboard__input {
  background: #FFFFFF;
  border: 1px solid #D8DCE6;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 7px 0 6px 14px;
}

.task-dashboard__input::-webkit-input-placeholder {color:#BFC4CC;}
.task-dashboard__input::-moz-placeholder          {color:#BFC4CC;}/* Firefox 19+ */
.task-dashboard__input:-moz-placeholder           {color:#BFC4CC;}/* Firefox 18- */
.task-dashboard__input:-ms-input-placeholder      {color:#BFC4CC;}

.task {
  display: flex;
  margin-bottom: 14px;
}

.task__check {
  background: #F2F3F3;
  border: none;
  width: 16px;
  height: 16px;
  border-radius: 2px;
  margin-right: 19px;
  position: relative;
}

.task__check_done:after {
  content: '';
  display: block;
  width: 9px;
  height: 4px;
  position: absolute;
  top: 3px;
  left: 3px;
  border-bottom: 2px solid #7C86A2;
  border-left: 2px solid #7C86A2;
  transform: rotate(-45deg)
}

.task__text {
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.59375px;
  color: #A2ABBF;
}
</style>
