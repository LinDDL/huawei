<template>
    <div>
       <h-head title="购物车"></h-head>
       
        <div class="car-page">
            <div class="guang">
                <div  class="f">
                    <a  href="javascript:;" class="vm-button type2 round small" style="margin-right:10px;" @click="goShop">去逛逛</a>
                    <a  href="javascript:;" class="vm-button type2 round small" @click="goCart">去购物车</a>

                </div>
            </div>
            <section class="sc-pro-goods" >
                <router-view></router-view>
            </section>
        </div>
    </div>
</template>
<script>
import cItem from "../components/cItem";
import carItem from "../components/carItem"

export default {
    name:'car',
    mounted() {
    },
    data() {
        return {
           
        }
    },
    components:{cItem,carItem},
    methods: {
        goCart(){
            this.$router.push("/carItem")
        },
        goShop(){
            this.$router.push("/cItem")
        }
    },
}
</script>
<style scoped>
    
.car-page{
    padding:2.4rem 0 4rem 0;
}
.sc-pro-goods {
    padding: 0 .8rem;
    position: relative;
}
.guang{
    padding: 1.25rem 0.8rem;
    text-align: center;
}
.f {
    padding: 0.4rem 0 0;
}
.vm-button.small {
    padding: 0 0.65rem;
    height: 1.15rem;
    line-height: 1.15rem;
    border-radius: 1rem;
    text-align: center;
    min-width: 1.8rem;
}
.vm-button.type2 {
    border: 1px solid #ca151e;
    color: #ca151e;
    display: inline-block;
    text-align: center;
    font-size: 0.6rem;
}
</style>