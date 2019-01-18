<template>
  <div>
    <section class="vm-systemEmpty empty-cart" v-if="show">
      <header class="h">
        <i class="icon-stc"></i>

        <p class="vm-systemEmpty-title">
          <span>去购物车看看吧！</span>
        </p>
      </header>

      <div class="f">
        <a class="vm-button type2 round small" href="javascript:;" @click="gohome">去购物车</a>
      </div>
    </section>

    <section class="system-pro-list">
      <header class="h">
        <span>热销推荐</span>
      </header>
      <div class="b">
        <ul>
          <li v-for="(item,index) in carList" :key="index">
            <a href="javascript:;">
              <p class="p-img">
                <img
                  :src=" item.photoPath +  '428_428_' + item.photoName | ht"
                  @click = "saveId(item.prdId)"
                >
              </p>
              <p class="p-name">
                <span>
                  <em>{{item.displayName}}</em>
                </span>
              </p>

              <p class="p-price">
                <b>¥ {{item.price}}
                </b>
                <span @click="addCar(item.prdId)"> 加入购物车</span>
              </p>
            </a>
          </li>
         
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "cItem",
  mounted() {
      this.getData();
      this.showcar();
  },
  data(){
      return {
          carList:JSON.parse(localStorage.getItem("carList")) || [],
          carAdds:JSON.parse(localStorage.getItem("carAdds")) || [],
           show:true
      }
  },

  methods: {
    gohome() {
      this.$router.push("/");
    },
    async getData(){
        let url = "/huawei/mcp/cart/queryEptCartRecommendPrds?portal=2&lang=zh-CN&country=CN";
        let data =await this.$axios.get(url);
        this.carList = data.data.products;
        localStorage.setItem("carList",JSON.stringify(this.carList));
    },
    addCar(prdId){
      let self=this;
        this.carList.map((item,index)=>{
            if(item.prdId === prdId){
              if(self.hasId(this.carAdds,prdId)){
                localStorage.setItem("carAdds",JSON.stringify(self.carAdds));
                return ;
              }else{
                self.carAdds = self.carAdds.concat(item);                
                localStorage.setItem("carAdds",JSON.stringify(self.carAdds));
                return ;
              }
                
            }
        })
    },
   
     hasId(aMsg,prdId){
          for(var i=0;i<aMsg.length;i++){
              if(aMsg[i].prdId===prdId){
                  aMsg[i].buttonMode ++;
                  return true;
              }
          }
          return false;
      },
      showcar(){
        if(this.carAdds){
        this.show = false

        }
      },
      saveId(id){
        sessionStorage.setItem("prdId",id);
        this.$router.push("/detail");
      }
        
  }
};
</script>

<style scoped>
.vm-systemEmpty {
  padding: 35% 0.8rem;

  text-align: center;
}

.vm-systemEmpty.empty-cart {
  padding: 1.25rem 0.8rem;
}

.icon-sc {
  background-image: url(https://res.vmallres.com/nwap/20181215/staticm/img/icon32.a3370aa.png);

  height: 1.2rem;

  width: 1.2rem;

  display: inline-block;

  background-size: 100% auto;

  background-position: 0 0;
}

.vm-systemEmpty.empty-cart .icon-sc {
  position: relative;

  top: 0.3rem;

  margin-right: 0.5rem;
}

.vm-systemEmpty.empty-cart .vm-systemEmpty-title {
  display: inline-block;

  line-height: 1.2rem;
}

.vm-systemEmpty-title {
  padding-top: 0.2rem;
}

.vm-systemEmpty-title span {
  font-size: 0.75rem;

  color: #888;

  display: block;
}

.vm-systemEmpty.empty-cart .f {
  padding: 0.4rem 0 0;
}

.vm-button.small {
  padding: 0 0.65rem;

  height: 1.15rem;

  line-height: 1.15rem;

  border-radius: 1rem;

  text-align: center;

  min-width: 1.8rem;
}

.vm-button.type2 {
  border: 1px solid #ca151e;

  color: #ca151e;

  display: inline-block;

  text-align: center;

  font-size: 0.6rem;
}

.system-pro-list {
  background-color: #fff;

  overflow: hidden;

  margin-bottom: 0.25rem;
}

.system-pro-list .h {
  height: 1.75rem;

  line-height: 1.5rem;

  background-color: #fff;

  text-align: left;

  padding: 0 0.8rem;

  position: relative;
}

.system-pro-list .h span {
  font-size: 0.55rem;

  color: #222;
}
.system-pro-list .b {
    border-top: 1px solid #f9f9f9;
}
.system-pro-list .b ul {
    width: 100%;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
}
.system-pro-list .b ul li {
    width: 50%;
    float: left;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    border-right: 1px solid #f9f9f9;
    border-bottom: 1px solid #f9f9f9;
}
.system-pro-list a {
    padding: 0.85rem 0.8rem 0.65rem;
    text-align: center;
    display: block;
}
.system-pro-list .p-img {
    color: #333;
    height: 4.25rem;
    width: 4.25rem;
    margin: 0 auto;
    position: relative;
}
.system-pro-list .p-name {
    font-size: 0.55rem;
    color: #333;
    text-align: center;
    height: 1.4rem;
    padding: 0.35rem 0 0;
    margin: 0 auto;
    display: table;
    white-space: normal;
}
.system-pro-list .p-name span {
    display: table-cell;
    vertical-align: middle;
}
.system-pro-list .p-name span em {
    line-height: 1.2;
    max-height: 1.35rem;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.system-pro-list .p-price b {
    font-size: 0.65rem;
    font-weight: normal;
    color: #ca151e;
    line-height: 1.2;
}
.p-price span{
    background-color: #ca151e;
    box-shadow: 0 0 0 1rem #ca151e inset;
    border: 1px solid #cc0a0d;
    color: #fff;
    padding:.1rem;
    font-size: .02rem;
    border-radius: .3rem;
}

</style>