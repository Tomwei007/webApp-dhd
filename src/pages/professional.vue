<template>
<div class="container">
  <header class="aui-bar aui-bar-nav aui-bar-light">
    <router-link class="aui-pull-left aui-btn" to="/myInfo">
      <span class="aui-iconfont aui-icon-left"></span>
    </router-link>
    <div class="aui-title">职业信息</div>
  </header>
  <form id="form">
    <ul class="aui-list aui-form-list">
      <li class="aui-list-item">
        <div class="aui-list-item-inner">
          <div class="aui-list-item-label">
            职业
          </div>
          <div class="aui-list-item-input">
            <select v-model="formData.jobType" required placeholder="请选择职业">
          		<option value="">--请选择--</option>
          		<option value="1">工薪族</option>
          		<option value="2">企业主</option>
          		<option value="3">个体户</option>
          		<option value="4">学生</option>
          		<option value="5">自由职业者</option>
          	</select>
          </div>
        </div>
      </li>
      <li class="aui-list-item">
        <div class="aui-list-item-inner">
          <div class="aui-list-item-label">
            月收入
          </div>
          <div class="aui-list-item-input">
            <input type="number" placeholder="请输入人民币月收入" v-model="formData.incomeLevel" min="0" max="9999999" required>
          </div>
        </div>
      </li>
      <li class="aui-list-item">
        <div class="aui-list-item-inner">
          <div class="aui-list-item-label">
            单位名称
          </div>
          <div class="aui-list-item-input">
            <input type="text" placeholder="请填写所在单位名称" v-model="formData.companyName" required>
          </div>
        </div>
      </li>
      <li class="aui-list-item">
        <div class="aui-list-item-inner">
          <div class="aui-list-item-label">
            所在省市
          </div>
          <div class="aui-list-item-input">
            <x-address v-model="address" :list="addressData" placeholder="请选择所在省市" value-text-align='left' title=""></x-address>
          </div>
        </div>
      </li>
      <li class="aui-list-item">
        <div class="aui-list-item-inner">
          <div class="aui-list-item-label">
            单位地址
          </div>
          <div class="aui-list-item-input">
            <textarea placeholder="请输入单位地址" v-model="formData.companyAddress" required></textarea>
          </div>
        </div>
      </li>
      <li class="aui-list-item">
        <div class="aui-list-item-inner">
          <div class="aui-list-item-label">
            单位电话
          </div>
          <div class="aui-list-item-input">
            <input type="text" placeholder="区号+号码（选填）" v-model="formData.companyTel">
          </div>
        </div>
      </li>

    </ul>
    <div class="btn-group">
      <div class="aui-btn aui-btn-block aui-btn-primary" v-on:click="save()">确定</div>
    </div>
  </form>
</div>
</template>

<script>
import {
  formRequired
} from '../assets/js/server'
import {
  XAddress,
  ChinaAddressV4Data,
  Value2nameFilter as value2name
} from 'vux'

export default {
  data() {
    return {
      formData: {
        jobType: '',
        incomeLevel: '',
        companyName: '',
        companyAddress: '',
        companyTel: ''
      },
      addressData: ChinaAddressV4Data,
      address: []
    }
  },
  mounted() {
    this.$http.get('/h5/auth/user/job', {}).then(
      rep => {
        console.log(rep.data);
        if (rep.data.code == 0) {
          if (rep.data.detail.job_type != 0) {
            //this.formData=rep.data.detail;
            let data = rep.data.detail;
            this.formData.jobType = data.job_type;
            this.formData.incomeLevel = data.income_level;
            this.formData.companyName = data.company_name;
            this.formData.companyAddress = data.company_address;
            this.formData.companyTel = data.company_tel;
            this.address = [
              data.province_name,
              data.city_name,
              data.region_name
            ]
          }
        }
      }
    )
  },
  components: {
    XAddress
  },
  methods: {
    save() {
      let res = formRequired(); //表单验证
      if (res.st) {
        //请求数据
        if (this.address.length > 0) {
          let address = value2name(this.address, ChinaAddressV4Data);
          address = address.split(' ');
          if (address[1] == '市辖区') {
            address[1] = address[0];
          }
          this.formData.regionName = address[0] + "-" + address[1] + "-" + address[2];
          this.$http.post('/h5/auth/user/job', this.formData).then(
            rep => {
              console.log(rep.data);
              if (rep.data.code == 0) {
                this.$vux.toast.show({
                  text: '保存成功！',
                  type: 'success'
                })
                this.$router.push('/myInfo');
              } else {
                this.$vux.toast.show({
                  text: rep.data.msg,
                  type: 'text'
                })
              }
            }
          )
        } else {
          this.$vux.toast.show({
            text: '请选择所在省市！',
            type: 'text'
          })
        }
      } else {
        this.$vux.toast.show({
          text: res.info,
          type: 'text'
        })
      }
    }
  }
}
</script>

<style>
</style>
