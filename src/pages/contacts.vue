<template>
<div class="container">
  <header class="aui-bar aui-bar-nav aui-bar-light">
    <router-link class="aui-pull-left aui-btn" to="/myInfo">
      <span class="aui-iconfont aui-icon-left"></span>
    </router-link>
    <div class="aui-title">紧急联系人</div>
  </header>
  <ul class="aui-list aui-form-list">
    <li class="aui-list-item">
      <div class="aui-list-item-inner">
        <div class="aui-list-item-label">
          联系人关系
        </div>
        <div class="aui-list-item-input">
          <select name="" placeholder="请选择联系人关系" v-model="formData.kinship" required>
        		<option value="">--请选择--</option>
        		<option value="1">配偶</option>
        		<option value="2">父母</option>
        		<option value="3">子女</option>
        		<option value="4">朋友</option>
        	</select>
        </div>
      </div>
    </li>
    <li class="aui-list-item">
      <div class="aui-list-item-inner">
        <div class="aui-list-item-label">
          姓名
        </div>
        <div class="aui-list-item-input">
          <input type="text" placeholder="请输入姓名" v-model="formData.kinshipName" required>
        </div>
      </div>
    </li>
    <li class="aui-list-item">
      <div class="aui-list-item-inner">
        <div class="aui-list-item-label">
          联系方式
        </div>
        <div class="aui-list-item-input">
          <input type="number" placeholder="请输入联系电话" v-model="formData.kinshipMobile" required>
        </div>
      </div>
    </li>
  </ul>
  <ul class="aui-list aui-form-list" style="margin-top: 1rem;">
    <li class="aui-list-item">
      <div class="aui-list-item-inner">
        <div class="aui-list-item-label">
          联系人关系
        </div>
        <div class="aui-list-item-input">
          <select name="" placeholder="请选择联系人关系" v-model="formData.socialship" required>
        		<option value="">--请选择--</option>
        		<option value="1">配偶</option>
        		<option value="2">父母</option>
        		<option value="3">子女</option>
        		<option value="4">朋友</option>
        	</select>
        </div>
      </div>
    </li>
    <li class="aui-list-item">
      <div class="aui-list-item-inner">
        <div class="aui-list-item-label">
          姓名
        </div>
        <div class="aui-list-item-input">
          <input type="text" placeholder="请输入姓名" v-model="formData.socialshipName" required>
        </div>
      </div>
    </li>
    <li class="aui-list-item">
      <div class="aui-list-item-inner">
        <div class="aui-list-item-label">
          联系方式
        </div>
        <div class="aui-list-item-input">
          <input type="number" placeholder="请输入联系电话" v-model="formData.socialshipMobile" required>
        </div>
      </div>
    </li>
  </ul>
  <div class="btn-group">
    <div class="aui-btn aui-btn-block aui-btn-primary" @click="save()">确定</div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      formData:{
        kinship:'',
        kinshipName:'',
        kinshipMobile:'',
        socialship:'',
        socialshipName:'',
        socialshipMobile:''
      }
    }
  },
  mounted() {
    this.$http.get('/api/auth/user/contact').then(
      rep => {
        console.log(rep.data);

        if(rep.data.detail.kinship==0){
          this.formData.kinship='';
        }else {
          this.formData.kinship=rep.data.detail.kinship;
        }
        if(rep.data.detail.socialship==0){
          this.formData.socialship='';
        }else {
          this.formData.socialship=rep.data.detail.socialship;
        }
        this.formData.kinshipName=rep.data.detail.kinship_name;
        this.formData.kinshipMobile=rep.data.detail.kinship_mobile;
        this.formData.socialshipName=rep.data.detail.socialship_name;
        this.formData.socialshipMobile=rep.data.detail.socialship_mobile;

      }
    )
  },
  components: {},
  methods: {
    save(){
      let res=this.$formRequired();//表单验证
      if(res){
        this.$http.post('/api/auth/user/contact',this.formData).then(
          rep => {
            console.log(rep.data);
            if(rep.data.code==0){
              this.$vux.toast.show({
                text:'保存成功！',
                type:'msg'
              })
              this.$router.push('/myInfo');
            }else{
              this.$vux.toast.show({
                text:rep.data.msg,
                type:'text'
              })
            }
          }
        )
      }

    }
  }
}
</script>

<style>
</style>
