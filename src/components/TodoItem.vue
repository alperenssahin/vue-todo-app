<template>
  <div class="todo-item" :style="{backgroundColor:todoListObject.isDone ? 'red' : 'inherit'}">
    <div class="left" :style="{color:todoListObject.isDone ? 'white' : 'inherit'}">
      <div class="title">{{ todoListObject.title }}</div>
      <div class="description">  {{todoListObject.description}} </div>
    </div>
    <div class="right">
      <div>
        <input type="checkbox" v-model="todoListObject.isDone">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props:["todoListObject"]
}
</script>

<style scoped>
.todo-item{
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 10px;
  border: 1px solid purple;
  border-radius: 10px;
  align-items: center;
}
.title{
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 5px;
}
.left{
  /*justify-self: center;*/
}
</style>