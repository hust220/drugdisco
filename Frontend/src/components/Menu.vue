<template>
  <el-menu default-active="active" class="el-menu-vertical-demo">
    <el-menu-item index="Home" @click="redirect('#/Home')">
      <i class="el-icon-menu"></i>
      <span>Introduction</span>
    </el-menu-item>

    <el-menu-item index="NewTask" @click="redirect('#/NewTask')">
      <i class="el-icon-tickets"></i>
      <span>New Task</span>
    </el-menu-item>

    <el-menu-item index="TaskCenter" @click="redirect('#/TaskCenter')">
      <i class="el-icon-setting"></i>
      <span>Task Center</span>
    </el-menu-item>

    <el-submenu index="services">
      <template slot="title">
        <i class="el-icon-plus"></i>
        <span>Other Services</span>
      </template>

      <el-menu-item index="Eris" @click="redirect('http://redshift.med.unc.edu/eris')">
        <i class="el-icon-arrow-right"></i>
        <span>Eris</span>
      </el-menu-item>

      <el-menu-item index="Chiron" @click="redirect('http://redshift.med.unc.edu/chiron')">
        <i class="el-icon-arrow-right"></i>
        <span>Chiron</span>
      </el-menu-item>

      <el-menu-item index="iFold" @click="redirect('http://redshift.med.unc.edu/ifold')">
        <i class="el-icon-arrow-right"></i>
        <span>iFold</span>
      </el-menu-item>

      <el-menu-item index="iFoldRNA" @click="redirect('http://redshift.med.unc.edu/ifoldrna')">
        <i class="el-icon-arrow-right"></i>
        <span>iFoldRNA</span>
      </el-menu-item>
    </el-submenu>

    <el-menu-item index="Dokhlab" @click="redirect('http://redshift.med.unc.edu')">
      <i class="el-icon-location"></i>
      <span>Dokholyan Lab</span>
    </el-menu-item>

  </el-menu>
</template>

<script>
import { bus } from './bus.js'

export default {
  name: 'Menu',
  data () {
    return {
    }
  },
  methods: {
    redirect (url) {
      window.location.href = url
    }
  },
  mounted () {
    var v = this
    bus.$on('switch-router', (name) => {
      console.log(v.$refs[name])
      v.$refs[name].active = true
      window.location.href = '#/' + name
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  width: 1000px;
  margin: 60px auto;
}

html {
  overflow-y: scroll;
}

.left-nav {
  margin-bottom: 0px;
}

.box-card {
  padding: 0px 0px;
}

a {
  text-decoration: None;
}

</style>

