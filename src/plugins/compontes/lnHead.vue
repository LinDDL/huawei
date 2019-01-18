<template>
    <div class="header" >
        <div class="left"><span></span></div>
        <div class="center" @click="searchs"><input type="text" placeholder="华为P20"></div>
        <div class="right"  @click="goLogin"><i class="fa fa-commenting-o"></i><span>登陆</span></div>
    </div>
</template>
<script>
export default {
    name:"lnHead",
    methods: {
        searchs(){
            this.$router.push({path:"/search"})
        },
        goLogin(){
            this.$router.push({path:"/login"})
        }
    },
}
</script>
<style scoped>
    .header{
        background-color: rgba(255, 255, 255, 0);;
        position: relative;;
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
        width: 3.05rem;
        height: 0.65rem;
        display: block;
        position: relative;
        left: 0.4rem;
        background-image: url(data:image/png;base64,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);
        background-position: center center;
        background-size: 100% 100%;
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