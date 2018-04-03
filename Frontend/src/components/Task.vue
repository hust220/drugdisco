<template>
<div class="task">
  Task {{id}}.
  <el-row>
    <el-col :span="4" :offset="0" class="compound-list">
      <ul>
      </ul>
    </el-col>
    <el-col :span="20" :offset="0" class="compound-detail">
    </el-col>
  </el-row>
</div>
</template>

<script>
import axios from 'axios'
import { bus } from '../bus.js'

axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'

export default {
  name: 'Task',
  data () {
    return {
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    }
  },
  methods: {
  },
  mounted () {
    this.$nextTick(function () {
      bus.$emit('switch-router', 'Task')
      bus.$emit('switch-task', this.id)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.el-form-item {
  margin-bottom: 3px;
}

.compound-list {
  border: 1px solid grey;
  height: 800px;
}
.compound-detail {
  border: 1px solid grey;
  height: 800px;
}

</style>
