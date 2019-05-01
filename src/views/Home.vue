<template>
  <div class="home">
    {{msg}}
    <router-link to="/xiaoming">小明</router-link> |
    <router-link to="/about">aboutaboutaboutabout</router-link> |
    <router-link to="/try">trytrytrytry</router-link> |
    <router-view />
    
    <div style="padding-top: 30px;">
      
    </div>

  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      msg: 'HPOME'
    }
  },
  components: {
  },
  created () {
  },
  mounted () {
  },
  methods: {
  }
}
</script>
