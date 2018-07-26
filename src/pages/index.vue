<template>
<div class="container">
  <div class="page">
    <img src="../assets/img/product_header_bg.png" class="header-bg">
    <div class="page-top">
      <h3 class="title">大海贷</h3>
      <p class="tips">最高可以申请额度（元）</p>
      <p class="money">2000</p>
      <a href="javascript:;" @click="getUrl()" class="btn-href">
						申请借款
					</a>
      <ul class="clearfix">
        <li>
          <a href="javascript:;" @click="getUrl()">
								<span class="nav-cricle nav1">
									<img src="../assets/img/user_online_shopping.png"/>
								</span>
								<span class="txt">网购分期</span>
							</a>
        </li>
        <li>
          <a href="javascript:;" @click="getUrl()">
								<span class="nav-cricle nav1">
									<img src="../assets/img/user_tourism.png"/>
								</span>
								<span class="txt">旅游分期</span>
							</a>
        </li>
        <li>
          <a href="javascript:;" @click="getUrl()">
								<span class="nav-cricle nav1">
									<img src="../assets/img/user_rent.png"/>
								</span>
								<span class="txt">租房分期</span>
							</a>
        </li>
        <li>
          <a href="javascript:;" @click="getUrl()">
								<span class="nav-cricle nav1">
									<img src="../assets/img/user_medical.png"/>
								</span>
								<span class="txt">医美分期</span>
							</a>
        </li>
      </ul>
    </div>
    <div class="page-list">
      <p class="list-title">
        | 精品分期推荐
      </p>
      <ul class="clearfix">
        <li>
          <a href="javascript:;" @click="getUrl()">
								<img src="../assets/img/product02.png"/>
								<p>小米</p>
								<p class="aui-ellipsis-1">红米note5全面屏</p>
								<p class="money">¥1200</p>
							</a>
        </li>
        <li>
          <a href="javascript:;" @click="getUrl()">
								<img src="../assets/img/product02.png"/>
								<p>小米</p>
								<p class="aui-ellipsis-1">红米note5全面屏</p>
								<p class="money">¥1200</p>
							</a>
        </li>
        <li>
          <a href="javascript:;" @click="getUrl()">
								<img src="../assets/img/product02.png"/>
								<p>小米</p>
								<p class="aui-ellipsis-1">红米note5全面屏</p>
								<p class="money">¥1200</p>
							</a>
        </li>
        <li>
          <a href="javascript:;" @click="getUrl()">
								<img src="../assets/img/product02.png"/>
								<p>小米</p>
								<p class="aui-ellipsis-1">红米note5全面屏</p>
								<p class="money">¥1200</p>
							</a>
        </li>
      </ul>
    </div>
  </div>
  <footer class="aui-bar aui-bar-tab" id="footer">
    <div class="aui-bar-tab-item aui-active">
      <i class="aui-iconfont aui-icon-home"></i>
      <div class="aui-bar-tab-label">首页</div>
    </div>
    <router-link class="aui-bar-tab-item" to="/my">
      <i class="aui-iconfont aui-icon-my"></i>
      <div class="aui-bar-tab-label">我的</div>
    </router-link>
  </footer>
</div>
</template>

<script>
import { cookie } from 'vux'
  export default {
    data(){
      return{

      }
    },
    methods:{
      getUrl(){
        let mobile=cookie.get('p');
        if(mobile){
          //请求借款状态
          //没有借款跳转借款页面
          //有借款进入借款状态页面，提现，还款、逾期
          this.$http.get('/h5/jhk/user/info').then(
            rep => {
              console.log(rep.data);
              if(rep.data.code==0){
                //存储
                localStorage.userInfo=JSON.stringify(rep.data.detail);
                let st=rep.data.detail.auth_status;
                let status=rep.data.detail.status;
                if(st==0){
                  this.$router.push('/borrowMoney');
                }else if(st==3){
                  this.$router.push('/auditWaiting');
                }else if (st==4) {
                  this.$router.push('/refuse');
                }else if (st==5&&!status.scode) {
                  this.$router.push('/withdrawal');//带参数过去
                }else if (st==5&&status.scode==2) {
                  this.$router.push('/toBankAudit');
                }else if (st==5&&status.scode==3) {
                  this.$router.push('/error');
                }else if (st==5&&status.scode==4) {
                  this.$router.push('/repayment');
                }
              }
            }
          )
          //
        }else{
          this.$router.push('/login');
        }
      }
    }
  }
</script>

<style>
.page {

  padding-bottom: 2.5rem;

}

.page .header-bg {
  width: 100%;
  height: 16.6rem;
}

.page .page-top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 16.6rem;
}

.page .page-top .title {
  padding-top: 1rem;
  text-align: center;
}

.page .page-top .tips {
  margin-top: 1rem;
  font-size: 0.7rem;
  text-align: center;
  color: #66B4E8;
}

.page .page-top .money {
  font-size: 2rem;
  line-height: 2rem;
  height: 2rem;
  color: #66B4E8;
  text-align: center;
  margin: 1rem 0 0.8rem;
}

.page .page-top .btn-href {
  display: block;
  margin: 0 auto;
  width: 5rem;
  height: 1.6rem;
  background: #66B4E8;
  color: #fff;
  line-height: 1.6rem;
  font-size: 0.7rem;
  text-align: center;
  border-radius: 2rem;
  margin-bottom: 1rem;
}

.page .page-top ul li {
  width: 25%;
  float: left;
}

.page .page-top ul li a {
  height: 6rem;
  width: 100%;
}

.page .page-top ul li a .nav-cricle {
  display: block;
  margin: 0 auto;
  width: 3.2rem;
  height: 3.2rem;
}

.page .page-top ul li a .nav-cricle img {
  width: 3.2rem;
  height: 3.2rem;
}

.page .page-top ul li a .txt {
  display: block;
  text-align: center;
  color: #333;
  padding-top: 0.3rem;
  font-size: 0.7rem;
}

.page-list .list-title {
  font-size: 0.7rem;
  color: #333;
  padding-left: 0.5rem;
  margin-bottom: 0.5rem;
}

.page-list ul li {
  width: 50%;
  float: left;
}

.page-list ul li:nth-child(odd) {
  padding-left: 0.5rem;
  padding-right: 0.25rem;
}

.page-list ul li:nth-child(even) {
  padding-left: 0.25rem;
  padding-right: 0.5rem;
}

.page-list ul li a {
  display: block;
  background: #fff;
  border-radius: 0.4rem;
  width: 100%;
  font-size: 0.6rem;
  color: #333;
  padding: 0.5rem 0;
  margin-bottom: 0.5rem;
}

.page-list ul li a p {
  padding: 0 0.5rem;
  line-height: 1rem;
  color: #666;
}

.page-list ul li a p.money {
  color: #E6B543;
}
</style>
