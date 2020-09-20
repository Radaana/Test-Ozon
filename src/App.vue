<template>
  <div id="app">
    <div class="task-manager"> 
    <Calendar />
    <TaskDashboard />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Calendar from './components/Calendar.vue';
import TaskDashboard from './components/TaskDashboard.vue';

@Component({
  components: {
    Calendar,
    TaskDashboard
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: 'HelveticaNeueCyr', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.task-manager {
  display: grid;
  grid-template-columns: repeat(2, 387px);
  grid-gap: 34px;
  width: 100%;
  max-width: 916px;
  margin: 0 auto;
}

.task-manager__card {
  background: #FFFFFF;
  box-shadow: 0px 2px 23px #EDEDED;
  border-radius: 6px;
  font-family: 'HelveticaNeueCyr', Helvetica, Arial, sans-serif;
}

.task-manager__header {
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.59375px;
  text-align: left;
  color: #6B7897;
}

@media (max-width: 768px) {
  .task-manager {
    display: block;
  }

  .task-manager__card {
    width: 100%;
    box-sizing: border-box;
  }
}

</style>
