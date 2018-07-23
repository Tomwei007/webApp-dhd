<template>
<div class="container">
  <header class="aui-bar aui-bar-nav aui-bar-light">
    <router-link class="aui-pull-left aui-btn" to="/shenhe">
      <span class="aui-iconfont aui-icon-left"></span>
    </router-link>
    <div class="aui-title">个人信息</div>
  </header>
  <div class="page content-pd">
    <ul class="aui-list aui-list-in">
      <li class="aui-list-item aui-list-item-middle">
        <router-link class="aui-list-item-inner aui-list-item-arrow" to="/baseInfo">
          <div class="aui-list-item-title">基本信息</div>
          <div class="aui-list-item-right">
            <span v-if="base_status==0">去完善</span>
            <span v-else>已完善</span>
          </div>
        </router-link>
      </li>
      <li class="aui-list-item">
        <router-link class="aui-list-item-inner aui-list-item-arrow" to="/professional">
          <div class="aui-list-item-title">职业信息</div>
          <div class="aui-list-item-right">
            <span v-if="job_status==0">去完善</span>
            <span v-else>已完善</span>
          </div>
        </router-link>
      </li>
      <li class="aui-list-item">
        <router-link class="aui-list-item-inner aui-list-item-arrow" to="/contacts">
          <div class="aui-list-item-title">紧急联系人</div>
          <div class="aui-list-item-right">
            <span v-if="contact_status==0">去完善</span>
            <span v-else>已完善</span>
          </div>
        </router-link>
      </li>
    </ul>
    <div class="btn-group">
      <div class="aui-btn aui-btn-block aui-btn-primary" @click="save()">提交</div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  data() {
    return {
      base_ID: 0,
      base_status: 0,
      contact_status: 0,
      job_status: 0,
      isupload: 0,
      btn: false
    }
  },
  mounted() {
    this.$http.get('/api/auth/user/status').then(
      rep => {
        console.log(rep.data);
        if (rep.data.code == 0) {
          this.base_status = rep.data.detail.base_status;
          this.contact_status = rep.data.detail.contact_status;
          this.job_status = rep.data.detail.job_status;
          this.isupload = rep.data.detail.isupload;
        }
      }
    )
  },
  methods: {
    save() {
      //console.log(this.$route.params);
      if (this.base_status == 1 && this.contact_status == 1 && this.job_status == 1) {
        this.$http.post('/api/auth/user/submit').then(
          rep => {
            console.log(rep.data);
            if (rep.data.code == 0) {
              this.$router.push('/shenhe');
              //localStorage.clear();//清除本地存储
            } else {
              this.$vux.toast.show({
                text: rep.data.msg,
                type: 'text'
              })
            }
          }
        )
      }else {
        this.$vux.toast.show({
          text:'请先完善信息',
          type:'text'
        })
      }
    }
  }
}
</script>

<style>
</style>
