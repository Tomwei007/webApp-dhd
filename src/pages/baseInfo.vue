<template>
<div class="container">
  <header class="aui-bar aui-bar-nav aui-bar-light">
    <router-link class="aui-pull-left aui-btn" to="/myInfo">
      <span class="aui-iconfont aui-icon-left"></span>
    </router-link>
    <div class="aui-title">基本信息</div>
  </header>
  <form id='form'>
    <ul class="aui-list aui-form-list">
      <li class="aui-list-item">
        <div class="aui-list-item-inner">
          <div class="aui-list-item-label">
            QQ号码
          </div>
          <div class="aui-list-item-input">
            <input type="text" placeholder="请输入QQ号码" name="qq" v-model="userInfo.qq" required>
          </div>
        </div>
      </li>
      <li class="aui-list-item">
        <div class="aui-list-item-inner">
          <div class="aui-list-item-label">
            微信号
          </div>
          <div class="aui-list-item-input">
            <input type="text" placeholder="请输入微信号" name="wechat" v-model="userInfo.wechat" required>
          </div>
        </div>
      </li>
      <li class="aui-list-item">
        <div class="aui-list-item-inner">
          <div class="aui-list-item-label">
            居住省市
          </div>
          <div class="aui-list-item-input">
            <x-address v-model="address" :list="addressData" placeholder="请选择地址" value-text-align='left' title=""></x-address>
          </div>
        </div>
      </li>
      <li class="aui-list-item">
        <div class="aui-list-item-inner">
          <div class="aui-list-item-label">
            常驻地址
          </div>
          <div class="aui-list-item-input">
            <textarea placeholder="请输入常驻地址" name="address" v-model="userInfo.address" required></textarea>
          </div>
        </div>
      </li>
      <li class="aui-list-item">
        <div class="aui-list-item-inner">
          <div class="aui-list-item-label">
            婚姻状况
          </div>
          <div class="aui-list-item-input">
            <select name="maritalStatus" v-model="userInfo.marital_status" required>
          		<option value="">--请选择--</option>
          		<option value="1">未婚</option>
          		<option value="2">已婚无子女</option>
          		<option value="3">已婚有子女</option>
          		<option value="4">离异</option>
          		<option value="5">丧偶</option>
          	</select>
          </div>
        </div>
      </li>
      <li class="aui-list-item">
        <div class="aui-list-item-inner">
          <div class="aui-list-item-label">
            学历信息
          </div>
          <div class="aui-list-item-input">
            <select name="eduType" v-model="userInfo.edu_type" required>
          		<option value="">--请选择--</option>
          		<option value="1">中专/高中以下</option>
          		<option value="2">大专</option>
          		<option value="3">本科</option>
          		<option value="4">硕士及以上</option>
          	</select>
          </div>
        </div>
      </li>
      <li class="aui-list-item">
        <div class="aui-list-item-inner">
          <div class="aui-list-item-label">
            车辆情况
          </div>
          <div class="aui-list-item-input">
            <select name="carStatus" v-model="userInfo.car_status" required>
          		<option value="">--请选择--</option>
          		<option value="1">无车</option>
          		<option value="2">有车无贷款</option>
          		<option value="3">有车有贷款</option>
          	</select>
          </div>
        </div>
      </li>
    </ul>
  </form>
  <div class="btn-group">
    <div class="aui-btn aui-btn-block aui-btn-primary" @click="save()">确定</div>
  </div>
</div>
</template>

<script>
import { XAddress,ChinaAddressV4Data,Value2nameFilter as value2name } from 'vux'

export default {
  data() {
    return {
      userInfo: {
        qq: '',
        wechat: '',
        address: '',
        marital_status: '',
        edu_type: '',
        car_status: '',
        city: ''
      },
      addressData:ChinaAddressV4Data,
      address:[]
    }
  },
  mounted() {
    this.$http.get('/h5/auth/user/base', {}).then(
      rep => {
        console.log(rep.data);
        if(rep.data.code==0){
          if(rep.data.detail.qq){
            this.userInfo=rep.data.detail;
            //给地址赋值
            this.address=[
              this.userInfo.province_name,
              this.userInfo.city_name,
              this.userInfo.region_name
            ]
          }
        }

      }
    )
  },
  methods: {
    //提交数据
    save(){
      let _this=this;
      let address=value2name(this.address, ChinaAddressV4Data);
      address=address.split(' ');
      if(address[1]=='市辖区'){
        address[1]=address[0];
      }

      _this.userInfo.regionName=address[0]+"-"+address[1]+"-"+address[2];
      _this.userInfo.maritalStatus=_this.userInfo.marital_status;
      _this.userInfo.eduType=_this.userInfo.edu_type;
      _this.userInfo.carStatus=_this.userInfo.car_status;
      this.$http.post('/h5/auth/user/base',this.userInfo).then(
        rep => {
          console.log(rep.data);
          if(rep.data.code==1){
            _this.$vux.toast.show({
              text: rep.data.msg,
              type: 'text'
            })
          }else if(rep.data.code==0) {
            _this.$vux.toast.show({
              text: '提交成功！',
              type: 'success'
            })
            _this.$router.push('/myInfo');
          }

        }
      )
    }
  },
  components: {
    XAddress
  }
}
</script>

<style>
</style>
