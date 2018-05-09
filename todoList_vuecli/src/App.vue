<template>
  <div id="app" class="container">
    <div class="row justify-content-md-center mt-5">
      <taskMenu v-bind:items="menus" v-on:click-select="onSelected"></taskMenu>
      <taskList v-bind:items="tasks" v-on:click-completed="onCompleted" v-bind:tag="currentTagStatus" v-on:click-back="onBackout"></taskList>
    </div>
  </div>
</template>

<script>
import taskMenu from './components/TaskMenu'
import taskList from './components/TaskList'
import axios from 'axios'
import * as R from 'ramda'

export default {
  name: 'app',
  components: {
    taskMenu,
    taskList
  },
  data () {
    return {
      tasks: [],
      menus: [{
        txt: '未完成',
        tag: false
        },{
        txt: '完成',
        tag: true
        }],
      currentTagStatus: false
    }
  },
  beforeCreate() {
    axios.get('https://api.myjson.com/bins/o0ry2')
      .then(response => response.data)
      .then(data => (this.tasks = data))
      .catch(console.log('数据请求错误，请重试！'))
  },
  methods: {
    onSelected(tag) {
      this.currentTagStatus = tag;
    },
    onCompleted(id) {
      let index = R.findIndex(R.propEq('id', id))(this.tasks);
      this.tasks[index].completed = true;

      this.updateTasks();
    },
    onBackout(id){
        let index = R.findIndex(R.propEq('id', id))(this.tasks);
        this.tasks[index].completed = false;

        this.updateTasks();
    },
    updateTasks() {
        axios.put('https://api.myjson.com/bins/o0ry2', this.tasks)
            .then(response => response.data)
            .then(data => alert('successed!!'))
            .catch(console.log('error'))
    },
  }
}
</script>
