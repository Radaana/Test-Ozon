import { Component, Vue } from 'vue-property-decorator';
import Calendar from './components/Calendar';
import TaskDashboard from './components/TaskDashboard'; 

import './styles/common.css'
	
@Component
export default class App extends Vue {
  render() {
    return (
      <div id="app">
        <div class="task-manager">
          <Calendar />
          <TaskDashboard />
        </div>
      </div>
    )
  }
}
