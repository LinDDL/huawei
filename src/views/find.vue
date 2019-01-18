<template>
    <div>
       <h-head title="发现频道"></h-head>
       <div class="findpage" style="position:relative;width:100%;" id="find" ref="find"> 
    
       <div style="position:absolute;width:100%;padding:2.4rem  0 2.5rem 0;">
        <ln-icon :data="arr1" width="2rem" height="2rem"></ln-icon>
            <section>
            <div class="findList">
                <header class="h"><img src="https://res.vmallres.com/nwap/20181215/staticm/img/find/title_headline.png"><a>- 声明 -</a></header>
                <ln-swiper :swiperdata="swipers"></ln-swiper>
            </div>
            <f-item :data="hotlist"></f-item>
            <f-find :data="finddatas"></f-find>
            </section>  
       </div>
                 
       </div>
    </div>
</template>
<script>
import fItem from "../components/fItem"
import fFind from "../components/fFind"
import BScroll from 'better-scroll'

export default {
    name:'mine',
    components:{
        fItem,
        fFind

    },
    mounted() {
         if(this.finddatas.length===0){
            this.finddata();
        }
        if(this.hotlist.length===0){
            this.gethot();
        }
        let self =this;
        let obj = {
            scrollX : false,
            scrollY : true,
            click : true
        }
        this.s1 = new BScroll("#find",obj);
        this.s1.on("scrollEnd",function(params){
            let dis = Math.abs(params.y);
            let viewHeight = self.$refs.find.offsetHeight;
            let h = self.$refs.find.children[0].offsetHeight;
            if((dis+viewHeight)>=h){
                self.finddata();
            }
        })

        
    },
    
    data(){
        return {
            arr1:[
                {title:"商城头条",imgsrc:'https://res.vmallres.com/mwap/20170421/images/echannelApp/misc/icon_headline.png'},
                {title:"企业购",imgsrc:'https://res.vmallres.com/pimages//template/content/2018/20180326150321128.png'},
                {title:"粉丝互动",imgsrc:'https://res.vmallres.com/pimages//cop/image/2018/znida9hyFjOW6FYc5zOR.png'},
                {title:"华为众测",imgsrc:'https://res.vmallres.com/pimages//template/content/2018/20181029095630980.png'},
            ],
            swipers:[
                {imgsrc:"https://res.vmallres.com/pimages/cop/20181122160831989/1542874111989.png"},
                {imgsrc:"https://res.vmallres.com/pimages/cop/20181122160844625/1542874124624.jpg"},
                {imgsrc:"https://res.vmallres.com/pimages/cop/20181122160903197/1542874143197.jpg"},
                {imgsrc:"https://res.vmallres.com/pimages/cop/20181122160914273/1542874154273.png"},
                {imgsrc:"https://res.vmallres.com/pimages/cop/20181214170028310/PuDWrd4Rd7ZfOmhOIXxd.png"},
            ],
            hotlist:JSON.parse(sessionStorage.getItem('hotlist')) ||[],
            finddatas:[],
            pageNum:0
        }
    },
    methods: {
        async gethot(){
            let url = '/huawei/mcp/discovery/queryContentList?portal=2&lang=zh-CN&country=CN&contentType=1&pageNum=1&pageSize=5&beTop=true';
            let data =await this.$axios.get(url);
            this.hotlist = data.data.contentDetailList
            sessionStorage.setItem('hotlist',JSON.stringify(this.hotlist))
        },
        async finddata(){
            this.pageNum++;
            let url=`/huawei/mcp/discovery/queryContentList?portal=2&lang=zh-CN&country=CN&contentType=2&pageNum=${this.pageNum}&pageSize=10`;
            let datas =await this.$axios.get(url);
            this.finddatas =this.finddatas.concat(datas.data.contentDetailList) 
            // sessionStorage.setItem('finddatas',JSON.stringify(this.finddatas))

        }
    },
}
</script>
<style scoped>
.findpage{
    height: calc(100vh - 10px);
z-index:2;
}
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
    height: 1rem;
    padding: 0.75rem 0;
    box-sizing:content-box;
    margin:auto;

}
.findList .h a {
    font-size: 0.6rem;
    line-height: 2rem;
    color: #b8b8b8;
    position: absolute;
    right: 0.3rem;
    bottom: 0.1rem;
}


</style>