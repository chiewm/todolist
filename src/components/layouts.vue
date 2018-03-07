<template>
  <section class="container" > 
    <section class="menu"> <!--右边的容器-->
      <menus/>
    </section>
    <section class="content-container"><!--右边的容器-->
    </section>
  </section>
</template>
<script>
  import menus from './menus';
  export  default {
    components: {
     menus
    }
  };
</script>
<style lang="less">
@import '../common/style/layouts.less';
</style>