<template>
    <div class="swiperbox">
        <div class="swiper-container swiper1 ">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for = "item,index in swiperdata" style="width:auto">
                    <img :src="item.imgsrc" class="imgs">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import Swiper from 'swiper';
    export default {
        name:'lnSwiper',
        props:["swiperdata"],
        mounted() {
             new Swiper ('.swiper1', {
                slidesPerView: 4,
                spaceBetween: 20,
            })
        },
    }
</script>

<style scoped>
.imgs{
    width: 4.5rem;
    height: 3rem;
}
.swiperbox{
    padding:0 .2rem
}

</style>