<template>
<div class="index">
  <el-form ref="form" :model="form" label-width="250px">
    <el-form-item label="Receptor">
      <input type="file" ref="receptor_pdb">
    </el-form-item>

    <el-form-item label="Center of Binding Site">
      <input type="file" ref="binding_site">
    </el-form-item>

    <el-form-item label="Mail">
      <el-input v-model="form.email"></el-input>
    </el-form-item>

    <el-form-item label="">
      <a href="#" @click.prevent="show_options^=true">{{show_options?'Hide':'Show'}} options</a>
    </el-form-item>

    <el-form-item label="Known Binder" v-show="show_options">
      <input type="file" ref="known_binder">
    </el-form-item>

    <el-form-item label="Number of Candidates" v-show="show_options">
      <el-input v-model="form.num"></el-input>
    </el-form-item>

    <el-form-item label="Number of Iterations" v-show="show_options">
      <el-input v-model="form.num_iter"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button @click="onSubmit" type="primary">Submit</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
import axios from 'axios'
import { bus } from '../bus.js'

axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'

export default {
  name: 'Index',
  data () {
    return {
      show_options: false,
      form: {
        email: '',
        num: 20,
        num_iter: 100
      }
    }
  },
  methods: {
    onSubmit () {
      var formData = new FormData()
      for (var i in this.form) {
        formData.append(i, this.form[i])
      }
      formData.append('receptor_pdb', this.$refs.receptor_pdb.files[0])
      formData.append('binding_site', this.$refs.binding_site.files[0])
      formData.append('known_binder', this.$refs.known_binder.files[0])

      axios.post('http://redshift.med.unc.edu/drugdisco/actions/submit.php', formData).then(response => {
        alert('Submitted successfully!')
        window.location.href = '#/' + 'TaskCenter'
      }).catch(() => {
        console.log('post failed')
      })
    }
  },
  mounted () {
    this.$nextTick(function () {
      bus.$emit('switch-router', 'NewTask')
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.el-form-item {
  margin-bottom: 3px;
}

</style>
