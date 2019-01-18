<template>
  <div class="sc-list">
    <ul>
      <li class="sc-pro-item" v-for="(item,index) in data " :key="index">
        <a href="javascript::">
          <div class="pro-panels clearfix">
            <p class="p-img">
              <img
                :src="item.photoPath + '428_428_' + item.photoName | ht"
                :alt="item.name"
              >
            </p>
            <p class="p-name">
              <span>{{item.skuName}}</span>
            </p>
            <p class="p-price">
              <b>
                <em>¥ {{item.price}}</em>
                <em class="multi">多配置可选</em>
              </b>
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "scItem",
  props:["data"]
};
</script>

<style scoped>
.sc-list{
    margin: 0;
    position: relative;
    padding: 0 0.8em;
    background-color: #fff;
}
.sc-pro-item {
    position: relative;
}
.pro-panels {
    padding: 0.3rem 0;
    border-top: 1px solid #eeeeee;
}
.sc-pro-item:first-child .pro-panels {
    border-top: 0;
}
.pro-panels .p-img {
    height: 4rem;
    width: 4rem;
    float: left;
    position: relative;
    padding: 0.1rem 0;
}
.pro-panels .p-img img {
    border: none;
    display: inline-block;
    width: 100%;
    height: 100%;
    vertical-align: top;
    overflow: hidden;
}
.pro-panels .p-name, .pro-panels .p-promotion, .pro-panels .p-tip {
    padding-left: 0.3rem;
    padding-right: 0;
    overflow: hidden;
}
.pro-panels .p-name {
    color: #333;
    max-height: 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 1;
}
.pro-panels .p-name span {
    font-size: 0.75rem;
    position: relative;
    top: -0.12rem;
}
.pro-panels .p-price, .pro-panels .p-receive {
    position: absolute;
    bottom: 0.3rem;
    left: 4.3rem;
}
.pro-panels .p-price b, .pro-panels .p-receive b {
    color: #ca151e;
    display: block;
}
address, caption, cite, code, dfn, em, th, var {
    font-style: normal;
    font-weight: 400;
}
.pro-panels .p-price em, .pro-panels .p-receive em {
    font-size: 0.75rem;
}
.pro-panels .p-price em.multi, .pro-panels .p-receive em.multi {
    font-size: 0.4rem;
    padding: 0.06rem 0.25rem;
    height: 0.6rem;
    line-height: 0.6rem;
    color: #888;
    text-align: center;
    position: relative;
    border: 1px solid #bbbbbb;
    border-radius: 0.6rem;
    vertical-align: middle;
}
.multi{
    margin-left:.3rem;
}

</style>