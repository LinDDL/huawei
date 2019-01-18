<template>
<div>
 <div v-for="item,index in data ">
        <div class="header-title">
            <h3><span>{{item.name}}</span></h3>
        </div>
        <div class="b">
            <ul class="clearfix">
                <li v-for ="item1,index1 in item.subCategorys">
                    <a href="javascript:;">
                        <div class="pro-panels">
                            <p class="p-img">
                                <img :alt="item1.name" :src="item1.photoPath + item1.photoName | ht" lazy="loaded">
                            </p> 
                            <p class="p-name">
                                <span>{{item1.name }}</span>
                            </p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>

    </div>
</div>
   
</template>

<script>

    export default {
        name:"tItem",
        props:["data"],
        data(){
            return {
            }
        },
       
        mounted() {
        },
    }
</script>

<style scoped>
.header-title {
    padding: .55rem 0 .6rem;
    text-align: center;
    overflow: hidden;
}
 .header-title h3 {
    display: -webkit-inline-box;
    display: -moz-inline-box;
    display: -ms-inline-flexbox;
    display: inline-box;
    display: -webkit-inline-flex;
    display: inline-flex;
    padding: 0 2rem;
    position: relative;
}
.header-title h3 span {
    font-size: .65rem;
    line-height: 1.2;
    font-weight: bold;
    background-color: #fff;
    position: relative;
    z-index: 2;
    padding: 0 .5rem;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
 .header-title h3:after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: #eaeaea;
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -2px;
}
.b {
    padding: 0 .35rem;
}
.b ul {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
}
.b ul li {
    width: 33.33%;
    position: relative;
    display: block;
    float: left;
}
.b ul li .pro-panels {
    border-top: 0;
    padding: .45rem 0 .4rem;
    width: 100%;
    box-sizing: border-box;
}
.b ul li .pro-panels .p-img {
    width: 2.75rem;
    height: 2.75rem;
    margin: 0 auto;
    float: none;
    position: relative;
    padding: .1rem 0;
}
.b ul li .pro-panels .p-img img {
    border: 0;
    display: inline-block;
    width: 100%;
    height: 100%;
    vertical-align: top;
    overflow: hidden;
    max-width: 100%;
}
.b ul li .pro-panels .p-name {
    color: #333;
    max-height: 1.9rem;
    line-height: 1;
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
    margin-top: .2rem;
    height: 1.3rem;
    padding: 0 .3rem;
}
.b ul li .pro-panels .p-name span {
    font-size: .55rem;
    line-height: 1.2;
    max-height: 1.3rem;
    color: #333;
    text-align: center;
    width: 100%;
    position: relative;
    top: 0;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

</style>