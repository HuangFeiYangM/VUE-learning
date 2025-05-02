# Vue3学习

## time： 2025.5.1 ~ 2025.4  by hfy


## 1.简介：


### 诞生背景
Vue 3 是 Vue.js 框架的重大版本升级，于2020年9月正式发布。它的开发始于2018年，主要目标是解决 Vue 2 在大型应用中的性能瓶颈，并改进 TypeScript 支持。

## 主要特点
1. **性能提升**：通过重写响应式系统(使用Proxy代替Object.defineProperty)和优化虚拟DOM算法
2. **组合式API**：引入setup函数和Composition API，提供更好的逻辑复用
3. **更好的TypeScript支持**：代码库完全用TypeScript重写
4. **更小的体积**：通过Tree-shaking优化，核心体积减少约40%
5. **新特性**：Fragment、Teleport、Suspense等新功能

### 技术实现
- **语言**：核心代码使用TypeScript编写
- **构建工具**：使用Rollup进行打包
- **响应式系统**：基于ES6 Proxy实现
- **虚拟DOM**：优化后的diff算法

### 代码示例
```vue
<script setup lang="ts">
import { ref, computed } from 'vue'

const count = ref(0)
const double = computed(() => count.value * 2)

function increment() {
  count.value++
}
</script>

<template>
  <div>
    <p>当前计数: {{ count }}</p>
    <p>双倍计数: {{ double }}</p>
    <button @click="increment">增加</button>
  </div>
</template>

<style scoped>
button {
  padding: 8px 16px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
}
</style>
```

## 2.typescript是什么？



# TypeScript 简介

### 什么是 TypeScript
TypeScript 是微软开发的开源编程语言，它是 JavaScript 的超集，添加了静态类型系统。TypeScript 代码会被编译成纯 JavaScript 运行在任何 JavaScript 环境中。

### 主要特点
1. **静态类型检查**：在编译时捕获类型错误
2. **类型注解**：可以显式声明变量、函数参数和返回值的类型
3. **面向对象特性**：支持类、接口、泛型等高级特性
4. **工具支持**：提供更好的代码补全、导航和重构功能
5. **渐进式采用**：允许逐步将 JavaScript 项目迁移到 TypeScript

### 基本类型示例
```typescript
// 基本类型
let name: string = "张三";
let age: number = 25;
let isStudent: boolean = true;

// 数组
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["李四", "王五"];

// 函数类型
function greet(name: string): string {
  return `你好, ${name}!`;
}

// 接口
interface Person {
  name: string;
  age: number;
}

// 类
class Student implements Person {
  constructor(public name: string, public age: number) {}
}
```

### 与 JavaScript 的关系
- TypeScript 完全兼容 JavaScript 语法
- 所有 JavaScript 代码都是合法的 TypeScript 代码
- TypeScript 通过类型注解提供额外的安全性
- 最终会被编译成纯 JavaScript 执行












## 3.Vue3的要求：

需要版本大于15.0的node.js环境。
检查node.js版本：
```
node -v
```





























