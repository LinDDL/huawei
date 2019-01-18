<template>
<div>
 <div class="m-news" v-for = "item,index in adlist">
        <header class="h-news"><span>为你推荐</span> <div class="time">01-10 09:17</div></header>
        <div class="m-ads" >
            <img :src="item.imgSrc" alt="">
        </div>
    </div>
</div>
   
</template>

<script>
    export default {
        name:'mTui',
        data(){
            return{
                adlist:[
                    {imgSrc:'https://res.vmallres.com/pimages/recommendmsg/Ln0u8iXkrJFovCoSS6Ak.jpg'},
                    {imgSrc:'https://res.vmallres.com/pimages/recommendmsg/sgvm9KKVxTWpwp9Cy4dz.jpg'},
                    {imgSrc:'https://res.vmallres.com/pimages/recommendmsg/xNay3xx72r1j9wSK89K6.jpg'},
                ]
            }
        }
    }
</script>

<style scoped>
.h-news {
    height: 1.75rem;
    line-height: 1.75rem;
    position: relative;
}
 .h-news span {
    font-size: 0.6rem;
    color: #333;
    position: relative;
    top: -0.1rem;
}
 .h-news .time {
     display:inline-block;
    font-size: 0.5rem;
    color: #888;
    padding-left: 0.5rem;
    position: relative;
}
.m-news {
    border-bottom: 1px solid #eaeaea;
    padding: 0 0.8rem;
}
.m-news .m-ads {
    padding-bottom: 0.5rem;
    margin-bottom: 0;
}
</style>