<template>
       <header><h1 style="margin-left: 0px;">{{title}}</h1></header>
</template>
<script>
export default {
    name:"hHead",
    props:["title"]
}
</script>
<style scoped>
    header {
        background-color: #fff;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        max-width: 720px;
        height: 2.4rem;
        margin: 0 auto;
        z-index: 100;
        border-bottom: 1px solid #e5e5e5;
        padding: 0 .8rem;
    }
    header h1 {
    display: block;
    width: 45%;
    height: 2.4rem;
    line-height: 2.4rem;
    margin-left: .4rem;
    vertical-align: middle;
    font-size: .7rem;
    color: #333;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
</style>