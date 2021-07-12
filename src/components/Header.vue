<template>
  <div class="header-box">
    <div class="title">
      To-do
    </div>
    <button @click="buttonHandler">
      add
    </button>
  </div>
</template>

<script>
export default {
  name: "Header",
  props:{
    buttonHandler:{
      type:Function,
      default:()=>{}
    }
  }
}
</script>

<style scoped>
  .title{
    font-size:25px;
    color: whitesmoke;
  }
  .header-box{
    display: grid;
    grid-template-columns: 1fr auto;
    background-color: orangered;
    padding: 10px;
  }
</style>