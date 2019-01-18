<template>
    <div style="">
         <div class="header" >
            <div class="left" @click="goback"><span class="fa fa-arrow-left"></span></div>
            <div class="center"><input type="text" placeholder="华为P20" v-model="keyword"></div>
            <div class="right"><span>搜索</span></div>
        </div>
        <div style="position:relative;height:calc(100vh-50px);width:100%" id="search">
            <div style="position:absolute;width:100%">
                <search-hot :data="hotlist" v-if="show"></search-hot>
                <search-auto v-if="!show" :data="wordList" @searchone="getsearch"></search-auto>
                <sc-item v-if="!show" :data="resultList"></sc-item>
            </div>
        </div>
        
    </div>
</template>

<script>
import searchHot from "../components/searchHot";
import searchAuto from "../components/searchAuto";
import scItem from "../components/scItem";
import BScroll from "better-scroll";
    export default {
        name:"search",
        components:{searchHot,searchAuto,scItem},
        mounted() {
            this.getData();
            new BScroll("#search",{scrollX:false,scrollY:true,click:true})
        },
        data(){
            return {
                hotlist:[],
                show:true,
                keyword:"",
                wordList:[],
                resultList:[],
                history:JSON.parse(sessionStorage.getItem("historySearch")) ||[]
            }
        },
        watch: {
            keyword(newVal,oldVal){
                this.searchkeyword();
                if(this.keyword!==""){
                    let data = JSON.parse(sessionStorage.getItem("historySearch"));
                    if(this.history.indexOf(this.keyword)===-1){
                        this.history.push(newVal);
                        sessionStorage.setItem("historySearch",JSON.stringify(this.history))
                    }
                }
                if(newVal===""){
                    this.resultList = []
                }
            }
        },
        methods: {
           async getData(){
                let url ="/huawei/mcp/queryHotWord?portal=2&lang=zh-CN&country=CN";
                let data = await this.$axios.get(url);
                this.hotlist = data.data.hotWordList.slice(0,10);
            },
          async  searchkeyword(){
              if(!this.keyword){
                    this.show = true;
                    return ;
                }
                let url="/huawei/mcp/queryAssociationWordInfo?portal=2&lang=zh-CN&country=CN&brandType=0&keyword=" + this.keyword
                let data = await this.$axios.get(url);
                console.log(data)
                if(this.keyword!==""){
                    if(data.data.wordList){
                        this.wordList = data.data.wordList;
                        this.show=false;
                    }else{
                        this.wordList = [data.info]
                    }
                      
                }
            },
            async getsearch(key){
                let url =`/huawei/mcp/queryPrd?portal=2&lang=zh-CN&country=CN&brandType=0&keyword=${key}&searchSortField=0&searchSortType=desc&pageNum=1&pageSize=20`;
                let data = await this.$axios.get(url);
                this.resultList=data.data.resultList;
                if(this.resultList){
                    this.wordList = [];
                }
            },
            goback(){
                this.$router.back(1);
            }
        },
    }
</script>

<style scoped>
 .header{
        background-color: #fff;
        position: relative;
        z-index:99;
        left: 0;
        right: 0;
        width: 100%;
        max-width: 720px;
        min-height: 2rem;
        margin: 0 auto;
        z-index: 100;
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
    }
    .header>.center{
        flex:1;
        text-align:center;
        width: 100%;
        height: 1.6rem;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAz1BMVEUAAAD///+/v7+2trbMzMy5ubm8vLy/v7+2tra8vLy4uLi7u7u5ubm4uLizs7Ozs7O4uLizs7O1tbW3t7e1tbW2tra2tra1tbW0tLS1tbW0tLS1tbW2tra0tLSzs7O0tLS0tLS0tLS0tLSzs7O0tLSzs7Ozs7O0tLS1tbWzs7O0tLS0tLSzs7O0tLS0tLS0tLSzs7Ozs7O0tLS0tLSzs7O0tLS0tLSzs7O0tLSzs7O0tLS0tLS0tLSzs7Ozs7O0tLS0tLSzs7Ozs7O0tLSzs7Nm8QZvAAAARHRSTlMAAQQHCgsTFBUXGR4hJCUvMjY3OT4/QkxOT1JWV212d3uEhZGSl5ufoaKxvsDFyMnKzc/Q0dLV4uPl5ufq8vn6+/z9/p9kkSwAAAEESURBVHhevY9de8FAFIRFQpAWBYAQ0JQgNJUPkDD//zfBo33O7mr1yty9O7PnnIk9V1K2XCukf7WzwwAXLfTEPVvuh4BnjedbYN0U/dQU0Sh3TVZnQE/4P4Wb/6F2iA4X6MPNEGwcDyX2vjDKMw8GbInyECN2ouKjQvsHON/HjRjQDfD4q4tYEirDEmpjQ6iGsdAbO0IFzPmABp9QGluZC9TZrQtUucAHuhR1zFj/dR+9UE6s0aYcn8Bkf7QQNoj/jiDJ7ezhaCjf8yfASuV7dQ7wjWJK1urmHsEKjpAo2bgpMpOqcychVQafm51vdS/3q19sQpTq/CehPEq8xf6UcvafohM59CQK7MaSeAAAAABJRU5ErkJggg==) no-repeat 0.4rem center;
        background-size: 0.9rem 0.9rem;
        background-color: rgba(155, 155, 155, 0.1);
        border-radius: 0.2rem;
        -webkit-border-radius: 0.2rem;
        margin-left: 0.8rem;
        overflow: hidden;
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
    }
    .left span{
       width: 1.2rem;
        height: 1.2rem;
        font-size: 1rem;
        display: block;
        margin-left: 0.8rem;
    }
    .right{
        padding: 0 0.4rem;
    }
    .right span{
        font-size:0.7rem;
        padding:0 0.4rem;
    }
    .center input {
        font-size: 0.7rem;
        color: #333333;
        width: 100%;
        height: 1.6rem;
        text-align: left;
        border-radius: 0.2rem;
        -webkit-border-radius: 0.2rem;
        background-color: transparent;
        border: 0;
        padding: 0 1.6rem;
    }
</style>