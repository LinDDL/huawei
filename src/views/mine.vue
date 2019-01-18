<template>
    <div class="mine">
        <div class="head">
            <p class="lbox" style="opacity: 1;">
                <router-link to="/login" tag="span">登录 / 注册</router-link>
                <span class="vip">享受更多会员权益</span>
            </p>
            <div class="b" style="opacity: 1;">
                <p class="u-img">
                    <a href="javascript:;">
                        <img src="https://res.vmallres.com/nwap/20181215/staticm/img/personal/defaultface_user_after.png">
                    </a>
                </p>
            </div>
        </div>
        <section class="m-property">
            <ul>
                <li><a href="javascript:;" class=""><span class="m-icon"><img src="https://res.vmallres.com/nwap/20181215/staticm/img/personal/wap_mine_score.png"></span> <span class="m-title">积分</span> <span class="m-num">-- 分</span></a></li>
                <li><a href="javascript:;" class=""><span class="m-icon"><img src="https://res.vmallres.com/nwap/20181215/staticm/img/personal/wap_mine_coupon.png"></span> <span class="m-title">优惠券</span> <span class="m-num">-- 张</span></a></li>
                <li><a href="javascript:;" class=""><span class="m-icon"><img src="https://res.vmallres.com/nwap/20181215/staticm/img/personal/wap_mine_voucher.png"></span> <span class="m-title">代金券</span> <span class="m-num">-- 元</span></a></li>
            </ul>
        </section>
        <section class="m-menu m-order">
        <header class="h"><span>我的订单</span> <span class="fr">全部订单</span></header>
        <ln-icon :data="arr1"></ln-icon>
        </section>
        <section class="m-menu m-vip">
            <header class="h"><span>我的Vmall</span></header>
            <ln-icon :data="arr2"></ln-icon>
        <ln-icon :data="arr3"></ln-icon>

        </section>
        <section class="m-ads">
            <img src="https://res.vmallres.com/pimages//sale/2019-01/MR3VJqTyBlOumtnROQvX.jpg" title="1296x400.jpg" style="float:none;">
        </section>
         <section class="m-menu m-serve">
            <header class="h"><span>我的服务</span></header>
        <ln-icon :data="arr4"></ln-icon>
        <ln-icon :data="arr5"></ln-icon>

        </section>
        <section class="m-menu ">
            <header class="h"><span>我的消息</span></header>
                <m-tui></m-tui>
        </section>
    </div>
</template>
<script>
import mItem from '../components/mItem'
import mTui from '../components/mTui'

    export default {
        name: 'mine',
        components:{mItem,mTui},
        data(){
            return {
                arr1:[
                    {title:"待付款",imgsrc:"https://res.vmallres.com/nwap/20181215/staticm/img/personal/wap_mine_waitpay.png"},
                    {title:"待收货",imgsrc:"https://res.vmallres.com/nwap/20181215/staticm/img/personal/wap_mine_waitreceived.png"},
                    {title:"待评价",imgsrc:"https://res.vmallres.com/nwap/20181215/staticm/img/personal/wap_mine_waitremark.png"},
                    {title:"待换货",imgsrc:"https://res.vmallres.com/nwap/20181215/staticm/img/personal/wap_mine_exchange.png"},
                    {title:"回收单",imgsrc:"https://res.vmallres.com/nwap/20181215/staticm/img/personal/wap_mine_recycle.png"},
                ],
                arr2:[
                    {title:"会员频道",imgsrc:"https://res.vmallres.com/nwap/20181215/staticm/img/personal/wap_mine_privilege.png"},
                    {title:"实名认证",imgsrc:"https://res.vmallres.com/nwap/20181215/staticm/img/personal/wap_mine_customer_auth.png"},
                    {title:"收货地址",imgsrc:"https://res.vmallres.com/nwap/20181215/staticm/img/personal/wap_mine_address_manager.png"},
                    {title:"优享购",imgsrc:"https://res.vmallres.com/nwap/20181215/staticm/img/personal/wap_mine_easybuy.png"},
                ],
                arr3:[
                    {title:"优购码",imgsrc:"https://res.vmallres.com/nwap/20181215/staticm/img/personal/wap_mine_priority.png"},
                    {title:"预约记录",imgsrc:"https://res.vmallres.com/nwap/20181215/staticm/img/personal/wap_mine_booking.png"},
                    {title:"邀请有礼",imgsrc:"https://res.vmallres.com/nwap/20181215/staticm/img/personal/wap_mine_gift.png"},
                    {title:"账号中心",imgsrc:"https://res.vmallres.com/nwap/20181215/staticm/img/personal/wap_mine_userCont.png"},
                ],
                 arr4:[
                    {title:"以旧换新",imgsrc:"https://res.vmallres.com/nwap/20181215/staticm/img/personal/wap_mine_recycleN.png"},
                    {title:"手机充值",imgsrc:"https://res.vmallres.com/nwap/20181215/staticm/img/personal/wap_mine_charge.png"},
                    {title:"服务网点",imgsrc:"https://res.vmallres.com/nwap/20181215/staticm/img/personal/wap_mine_servicecenter.png"},
                    {title:"线下门店",imgsrc:"https://res.vmallres.com/nwap/20181215/staticm/img/personal/wap_mine_hnrstoreaddr.png"},
                ],
                arr5:[
                    {title:"常见问题",imgsrc:"https://res.vmallres.com/nwap/20181215/staticm/img/personal/wap_mine_help_faq.png"},
                    {title:"意见反馈",imgsrc:"https://res.vmallres.com/nwap/20181215/staticm/img/personal/wap_mine_feedback.png"},
                    {title:"补购保障",imgsrc:"https://res.vmallres.com/nwap/20181215/staticm/img/personal/wap_mine_service_protocol.png"},
                    {title:"客服中心",imgsrc:"https://res.vmallres.com/nwap/20181215/staticm/img/personal/wap_mine_contactus.png"},
                ],

            }
        }
    }
</script>
<style scoped>
.mine{
    padding-bottom:2.5rem;
}
    .head {
        position: fixed;
        width: 100%;
        max-width: 720px;
        height: 2.25rem;
        z-index: 10;
        top: 0;
        transform: translate3d(0, 0, 0);
        background: url(https://res.vmallres.com/nwap/20181215/staticm/img/memberInfoBG.ba8231f.jpg) no-repeat center top #bf1f1f;
        background-size: auto 2.25rem;
    }
    .lbox {
        position: absolute;
        height: 2.25rem;
        left: 0.8rem;
        top: 0;
        display: table;
        vertical-align: middle;
        padding: 0.25rem 0;
        z-index: 9
    }
    .lbox span {
        color: #fff;
        font-size: 0.6rem;
        line-height: 1.5;
        position: relative;
        top: -0.1rem;
    }
   .lbox .vip {
        font-size: 0.55rem;
    
        display: block;
    
        line-height: 1.3;
    
        color: rgba(255, 255, 255, 0.7);
    
    }
    
    
    
    .b {
    
        height: 3rem;
    
        margin-bottom: 1.25rem;
    
        background: url(https://res.vmallres.com/nwap/20181215/staticm/img/memberbg.6d8f899.jpg) no-repeat center top #bf1f1f;
    
        background-size: auto 3rem;
    
        position: relative;
    
    }
    
    
    
    .b .u-img {
    
        background-color: #F9F9F9;
    
        border-radius: 50%;
    
        float: left;
    
        width: 2.75rem;
    
        height: 2.75rem;
    
        position: absolute;
    
        bottom: -1.25rem;
    
        left: 50%;
    
        margin-left: -1.38rem;
    
        z-index: 10;
    
    }
    
    
    
    .b .u-img img {
    
        border-radius: 50%;
    
        width: 100%;
    
        height: 100%;
    
        vertical-align: top;
    
        overflow: hidden;
    
    }
    .m-property {
    padding: 0.2rem 0;
    background-color: #fff;
    margin-bottom: 0.3rem;
    text-align: center;
    padding-top:4.2rem;
}
.m-property ul {
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
.m-property ul li {
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    line-height: 0.65rem;
}
.m-property ul li a {
    display: block;
    position: relative;
}
.m-property ul li a .m-icon {
    width: 1rem;
    height: 0.65rem;
}
.m-property ul li a span {
    display: inline-block;
}
.m-property ul li a .m-title {
    font-size: 0.55rem;
    padding-left:.2rem;
    color: #888;
}
.m-property ul li a .m-num {
    font-size: 0.55rem;
    line-height: 1.8;
    color: #333;
    display: block;
}
.m-property ul li a .m-icon img {
    width: 100%;
    position: relative;
    top: -0.05rem;
}
.m-menu {
    background-color: #fff;
    margin-bottom: 0.3rem;
}
.m-menu .h {
    padding: 0 0.8rem;
    border-bottom: 1px solid #eaeaea;
    height: 2rem;
    line-height: 2rem;
    position: relative;
}
.m-menu .h span {
    font-size: 0.65rem;
    color: #333;
    position: relative;
    top: -0.1rem;
}
.m-menu .h span.fr {
    font-size: 0.55rem;
    line-height: 3;
    color: #888;
    padding-right: 0.55rem;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAPFBMVEX///+IiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIhJ++frAAAAE3RSTlMABiIkKSstNm1vc3iTmrK41uTreVSbjAAAADlJREFUeF7tyrUBACAQA8DHXbP/rqyQGrj65F62OS5WbE9FvdhpXpx/qgEk5nWgXPv+k0g+CTPLCw6LWAcZJxaVKAAAAABJRU5ErkJggg==") no-repeat right center;
    background-size: 0.55rem 0.55rem;
    position: absolute;
    right: 0.8rem;
    top: 0.1rem;
    display: block;
}
.m-order .my-row {
    padding: 0;
}
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
.m-ads {
    margin-bottom: 0.3rem;
}
</style>