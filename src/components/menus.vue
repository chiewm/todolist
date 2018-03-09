<template>
  <div class="list-todos">
    <a
      v-for="item in items"
      :key="item.id"
      :class="{'active': item.id === todoId}"
      class="list-todo list activeListClass"
      @click="goList(item.id)">
      <span
        v-if="item.locked"
        class="icon-lock"></span>
      <span
        v-if="item.count > 0"
        class="count-list">{{ item.count }}</span>
      {{ item.title }}
    </a>
    <a class="link-list-new">
      <span class="icon-plus">
      </span>
      新增
    </a>
  </div>
</template>
<script>
import { getTodoList, addTodo } from "../api/api"
export default {
  data() {
    return {
      items: [],
      todoId: ''
    }
  },
  created() {
    getTodoList({}).then(res => {
      const TODOS = res.data.todos
      this.items = TODOS;
      this.todoId = TODOS[0].id
    })
  },
  methods: {
    goList(id) {
      this.todoId = id
    },

  }

};

</script>
<style lang="less">
@import "../common/style/menu.less";
</style>
