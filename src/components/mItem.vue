<template>
    <ul class="my-row">
        <li v-for="item,index in data">
            <p class="m-icon"><img :src="item.imgsrc"></p>
            <p class="m-title"><span>{{item.title}}</span></p>
        </li>
    </ul>
</template>

<script>
    export default {
        name:"mItem",
        props:["data"]
    }
</script>

<style scoped>
.my-row {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: box;
    display: -webkit-flex;
    display: flex;
    text-align: center;
    overflow: hidden;
    position: relative;
    padding: 0 0.25rem;
}
.my-row li{
    flex:1;
    padding: 0.5rem 0;
}
.m-order .my-row .m-icon {
    width: 1.2rem;
    height: 1.2rem;
}
.my-row .m-icon {
    width: 1.5rem;
    height: 1.5rem;
    display: block;
    margin: 0 auto;
    position: relative;
}
.my-row .m-title {
    padding-top: 0.25rem;
}
.my-row .m-title span {
    display: block;
    font-size: 0.55rem;
    color: #333;
    line-height: 1;
}
</style>