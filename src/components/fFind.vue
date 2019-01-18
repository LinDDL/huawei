<template>
    <div class="findList">
        <header class="h"><span><img src="https://res.vmallres.com/nwap/20181215/staticm/img/find/title_publicPraise.png"></span></header>
        <section>
            <div class="findProdList">
                <div v-for="item,index in data">
                <div class="itemProdDetail" ><p class="p-img">
                <img :src="item.thumbnail | ht"> <span><i class="icon-praise">
                
                <img src="https://res.vmallres.com/nwap/20181215/staticm/img/find/icon_praise_empty.png"> 
                <img src="https://res.vmallres.com/nwap/20181215/staticm/img/find/icon_praise_solid.png">
                </i> <em>393人点赞</em></span></p> <p class="p-name">{{item.title}}</p> <p class="p-promotion"><span>
                    来自
                    <em class="red">{{item.recommenderName}}</em> 推荐:
                  </span>
                  {{item.summary}}
                </p> <p class="p-other"><span>{{item.publishTime |formatDate}}</span> <em>了解详情 &gt;</em></p></div>
                </div>
            </div>

        </section>
    </div>
</template>

<script>
    export default {
        name:'fFind',
        props:["data"]
    }
</script>

<style scoped>
.findList {
    background-color: #fff;
    margin-bottom: 0.1rem;
}
.findList .h {
    text-align: center;
    height: 2.5rem;
    line-height: 2.5rem;
    position: relative;
    
}
.findList .h img {
    width: 4.15rem;
    margin:auto;
    height: 1rem;
    padding: 0.75rem 0;
    box-sizing:content-box;
}
.findProdList {
    margin-bottom: 0;
    padding: 0.25rem 0.25rem 0;
}
.itemProdDetail {
    background-color: #fff;
    margin-bottom: 0.15rem;
}
.itemProdDetail .p-img {
    text-align: center;
    position: relative;
    min-height: 6.5rem;
}
.itemProdDetail .p-img img {
    width: 100%;
}
.itemProdDetail .p-img span {
    position: absolute;
    right: 0.3rem;
    bottom: 0.3rem;
}
.icon-praise {
    width: 2rem;
    height: 2rem;
    display: block;
    border-radius: 1rem;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.5);
    position: relative;
}
.itemProdDetail .p-img img {
    width: 100%;
}
.itemProdDetail .p-img em {
    color: #fff;
    font-size: 0.55rem;
    line-height: 0.75rem;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 0.4rem;
    padding: 0.05rem 0.25rem;
}
.itemProdDetail .p-name {
    font-size: 0.75rem;
    line-height: 1.2;
    color: #000;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0.5rem 0.75rem 0.35rem;
}
.itemProdDetail .p-promotion {
    font-size: 0.6rem;
    color: #656565;
    padding: 0 0.75rem;
    line-height: 0.9rem;
    word-break: break-all;
    overflow: hidden;
}
.findList .itemProdDetail .p-promotion {
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.red {
    color: #CA151E;
}
.itemProdDetail .p-other {
    margin: 0 0.8rem;
    line-height: 1.8rem;
    border-bottom: 1px solid #eee;
    border-top: 0;
    color: #b8b8b8;
    position: relative;
}
.findList .itemProdDetail .p-other {
    border-top: 1px solid #eee;
    margin: 0.35rem 0.75rem 0;
    line-height: 1.5rem;
}
.itemProdDetail .p-other span {
    font-size: 0.6rem;
}
.itemProdDetail .p-other em {
    padding-left: 1rem;
    float: right;
    font-size: 0.6rem;
}
.icon-praise img:last-child {
    opacity: 0;
}
</style>