<template>
  <div class="home">
    <router-view></router-view>
    <div class="navbar">
      <div v-for="(item,index) in navbar" :key="index" 
      :id="item.style" 
      @click ="goIndex(index)"
      :class="{navitem:true,active:showIndex===index} ">
      </div>
    </div>
  </div>
</template>

<script>
  
  export default {
    name: 'home',
    mounted() {
      if(this.$route.fullPath==="/index"){
        this.showIndex = 0;
      }
      if(this.$route.fullPath==="/classify"){
        this.showIndex = 1;
      }
      if(this.$route.fullPath==="/find"){
        this.showIndex = 2;
      }
      if(this.$route.fullPath==="/car"){
        this.showIndex = 3;
      }
      if(this.$route.fullPath==="/mine"){
        this.showIndex = 4;
      }
    },
    data(){
      return {
        navbar:[
          {style:"bar1",path:"/index"},
          {style:"bar2",path:"/classify"},
          {style:"bar3",path:"/find"},
          {style:"bar4",path:"/car"},
          {style:"bar5",path:"/mine"},
        ],
        showIndex:0
      }
    },
    methods: {
      goIndex(index){
        this.showIndex = index;
        this.$router.push(this.navbar[index].path)
      }
    },
   
  }
</script>

<style scoped>
  .home {
    width: 100%;
    position:relative;
    height:100%;
  }
  .navbar{
    background-color: #f9f9f9;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 720px;
    height: 2.5rem;
    z-index: 100;
    margin: 0 auto;
    display:flex;
  }
  .navitem{
    flex:1;
    text-align: center;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    display: block;
    text-align: center;
    height: 2.5em;
    background: url(https://res.vmallres.com/nwap/20181215/staticm/img/icon55_new.d54bb9c.png) no-repeat top;
    background-size: 500% 5em;
    position: relative;
    cursor:pointer;
  }
#bar1{
   background-position: 0 0;
 }
 #bar1.active{
background-position: 0 -2.5em;
 }
 #bar2{
       background-position: 25% 0;
 }
 #bar2.active{
background-position: 25% -2.5em;
 }
 #bar3{
       background-position: 50% 0;
 }
 #bar3.active{
background-position: 50% -2.5em;
 }
 #bar4{
   background-position: 75% 0;
 }
 #bar4.active{
background-position: 75% -2.5em;
 }
 #bar5{
   background-position: 100% 0;
 }
 #bar5.active{
    background-position: 100% -2.5em;
 }

</style>
