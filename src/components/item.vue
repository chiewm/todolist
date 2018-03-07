<template>
  <div class="list-item editingClass editing">
    <label class="checkbox">
      <input
        v-model="item.checked" 
        type="checkbox">
      <span class="checkbox-custom"></span>
    </label>
    <input
      v-model="item.text"
      placeholder="写点什么..."
      type="text">
    <a class="delete-item">
      <span class="icon-trash"></span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="less">
@import '../common/style/list-items.less';
</style>
