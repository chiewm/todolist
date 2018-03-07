<template>
  <div class="page lists-show">
    <nav>
      <div class="nav-group">
        <a class="nav-item">
          <span class="icon-list-unordered">
          </span>
        </a>
      </div>
      <h1 class="title-page">
        <span class="title-wrapper">{{ todo.title }}</span>
        <span class="count-list">{{ todo.count }}</span>
      </h1>
      <div class="nav-group right">
        <div class="options-web">
          <a class="nav-item">
            <span
              v-if="todo.locked"
              class="icon-lock"></span>
            <span
              v-else
              class="icon-unlock"></span>
          </a>
          <a class="nav-item">
            <span class="icon-trash"></span>
          </a>
        </div>
      </div>
      <div class="form todo-new input-symbol">
        <input 
          v-model="text"
          :disabled="todo.locked"
          placeholder="请输入"
          type="text" 
          @keyup.enter="onAdd">
        <span class="icon-add"></span>
      </div>
    </nav>
    <div class="content-scrollable list-items">
      <div
        v-for="item in items"
        :key="item.id">
        <item :item="item"/>
      </div>
      <!--容器下半部分-->
    </div>
  </div>
</template>

<script>
import item from './item'
export default {
  components: {
    item
  },
  data() {
    return {
      todo: {
        title: '星期一',
        count: 12,
        locked: false
      },
      items: [
        { checked: false, text: 'new', isDelete: false},
        { checked: false, text: 'new', isDelete: false},
        { checked: false, text: 'new', isDelete: false}
      ],
      text: ''
    }
  },
  methods: {
    onAdd() {
      this.items.push({
        checked: false, text: this.text, isDelete: false
      });
      this.text = '';
    }
  }

}
</script>

<style lang = "less">
@import '../common/style/nav.less';
@import '../common/style/form.less';
@import '../common/style/todo.less';
</style>
