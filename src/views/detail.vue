<template>
    <div style="position:relative;">
        <header class="header-toggle">
            <div class="headerbox">
                <router-link class="fa fa-angle-left h-botton" to="/car"></router-link>
                <span class="fa fa-reorder h-botton"></span>
            </div>
        </header>
        <div class="pro-gallery">
            <div>
                <div class="swiper-container myswipers">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item,index) in datalist.img" :key=index>
                        <img :src="item.src" alt="">
                    </div>
                </div>
            </div>
            </div>
           <article class="pro-meta-area">
               <div class="pricebox">
                    <p class="p-price"><b><em id="pro-price"><i class="small">¥</i>{{datalist.price}}</em></b><b><i class="oldprice">¥ {{datalist.promPrice}}</i><span class="tag">限时特惠</span></b></p>
               </div>
               <div class="pro-meta-ara-cont ubb">
                    <article class="pro-meta-area-name">
                        <div class="p-name"><h1><span id="pro-name">{{datalist.skuAbbr}}</span></h1></div>
                    </article>
                    <p class="promotion">{{datalist.skuPromWord}}</p>
               </div>
               <div class="detail-box clearfix" v-if="datalist.givingSrc">
                   <p class="m-title">赠品</p>
                   <div class="m-content"><img :src="datalist.givingSrc || ''" alt=""></div>
               </div>
               <div class="detail-box clearfix">
                   <p class="m-title">颜色</p>
                   <div class="m-content">
                       <span class="m-span" v-for="(item,index) in datalist.color" :key=index>{{item}}</span>
                   </div>
               </div>
               <div class="detail-box clearfix">
                   <p class="m-title">版本</p>
                   <div class="m-content">
                       <span class="m-span" v-for="(item,index) in datalist.vision"  :key=index>{{item}}</span>
                   </div>
               </div>
               <div class="detail-box clearfix">
                   <p class="m-title">套餐</p>
                   <div class="m-content">
                       <span class="m-span">单品</span>
                   </div>
               </div>
               <div class="detail-box clearfix">
                   <p class="m-title">数量</p>
                   <div class="m-content">
                       <span class="minus delNum"></span>
                       <input type="text" class="myinput" :value="datalist.num">
                       <span class="minus addNum"></span>
                   </div>
               </div>
               <div class="detail-box clearfix">
                   <p class="m-title">保障</p>
                   <div class="m-content">
                       <span class="s-span" v-for="(item,index) in datalist.proprompt"  :key=index>{{item}}</span>
                   </div>
               </div>
                <div class="detail-box clearfix">
                   <p class="m-title">推荐</p>
                   <div class="m-content">
                       <span class="l-span" v-for="(item,index) in datalist.tui"  :key=index>{{item}}</span>
                   </div>
               </div>
               <div class="content" v-for="(item,index) in datalist.troduce" :key=index>
                    <img alt="手机 套餐图.jpg" :src="item">
               </div>
           </article>
        </div>
        <footer class="nav">
            <div class="leftbox">
                <p><i class="fa fa-institution"></i><router-link to="/" tag="span">首页</router-link></p>
                <p><i class="fa fa-user-o"></i><span>客服</span></p>
                <p><i class="fa fa-cart-plus"></i><router-link to="/car" tag="span">购物车</router-link></p>
            </div>
            <div class="rightbox">
                <span class="car" @click="addCar(prdIds)">购物车</span>
                <span class="shop">立即购</span>
            </div>
        </footer>
    </div>
</template>

<script>
import Swiper from "swiper";
    export default {
        name:'detail',
        created() {
            this.getData();            
        },
        mounted() {
            new Swiper('.myswipers',{
                loop : true,
                autoplay:true,
            })
        },
        data() {
            return {
                datalist:[],
                carList:JSON.parse(localStorage.getItem("carList")) || [],
                carAdds:JSON.parse(localStorage.getItem("carAdds")) || [],
                prdIds:Number(sessionStorage.getItem("prdId"))
            }
        },
        methods: {
            async getData(){
              let data = await this.$axios.get("./detail.json");
              this.prdId = Number(sessionStorage.getItem("prdId"));
              data.data.forEach(item => {
                if(item.prdId === this.prdId){
                    this.datalist = item
                }  
              });
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
        }
    }
</script>

<style scoped>
.header-toggle{
    position:absolute;
    height: 2.4rem;
    background: transparent;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    max-width: 720px;
    z-index: 100;
}
.headerbox{
    padding:0 .8rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.h-botton{
    width:1.5rem;
    height:1.5rem;
    font-size:1.3rem;
    color:#fff;
    border-radius: 50%;
    text-align: center;
    line-height: 1.5rem;
    background:rgba(0, 0, 0, .7);
    display:inline-block;
}
.h-botton:last-child{
    font-size:1rem;
}
.pro-gallery{
    position: relative;
    background: #fff;
}
.pro-gallery img{
    width:100%;
    height:100%;
}
.pro-meta-area {
    background-color: #fff;
    margin-bottom: .5rem;
}
.pro-meta-area {
    background-color: #fff;
    margin-bottom: .5rem;
}
.p-promotion-box {
    position: relative;
    max-height: 1.35em;
    overflow: hidden;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    padding-right: .7em;
}
.p-promotion-box {
    position: relative;
    max-height: 1.35em;
    overflow: hidden;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    padding-right: .7em;
}
.pro-meta-area{
    background: #fff;
    margin-bottom: .5rem;
}
.pricebox{
    padding: .4rem 0 0 .8rem;
}
.p-price{
    color:#e01d20;
    padding:0 0 .3em;
    display: flex;
    align-items: center;
    line-height: normal;
}
.p-price b{
    font-size: 1rem;
    color:#ca141d;
    display: flex;
    align-items: center;
}
.pro-meta-area .p-price b em {
    margin-right: .4rem;
    font-weight: bold;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
.pro-meta-area .p-price b #pro-price {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: baseline;
    -webkit-align-items: baseline;
    -ms-flex-align: baseline;
    align-items: baseline;
}
.oldprice{
    font-size: .6rem;
    color:#999;
    text-decoration: line-through;
}
.pro-meta-area .tag {
    margin-left:.2rem;
    height: .66rem;
    font-size: .55rem;
    line-height: .66rem;
    padding-top: .1rem;
    display: inline-block;
    min-width:2.6rem;
    color: #ca141c;
    text-align: center;
    border-radius: .4rem;
    padding:0 .29rem;
    border:1px solid rgba(202, 20, 29, .8)
}
.small{
    font-size:.5rem
}
.pro-meta-ara-cont{
    padding:.5rem .8rem .5rem 0;
    margin-left:.8rem;
    position:relative;
    top:.1rem;
}
.pro-meta-ara-cont .ubb:not(:last-child){
    border-bottom: 1px solid rgba(234, 234, 234, .5)
}
.pro-meta-area-name{
    position:relative;
    background: #fff;
    padding-bottom: .4rem;
}
.p-name h1{
    font-size: .75rem;
    line-height: 1.3rem;
    font-weight: bold;
    max-height:2.6rem;
}
.promotion{
    font-size:.55rem;
    color:#888;
    line-height:1.2em;
    word-break: break-all;
}
.detail-box{
    padding:0 0 0 .8rem;
    margin-bottom: .3rem;
}
.m-title{
    float:left;
    font-size:.6rem;
    width:2.4rem;
    height:auto;
    text-align:left;
    display: block;
    position:relative;
    color:#666;
    line-height:1rem;
}
.m-content{
    position:relative;
}
.m-content img{
    width:1.5rem;
    height:1.5rem;
    margin:.15em .5em .15em 0;
}
.m-span{
    display: inline-block;
    font-size: .6em;
    height:1.95em;
    line-height:1.95em;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: text-bottom;
    padding:0 .8rem;
    border-radius: 1rem;
    margin-right:.2rem;
    border:1px solid rgba(178, 178, 178, .5)
}
.m-span.selected{
    border-color: #ca151e;
    color: #ca151e;
}

.minus{
    background: url(https://res.vmallres.com/nwap/20181230/images/echannelWap/icon/icon53.png) no-repeat;
    background-size: 200% 100%;
    height: 1.2rem;
    width: 1.2rem;
    display: block;
    float: left;
    font-size: .5em;
    cursor: pointer;
    border: 1px solid rgba(51,51,51,.3);
    border-radius: 1.2rem;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
.delNum{
    background-position: left;
}
.addNum{
    background-position: right;
    margin-left: 1.8rem;
}
.myinput {
    border: 0 none;
    width: 1.65rem;
    height: 100%;
    line-height: 100%;
    font-size: .65em;
    color: #333;
    text-align: center;
    ime-mode: disabled;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    vertical-align: middle;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 1.4rem;
    padding: 0;
}
.s-span{
    display: inline-block;
    border: 1px solid #eaeaea;
    padding: .15rem .2rem;
    border-radius: .2rem;
    margin-left: .3rem;
    overflow: hidden;
    font-size: .6rem;
    word-break: break-all;
}
.l-span{
    font-size: .6rem;
    color: #333;
    display: inline-block;
    padding: 0 .5rem;
    height: 1.3rem;
    line-height: 1.3rem;
    background: #f3f3f3;
    border-radius: .6rem;
    margin: .4rem .4rem 0 0;
    word-break: break-all;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 12rem;
    overflow: hidden;
}
.content{
    background-color: #fff;
    padding: 0 .8rem 0 .8rem;
}
.content img {
    display: block;
    border: 0;
    max-width: 100%;
    height: auto;
    vertical-align: top;
}
.nav{
    position: fixed;
    bottom: 0;
    width: 100%;
    max-width: 720px;
    background-color: #fff;
    z-index: 100;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: box;
    display: -webkit-flex;
    display: flex;
    justify-content: space-around;
    height: 2.4rem;
}
.nav>div{
    height: 100%;
    text-align: center;
    -webkit-box-flex: 0;
    -moz-flex-shrink: 0;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
.leftbox>p{
    display: flex;
    flex-direction: column;
} 
.leftbox i{
    font-size: .8rem;
}
.leftbox span{
    width: 2.5rem;
    float: left;
    box-sizing: border-box;
    font-size: .5rem;
    padding-top: .23rem;
    color: #333;
}
.rightbox span{
    box-sizing: border-box;
}

.car{
    padding: 0 .8rem;
     height: 1.85rem;
    font-size: .75rem;
    color: #fff;
    background-image: linear-gradient(90deg,#ff814a 0,#f45333 100%);
    border-radius: .93rem;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    -moz-justify-content: center;
    justify-content: center;
    box-flex: 1;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    flex: 1;
    -webkit-flex: 1;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.shop{
    padding: 0 .8rem;
    height: 1.85rem;
    font-size: .75rem;
    color: #fff;
    background-image: linear-gradient(90deg,#e43e2d 0,#ca141d 100%);
    border-radius: .93rem;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    -moz-justify-content: center;
    justify-content: center;
    box-flex: 1;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    flex: 1;
    -webkit-flex: 1;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
</style>