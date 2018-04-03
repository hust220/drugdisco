import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import NewTask from '@/components/NewTask'
import TaskManagement from '@/components/TaskManagement'
import Task from '@/components/Task'

import TaskCenter from '@/components/TaskCenter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/newtask',
      name: 'NewTask',
      component: NewTask
    },
    {
      path: '/taskCenter',
      name: 'TaskCenter',
      component: TaskCenter
    },
    {
      path: '/taskmanagement',
      name: 'TaskManagement',
      component: TaskManagement
    },
    {
      path: '/task/:id',
      name: 'Task',
      component: Task
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
