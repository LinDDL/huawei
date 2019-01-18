<template>
  <div>
    <article class="search-hot">
      <header>
        <p>热门搜索</p>
      </header>
      <section>
        <ul class="clearfix">
          <li v-for="item,index in data">
            <a>
              <span>{{item.word}}</span>
            </a>
          </li>
        </ul>
      </section>
    </article>
  </div>
</template>
<script>
export default {
  name: "searchHot",
  props:["data"]
};
</script>

<style scoped>
.search-hot {
    padding: 0.8rem;
    margin-bottom: 0.4rem;
    background-color: #fff;
}
.search-hot header {
    padding: .25rem 0 0.1rem;
}
.search-hot header p {
    font-size: 0.65rem;
    font-weight: bold;
}
.search-hot ul {
    max-height: 5.6rem;
    margin-left: -0.4rem;
    overflow: hidden;
}
.clearfix:before, .clearfix:after {
    content: " ";
    display: table;
}
.search-hot ul li {
    max-width: 100%;
    float: left;
    padding: 0.35rem 0;
}
.search-hot ul li a {
    font-size: 0.55rem;
    line-height: 1.3rem;
    height: 1.2rem;
    text-align: center;
    margin-left: 0.4rem;
    padding: 0 0.6rem;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 0.1rem;
    background-color: #F9F9F9;
}
.search-hot ul li a span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>