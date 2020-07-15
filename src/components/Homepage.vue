<template>
  <div class="home">
    <img src="../assets/logo.png">
    <div class="name">
      姓名：{{this.$store.state.home.userInfo.name}}
    </div>
    <div class="age">
      年龄：{{this.$store.state.home.userInfo.age}}
    </div>
    <a-button @click="change">
      change
    </a-button>
    
<!-- <style lang="less" scoped>
.home{
  margin-top: 60px;
  .name{
    color: red
  }
}
</style> -->
  </div>
</template>

<script>
export default {
  name: 'homepage',
  data () {
    return {
    }
  },
  methods: {
    change(){
      this.$store.dispatch('saveUserInfoActions', {
        name: 'han123',
        age: 25,
      })
    },
  },
  created() {
    console.log(this.$store)
  }
}
</script>

<style lang="less" scoped>
.home{
  margin-top: 60px;
  
}
</style>