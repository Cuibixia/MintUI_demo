<template>
  <div class="home">
      <div class="header">
        <div class="logo"></div>
        <div class="sayHi">欢迎您&nbsp;&nbsp;{{phone}}</div>
        <div class="customer">
        <i class="fa fa-envelope-o" aria-hidden="true"></i><br>
        <span>消息</span>       
        </div>
        <div class="customer">
        <i class="fa fa-user" aria-hidden="true"></i><br>
        <span>在线客服</span>       
        </div>       
      </div>
      <div style="height:66px"></div>
      <router-view></router-view>
      <div class="footer">
        <mt-tabbar>
          
            <mt-tab-item id="tab1">
              <router-link to="/homePage">
                <i class="fa fa-home" aria-hidden="true"></i>首页
              </router-link>
              <!-- <img slot="icon" src="../assets/100x100.png"> -->
              
            </mt-tab-item>
          
            <mt-tab-item id="tab2">
              <!-- <img slot="icon" src="../assets/100x100.png"> -->
              <router-link to="/homePage">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>业务办理
              </router-link>
            </mt-tab-item>
            <mt-tab-item id="tab3">
              <!-- <img slot="icon" src="../assets/100x100.png"> -->
              <router-link to="/homePage">
                <i class="fa fa-shopping-bag" aria-hidden="true"></i>专属特惠
              </router-link>
            </mt-tab-item>
          
            <mt-tab-item id="tab4">
              <!-- <img slot="icon" src="../assets/100x100.png"> -->
              <router-link to="/myInfo"> 
                <i class="fa fa-user-circle" aria-hidden="true"></i>我的移动
              </router-link>
            </mt-tab-item>
          
        </mt-tabbar>
      </div> 
    
  </div>

</template>

<script>
export default {
  data () {
    return {
      phone:13437880187,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.home{
  /*height: 800px;*/
}
.home .header{
  width: 100%;
  height: 50px;
  padding: 8px;
  position: fixed;
  box-shadow: 0 1.5px 1.5px gray;
  /*border-bottom:1px solid gray;*/
  /*background: gray;*/
}
.home .header .logo{
  /*width: 48px;
  height: 42px;*/
  width: 3rem;
  height: 2.6rem;
  background: url('./../assets/logo.png');
  /*background-position:-92px -84px;*/
  background-position:-5.7rem -5.25rem;
  float: left;
}

.home .header .sayHi{
  float: left;
  padding-top: 10px;
  padding-left: 5px;
  color: #007bc7;
}
.home .header .customer{
  float: right;
  text-align: center;
  margin: 0 15px;
  /*font-size: 0.5em;*/
}
.home .header .customer i{
  font-size: 1.5em;
  color: #007bc7;
}
.home .header .customer span{
  font-size: 0.5em;
}

.footer{

}
</style>
