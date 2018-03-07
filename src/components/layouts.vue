<template>
  <section class="container" > 
    <section class="menu"> <!--右边的容器-->
      <menus/>
    </section>
    <section class="content-container"><!--右边的容器-->
      <todo/>
    </section>
  </section>
</template>
<script>
  import menus from './menus'
  import todo from './todo'
  export  default {
    components: {
     menus,
     todo
    }
  };
</script>
<style lang="less">
@import '../common/style/layouts.less';
</style>