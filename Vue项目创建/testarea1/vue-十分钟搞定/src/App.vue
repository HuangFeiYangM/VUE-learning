<script setup>


import { ref } from "vue";
function add(params) {
    console.log('正在添加：'+input_val.value);

}

var input_val = ref('')
var ls = ref([
  {
    iscmp:false,
    text:'我不知道1'
  },
  {
    iscmp:true,
    text:'我不知道2'
  },
  {
    iscmp:false,
    text:'我不知道3'
  }
])

</script>

<template>
  <div class="html">
    <div class="mainbox">
    <!-- 标题 -->
    <div class="title">HFY's Todolist</div>
    <!-- 添加的入口 -->
    <div class="from">
      <input v-model="input_val" type="text" placeholder="添加事件">
      <div class="botton" @click="add">添加todo</div>
    </div>
    <!-- 下面是已经添加的列表 -->
    <div v-for="i in ls"  :class="[i.iscmp ? 'lsit' : 'list2']">
      <div>
        <input type="checkbox">
        <span class="name">{{ i.text }}</span>
        <div class="del">删除del</div>
      </div>
      
    </div>
  </div>
  
  </div>
  


</template>







<style scoped>
.html{
  width: 100%;
  height: 800px;
  background-color: #eeeade;
  padding: auto;
  margin-top: 0;
}

.mainbox {
  max-width: 600px;
  margin: 0px auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  border: #333;
  border-width: 2px;
  
}


.title {
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.from {
  display: flex;
  margin-bottom: 20px;
}

.from input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  outline: none;
}

.from .botton {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  user-select: none;
}

.lsit {
  border: 5px solid #8da192;
  border-radius: 4px;
  overflow: hidden;
  margin: 10px;
}

.lsit > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
  padding: 10px 15px;
  border-bottom: 1px solid #1dc571;
}

.lsit > div:last-child {
  border-bottom: none;
}

.list2{
  border: 5px solid #fd3300;
  border-radius: 4px;
  overflow: hidden;
  margin: 10px;
}


.list2 > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
  padding: 10px 15px;
  border-bottom: 1px solid #1dc571;
}


.list2 > div:last-child {
  border-bottom: none;
}








.name {
  margin-left: 10px;
}

.del {
  color: #ff4d4f;
  cursor: pointer;
  user-select: none;
}

.del:hover {
  color: #05e69b;
}



</style>
