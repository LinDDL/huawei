<template>
    <div>
        <div class="swiper-container allswiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for = "item,index in data">
                   <a href="javascript::" class="type1">
                       <div class="img-area">
                           <p class="p-img">
                               <img :src="item.photoPath + `${item.photoName?'142_142_':''}`+ `${item.photoName?item.photoName:''}`  | ht" alt="平板M5 8.4英寸">
                            </p> 
                            <p class="p-abbr">{{item.sbomAbbr}}</p>
                        </div> 
                        <p class="p-name">
                            <b>{{item.customizedPromo}}</b> 
                        </p>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
export default {
    name:"nSwiper",
    props:["data"],
    filters:{
        "imgs":function(value){
            return value = "142_142_" + value
        }
    },
    mounted() {
        new Swiper ('.allswiper', {
            slidesPerView: 4,
            spaceBetween: 8,
        })
    },
}
</script>

<style scoped>
.seckill .swiper-container {
    padding-bottom: .4rem;
    padding-right: .3rem;
}
.seckill .swiper-slide {
    height: 5.15rem;
}
.seckill .swiper-slide a {
    margin-left: .3rem;
    display: block;
    height: 100%;
}
.seckill .swiper-slide .img-area {
    position: relative;
    padding-top: .2rem;
    padding-bottom: .15rem;
    background: #FFFFFF;
    box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.05);
    border-radius: .5rem;
}
.seckill p {
    word-break: break-all;
    overflow: hidden;
    max-width: 100%;
    font-size: 0;
}
.seckill .swiper-slide .img-area .p-img {
    width: 3.05rem;
    height: 3.05rem;
    margin: 0 auto;
}
.seckill .swiper-slide img {
    height: 100%;
    width: 100%;
}
.seckill .swiper-slide .img-area .p-abbr {
    font-size: .45rem;
    color: #999999;
    line-height: 1.2;
    padding: .2rem 0 0;
    margin: 0 .25rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.seckill .swiper-slide .p-name, .seckill .swiper-slide .p-price {
    line-height: 1;
}
.seckill .swiper-slide .p-name b, .seckill .swiper-slide .p-price b {
    font-size: .525rem;
    color: #CA141D;
    line-height: 1.2rem;
}
</style>