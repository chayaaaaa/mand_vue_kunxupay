<template>
  <div class="container login">
    <!-- main -->
    <div class="main" flex="cross:canter dir:top">
      <div class="logo">
        <img src="@/image/login/ic-logo.png">
      </div>
      <button @click="toIndex()">登录</button>
      <div class="logo_bottom">
        <img src="@/image/login/logo.png">
        <p>支付许可证编号：Z2004951000010</p>
      </div>
    </div>
  </div>
</template>

<script>
import "@/commonCSS/flexcss.less";
import { ActionBar, Toast } from "mand-mobile";
export default {
  name: "login",
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
    },
    toIndex() {
      this.$router.push("/index");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.main {
  background: url("~@/image/login/bj.png") no-repeat;
  background-size: 100% 100%;
  button {
    position: absolute;
    width: 80%;
    height: 1.5rem;
    top: 50%;
    left: 0;
    right: 0;
    margin: 0 auto;
    border: none;
    background: #fff;
    border-radius: 0.5rem;
  }
  .logo {
    width: 100%;
    position: absolute;
    top: 2rem;
    text-align: center;
    img {
      width: 3.5rem;
      height: 3.5rem;
    }
  }
  .logo_bottom {
    width: 100%;
    position: absolute;
    bottom: 1rem;
    text-align: center;
    color: #fff;
    img {
      width: 70%;
    }
  }
}
</style>
