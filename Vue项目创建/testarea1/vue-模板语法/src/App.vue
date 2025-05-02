<!-- 注意哪些是可以写在'{{}}'里的 -->
<template>
    <h3>模板语法</h3>
    <p>{{ msg }}</p>
    <p>{{ msg.split('').reverse().join('') }}</p>
    <p>{{ msg.split('').reverse().join('-') }}</p>
    <p>{{ msg.split('').join('+') }}</p>
    <p>{{ ok ? 'Yes' :'No' }}</p>
    <p>{{ num+1 }}</p>
    <!--这样是不可以的： <p>{{var = 1}}</p> -->
    <!-- 条件控制也是不可以的：<p>{{if(var == 1){ var = 0 }}} -->
    <p v-html="rawHtml"></p>
</template>

<script>
    export default{
        data(){
            return{
                msg:"Vue3模板语法!",
                ok:true,
                num:10,
                rawHtml:"<a href='https://frp-hat.top:44500'>我的网盘</a>"
            }
        }
    }
</script>




