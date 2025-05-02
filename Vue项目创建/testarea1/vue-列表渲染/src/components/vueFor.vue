<template>
    <h3>列表渲染</h3>
    <!--  -->
    <p v-for="item,index in names">{{ item + "@" }}+{{ index }}</p>
    <!-- 不加括号也可以 -->
    <!-- 可以不叫item -->

    <div v-for="item in result">
        <p>{{ item.who }}</p>
        <img :src="item.where" alt="">
    </div>
    <!-- in 也可以用 of 替代 -->
    
    
    <!-- v-for可以遍历对象 -->
    <div>
        <p v-for="itemOfuser of user">{{ itemOfuser }}</p>
        <!-- 不要加“-” -->
    </div>
</template>

<script>
    export default{
        data(){
            return{
                names:["1","2","3"],
                result:[
                {
                    "id":1,
                    "who":"hfy",
                    "where":"../../../../../图片/屏幕截图 2025-05-02 210630.png"
                },
                {
                    "id":1,
                    "who":"gc",
                    "where":"../../../../../图片/屏幕截图 2025-05-02 210630.png"
                },
                {
                    "id":1,
                    "who":"hhx",
                    "where":"../../../../../图片/屏幕截图 2025-05-02 210630.png"
                }
                ],
                user:{
                    myname:'name', 
                    password:"114514"
                }
            }
            

            
            
        }
    }

</script>