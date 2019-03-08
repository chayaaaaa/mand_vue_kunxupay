<template>
  <div class="container index">
    <!-- header -->
    <div class="header" flex="main:center cross:center">
      <div>首页</div>
    </div>
    <!-- main -->
    <div class="main" flex="main:top dir:top">
      <div class="to">看看我是不是居中的</div>
    </div>
    <!-- footer -->
    <div class="footer" flex="main:center cross:center">
      <div>看看我是不是居中的</div>
    </div>
  </div>
</template>

<script>
import "@/commonCSS/flexcss.less";
import { ActionBar, Toast } from "mand-mobile";
export default {
  name: "index",
  components: {
    [ActionBar.name]: ActionBar
  },
  data() {
    return {
      data: [
        {
          text: "主要按钮",
          onClick: this.handleClick
        }
      ]
    };
  },
  methods: {
    handleClick() {
      Toast.succeed("Click");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.to {
  width: 100%;
  height: 1.5rem;
}
</style>
