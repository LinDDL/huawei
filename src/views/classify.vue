<template>
    <div>
       <ln-head></ln-head>
       <div class="category category-list">
       <div class="category-left">
        <ul>
        <li  v-for="item,index in navlist" @click="goIndex(index)">
        <p :class="{current:showIndex===index}"
        
        ><span>{{item.name}}</span></p></li>
        </ul>
       </div>
       <div class="category-right-box">
           <section class="category-right">
               <div class="category-list">
                   <t-item :data='tuilist'></t-item>
               </div>
           </section>
       </div>
       </div>
       
    </div>
</template>
<script>
import adItem from "../components/adItem"
import tItem from "../components/tItem"

export default {
    name:'classify',
    components:{adItem,tItem},
    mounted() {
        this.getNav();
    },
    data() {
        return {
           showIndex:0,
           navlist:[],
           tuilist:JSON.parse(sessionStorage.getItem('tuilist'))||[]
        }
    },
    methods: {
       async getNav(){
            let url ="/huawei/mcp/getCategoryInfo?portal=2&lang=zh-CN&country=CN";
            let data =await this.$axios.get(url);
            this.navlist=data.data;
            this.tuilist =  this.navlist[0].subCategorys;
            sessionStorage.setItem('tuilist',JSON.stringify(this.tuilist))


        },
        goIndex(index){
            this.showIndex = index;
            this.tuilist = this.navlist[index].subCategorys;
            sessionStorage.setItem('tuilist',JSON.stringify(this.tuilist))
        }

    },
}
</script>
<style scoped>
   .category-left {
    width: 23.62%;
    height: 100%;
    border-right: 1px solid #eaeaea;
    overflow-y: scroll;
    overflow-x: hidden;
    float: left;
    position: relative;
    z-index: 9;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    box-shadow: 0 0 3px #eaeaea;
    -webkit-box-shadow: 0 0 3px #eaeaea;
    -moz-box-shadow: 0 0 3px #eaeaea;
} 
.category {
    position: fixed;
    top: 2rem;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 720px;
    margin: 0 auto;
    background-color: #fff;
}
.category-left ul {
    padding-bottom: 2.45rem;
    position: relative;
    min-height: 91.5%;
}
.category .category-left ul p.current {
    color: #e01d20!important;
    z-index: 10;
    overflow: hidden;
    border-left: 2px solid #ca141d;
    background-color: #f6f6f6;
}
.category .category-left ul p {
    height: 2.25rem;
    border-bottom: 1px solid #eaeaea;
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
    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    align-items: center;
    padding: 0 .3rem;
}
 .category-left ul p span {
    font-size: .65rem;
    font-weight: bold;
    line-height: 1.3;
    text-align: center;
    width: 100%;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    position: relative;
    top: .09rem;
}
.category-right-box {
    width: 76.38%;
    float: left;
    height: 100%;
    z-index: 8;
}
.category-right {
    width: 100%;
    height: 100%;
    overflow: auto;
}
.category-list {
    margin-bottom: 2.5rem;
}
</style>