<template>
  <div id="app">
    <Header :button-handler="addButtonHandler">

    </Header>
    <Content v-if="isAddedState">
        <h1>New Task</h1>
        <input type="text" placeholder="Title" v-model="newTaskTitle">
        <input type="text" placeholder="Description" v-model="newTaskDescription">
        <button class="main" @click="newTaskAddHandler">Add</button>
        <button class="main cancel" @click="newTaskCancelHandler">Cancel</button>
    </Content>
    <Content v-else>
      <TodoItem
          v-for="item in getSortedList()"
          :todo-list-object="item"
          :key="item.uuid"
      ></TodoItem>
    </Content>
  </div>
</template>

<script>

import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import Content from "./components/Content";
import TodoListItem from "./model/TodoListItem";
export default {
  name: 'App',
  components: {
    Content,
    TodoItem,
    Header
  },
  data(){
    return{
      newTaskTitle:"",
      newTaskDescription:"",
      isAddedState:false,
      todoItemList:[
        new TodoListItem("Homework","Anal dersi calismalari"),
        new TodoListItem("Homework2","Anal dersi calismalari2")
      ],
    }
  },methods:{
    getSortedList(){
      return this.todoItemList.slice().sort(((a, b) => b.createdTime - a.createdTime)).sort((a, b) => {
        if(a.isDone && !b.isDone){
          return 1
        }
        if(!a.isDone && !b.isDone){
          return -1
        }
        return 0
      })
    },
    addButtonHandler(){
      this.isAddedState = !this.isAddedState
    },
    newTaskAddHandler(){
      if (this.newTaskTitle === "") {
        alert("Title can not be empty")
      }
      else if(this.newTaskDescription === ""){
        alert("Description can not be empty")
      }else{
        this.todoItemList.push(
            new TodoListItem(this.newTaskTitle,this.newTaskDescription)
        )
        this.newTaskCancelHandler()
      }
    },
    newTaskCancelHandler(){
      this.newTaskTitle = ""
      this.newTaskDescription = ""
      this.isAddedState = false
    }
  }
}
</script>

<style>

*{
  margin: 0;
  font-family: Helvetica;
}
#app{
  display: grid;
  grid-template-columns: 1fr;
}
input{
  height: 30px;
  border-radius: 5px;
  font-size: 20px;
}
button.main{
  height: 30px;
  background-color: orange;
  border-radius: 5px;
  font-weight: bold;
  color: whitesmoke;
  /*outline: none;*/
  border: none;
}
button.main:active{
  border: 3px solid #42b983;
}
button.main:hover{
  opacity: 0.8;
}
button.cancel{
  background-color: red;
}

</style>
