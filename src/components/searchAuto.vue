<template>
  <div class="search-auto"> 
    <ul>
      <li v-for="(item,index) in data" :key="index">
        <span v-html="item.keyword || item.info " ref="searchword" @click="gosearch"></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "searchAuto",
  props:["data"],
  methods: {
      gosearch(e){
          let data = e.target.innerHTML;
          this.$emit("searchone",data)
      }
  },
};
</script>

<style scoped>
.search-auto {
    margin: 0;
    background-color: #fff;
}
.search-auto li {
    border-bottom: 1px solid #d2d2d2;
    padding: 0 0.6em;
    overflow: hidden;
    text-overflow: ellipsis;
}
.search-auto li span {
    font-size: 0.7em;
    line-height: 3.57;
    white-space: nowrap;
    color: #333;
}
.search-auto li span em {
    color: #ca141d;
}
</style>