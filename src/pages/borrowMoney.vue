<template>
<div class="container">
  <header class="aui-bar aui-bar-nav aui-bar-light">
    <a class="aui-pull-left aui-btn" @click="goBack()">
			        <span class="aui-iconfont aui-icon-left"></span>
			    </a>
    <div class="aui-title">申请借款</div>
  </header>
  <div class="content">
    <p class="tit">请选择借款金额</p>
    <p class="money">{{loan}}</p>
    <!--
				<div class="progress">
			        <div class="progress-bar" style="width: 50%;"></div>
			        <div class="point" id="point">
			        	<span></span>
			        </div>
			 	</div>
			    <div class="progress-staus">
			    	<ul class="clearfix">
			    		<li><span>500元</span></li>
			    		<li>1000元</li>
			    		<li><span>2000元</span></li>
			    	</ul>
			    </div>
			    -->
    <div class="form">
      <div class="form-control clearfix bt">
        <label>借款金额</label>
        <select name="loan" v-model="loan" @change="getMoney()">
			    			<option value="500">500</option>
			    			<option value="600">600</option>
			    			<option value="700">700</option>
			    			<option value="800">800</option>
			    			<option value="900">900</option>
			    			<option value="1000" selected="selected">1000</option>
			    			<option value="1200">1200</option>
			    			<option value="1400">1400</option>
			    			<option value="1600">1600</option>
			    			<option value="1800">1800</option>
			    			<option value="2000">2000</option>
			    		</select>
        <div class="down">
          <i class="aui-iconfont aui-icon-down"></i>
        </div>
      </div>
      <div class="form-control clearfix bt">
        <label>借款期限</label>
        <select name="days" v-model="days">
			    			<option value="7">7天</option>
			    		</select>
        <div class="down">
          <i class="aui-iconfont aui-icon-down"></i>
        </div>
      </div>
      <div class="form-control clearfix">
        <label>借款用途</label>
        <select name="usedFor" v-model="usedFor">
			    			<option value="1">结婚</option>
			    			<option value="2">生子</option>
			    			<option value="3">聚会</option>
			    			<option value="4">房租</option>
			    			<option value="5">就医</option>
			    			<option value="6">购物</option>
			    			<option value="7">升学</option>
			    			<option value="8">节日</option>
			    		</select>
        <div class="down">
          <i class="aui-iconfont aui-icon-down"></i>
        </div>
      </div>
    </div>
    <p class="tips">预计还款金额{{money}}元</p>
    <div class="btn-group" id="">
      <div class="aui-btn aui-btn-block aui-btn-primary" @click="save()">提交申请 </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      loan: 1000,
      days: 7,
      money: '',
      usedFor: 1
    }
  },
  mounted() {
    this.getMoney();
  },
  methods: {
    goBack() {
      this.$router.push('/index');
    },
    save() {
      //this.$router.push('/auditWaiting');
      //获取个人信息
      this.$http.post('/h5/jhk/order/loanApply', {
        loan: this.loan,
        days: this.days,
        usedFor: this.usedFor
      }).then(
        rep => {
          console.log(rep.data);
          if (rep.data.code == 0) {
            //this.$router.push('/auditWaiting');
            this.$http.get('/h5/user/auth').then(
              rep => {
                if (rep.data.code == 0) {
                  //console.log(rep.data);
                  let data = rep.data.detail;
                  console.log(data)
                  if(data.ID==0){
                    this.$router.push('/uploadIdCard');
                  }else{
                    this.$router.push('/shenhe');
                  }
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
              text: rep.data.msg,
              type: 'text'
            })
          }
        }
      )



      // this.$http.get('/api/auth/user/status').then(

      // )
    },
    getMoney() {
      this.$http.post('/h5/jhk/order/computeInterest', {
        loan: this.loan,
        days: this.days
      }).then(
        rep => {
          //console.log(rep.data);
          if (rep.data.code == 0) {
            this.money = rep.data.detail.total_repayment / 100;
            this.money = this.money.toFixed(2)
          }
        }
      )
    }

  }
}
</script>

<style scoped>
.content {
  top: 2.25rem;
}

.content p {
  text-align: center;
  color: #666;
}

.content p.tit {
  font-size: 0.8rem;
  margin-top: 1.5rem;
  padding-bottom: 0.5rem;
}

.content .money {
  font-size: 2.5rem;
  color: #66B4E8;
}

.progress {
  width: 80%;
  background: #DBDBDB;
  margin: 0 auto;
  height: 0.5rem;
  position: relative;
}

.progress .progress-bar {
  position: absolute;
  top: 0;
  left: 0;
  height: 0.5rem;
  background: #E0B061;
}

.progress .point {
  width: 1rem;
  height: 1rem;
  position: absolute;
  left: -0.25rem;
  top: -0.25rem;
  background: #E0B061;
  border-radius: 50%;
}

.progress .point span {
  display: block;
  width: 0.6rem;
  height: 0.6rem;
  background: #F2C883;
  border-radius: 50%;
  margin-top: 0.2rem;
  margin-left: 0.2rem;
}

.progress-staus {
  width: 80%;
  margin: 0 auto;
  padding-top: 0.8rem;
}

.progress-staus ul li {
  float: left;
  width: 33.33%;
  font-size: 0.8rem;
  color: #F2C883;
}

.progress-staus ul li:nth-child(2) {
  text-align: center;
}

.progress-staus ul li:nth-child(1) span {
  margin-left: -1rem;
}

.progress-staus ul li:nth-child(3) {
  text-align: right;
}

.progress-staus ul li:nth-child(3) span {
  margin-right: -1rem;
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
  width: 30%;
  height: 2.2rem;
  line-height: 2.3rem;
  text-align: center;
  color: #999;
}

.form .form-control select {
  display: block;
  float: left;
  width: 70%;
}

.form .form-control.bt {
  border-bottom: 1px solid #ddd;
}

.tips {
  text-align: left !important;
  font-size: 0.8rem;
  padding-left: 1rem;
}

.btn-group {
  padding: 1rem;
  margin-top: 1rem;
}

.aui-btn-dv {
  background-color: #E0B061 !important;
  color: #fff;
}

.range {
  width: 80%;
  margin: 0 auto;
}
</style>
