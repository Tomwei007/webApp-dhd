<template>
<div id="app">
  <transition :name="transitionName">
    <router-view/>
  </transition>
</div>
</template>

<script>
import './assets/css/aui.css'
export default {
  name: 'App',
  data() {
    return {
      transitionName: ''
    }
  },
  watch: { //监听$router的变化
    $route(to, from) {
      if (to.meta.index > from.meta.index) {
        this.transitionName = 'slide-left';

      } else if(to.meta.index == from.meta.index) {
        this.transitionName = '';
      }else{
        this.transitionName = 'slide-right';
      }
    }

  }
}
</script>

<style >
* {
  padding: 0;
  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

#app {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.clearfix:after {
  display: table;
  content: "";
  clear: both;
}

ul,
li {
  list-style: none;
}

.container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  max-width: 750px;
  margin: 0 auto;
}

.content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: #fff;
  -webkit-overflow-scrolling:touch;
}
.page{
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  top:0;
  left: 0;
  -webkit-overflow-scrolling:touch;
}

.btn-dv {
  width: 80%;
  background: #66B4E8 !important;
  height: 2rem !important;
  border-radius: 2rem !important;
  line-height: 2rem !important;
}

.get-code {
  width: 5.5rem;
  height: 2rem;
  background: #66B4E8;
  font-size: 0.7rem;
  position: absolute;
  top: 0;
  right: 0;
  line-height: 2rem;
  color: #fff;
  text-align: center;
  border-radius: 2rem;
}

.count-down {
  width: 5.5rem;
  height: 2rem;
  background: #999;
  font-size: 0.7rem;
  position: absolute;
  top: 0;
  right: 0;
  line-height: 2rem;
  color: #fff;
  text-align: center;
  border-radius: 2rem;
}

/* .aui-bar-tab {
  position: absolute;
} */

/* .aui-list {
  border-top: none;
  border-bottom: 1px solid #ddd;
}

.aui-list .aui-list-item {
  border-bottom: none;
}

.aui-list li:last-child .aui-list-item-inner {
  border-bottom: none;
}

.aui-list .aui-list-item-inner {
  border-bottom: 1px solid #ddd;
} */

.aui-bar-light {
  color: #333 !important;
}

.aui-bar-nav.aui-bar-light .aui-iconfont {
  color: #333 !important;
}

/* header {
  border-bottom: 1px solid #ddd !important;
} */

.btn-group {
  padding: 1rem;
  margin-top: 1rem;
}

.btn-group .aui-btn-dv {
  background-color: #E0B061 !important;
  color: #fff;
}

.bg-dark {
  background-color: #999 !important;
}

/*路由切换动画*/

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}

.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.content-pd{
  padding-top: 2.25rem;
}

.form {
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 1rem;
}

.form .form-control {
  position: relative;
  width: 100%;
}

.form .form-control .down {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}

.form .form-control .down .aui-iconfont {
  color: #ccc;
}

.form .form-control label {
  display: block;
  float: left;
  width: 40%;
  height: 2.2rem;
  line-height: 2.3rem;
  text-align: center;
  color: #999;
}

.form .form-control select,.form .form-control input {
  display: block;
  float: left;
  width: 40%;
}

.form .form-control.bt {
  border-bottom: 1px solid #ddd;
}

</style>
