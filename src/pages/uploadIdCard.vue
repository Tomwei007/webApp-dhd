<template>
<div class="container">
  <header class="aui-bar aui-bar-nav aui-bar-light">
    <router-link class="aui-pull-left aui-btn" to="/borrowMoney">
      <span class="aui-iconfont aui-icon-left"></span>
    </router-link>
    <div class="aui-title">身份认证</div>
  </header>
  <div class="page content-pd">
    <div class="sfz" v-show="show">
      <div class="sfz-box" @click="chooseImg('zm')">
        <img src="../assets/img/sfzzm.png" id="zmImg" />
        <p style="padding-top:0.5rem;text-align: center;">点击上传身份证正面</p>
      </div>
      <div class="sfz-box" @click="chooseImg('fm')">
        <img src="../assets/img/sfzfm.png" id="fmImg" />
        <p style="padding-top:0.5rem;text-align: center;">点击上传身份证反面</p>
      </div>
      <div class="btn-group">
        <div class="aui-btn aui-btn-block aui-btn-primary" @click="next()">下一步</div>
      </div>
    </div>
    <div class="sfz-form" v-show="!show">
      <form id="fileForm" enctype="multipart/form-data">

        <input type="file" name='frontImage' id="sfzzm" style="display: none;" @change="getFiles($event,'zm')" />
        <input type="file" name='backImage' id="sfzfm" style="display: none;" @change="getFiles($event,'fm')" />
      </form>

    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      date: '',
      address: '',
      idNo: '',
      username: ''
    }
  },
  methods: {
    chooseImg(type) {
      if (type) {
        if (type == 'zm') {
          document.getElementById("sfzzm").click();
        } else if (type == 'fm') {
          document.getElementById("sfzfm").click();
        }
      }
    },
    next() {
      let frontImage = document.getElementById("sfzzm").files;
      let backImage = document.getElementById("sfzfm").files;
      if (frontImage.length == 0) {
        this.$vux.toast.show({
          text: '请上传身份证正面图！',
          type: 'text'
        })
      } else if (backImage.length == 0) {
        this.$vux.toast.show({
          text: '请上传身份证反面图！',
          type: 'text'
        })
      } else {
        //this.show = false;
        var data = new FormData(document.getElementById("fileForm"));
        this.$http.post('/api/auth/userid', data).then(
          rep => {
            //console.log(rep);
            if (rep.data.code == 0) {
              // this.$vux.toast.show({
              //   text: '保存成功！',
              //   type: ''
              // })
              this.$router.replace('/sfzInfo');
            }
          }
        )

      }
      //this.show=false;
    },
    getFiles(ev, type) {
      if (ev.target.files.length > 0) {
        const url = window.URL.createObjectURL(ev.target.files.item(0));
        if (type == 'zm') {
          document.getElementById("zmImg").setAttribute('src', url);
        } else {
          document.getElementById("fmImg").setAttribute('src', url);
        }
      } else {
        if (type == 'zm') {
          document.getElementById("zmImg").setAttribute('src', '');
        } else {
          document.getElementById("fmImg").setAttribute('src', '');
        }
      }
    }

  }

}
</script>

<style scoped>
.sfz-box {
  margin: 1rem 4rem;
  padding: 1rem 1rem 0.5rem;
  background: #fff;
  border-radius: 0.5rem;
}
</style>
