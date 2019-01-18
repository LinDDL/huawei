<template>
  <div >
    <div class="home-head">
      <ln-head ></ln-head>
      <div class="nav-sub">
        <p
          v-for="item,index in arr"
          @click="goIndex(index)"
          :class="{subbox:true , active:showIndex===index}"
        >
          <span>{{item.name}}</span>
        </p>
      </div>
    </div>
    <div class="page" style="position:relative;width: 100%;height: auto;">
      <div style="position:absolute;width: 100%;height: auto;margin-bottom:2.4rem">
        <div style="width: 100%;height: auto;padding: 0 .2rem;border-radius: .5rem">
          <div class="swiper-container swiper-container1">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item,index in imglist">
                <img :src="item.imgsrc" alt style="width: 100%; border-radius: .5rem">
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div class="backpic-squared">
          <div class="channel-floor-squared swiper-container2 swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide squared" v-for="item,index in icon">
                <div class="a">
                  <i>
                    <img :src="item.iconPath">
                  </i>
                  <p>{{item.menuName}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="channel-headline">
          <div class="title">商城头条</div>
          <div>
            <div class="swiper-container swiper-container3">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item,index in title">
                  <a href="javascript:void(0)">{{item.title}}</a>
                </div>
              </div>
            </div>
          </div>
          <div class="more">更多</div>
        </div>
        <section class="seckill">
          <h3>
            <span class="time" style="font-size: 0.8rem;">限时购</span>
            <span class="icon-seckill-title"></span>
            <span class="count-down time">04:38:43</span>
            <span class="tip-name">后结束</span>
          </h3>
          <n-swiper :data="seckill"></n-swiper>
        </section>
        <section class="channel-floor channel-ads">
          <article class="b" style="text-align: left;">
            <ul>
              <li>
                <div class="normal">
                  <a href="javascript:;">
                    <img
                      src="https://res.vmallres.com/pimages//sale/2019-01/PxPCf93hBfhRTqz2O70m.jpg"
                      title="WAP广告投放区一第1帧"
                      style="float: none;"
                    >
                  </a>
                </div>
              </li>
              <li>
                <div class="normal">
                  <a href="javascript:;">
                    <img
                      src="https://res.vmallres.com/pimages//sale/2019-01/utSYXN4Kmp20WlwVMQLL.jpg"
                      title="WAP广告投放区一第2帧"
                      style="float: none;"
                    >
                  </a>
                </div>
                <div class="normal">
                  <a href="javascript:;">
                    <img
                      src="https://res.vmallres.com/pimages//sale/2019-01/4VqlBTNIGeVCvHTtr7cS.jpg"
                      title="WAP广告投放区一第3帧"
                      style="float: none;"
                    >
                  </a>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div class="normal">
                  <a href="javascript:;">
                    <img
                      src="https://res.vmallres.com/pimages//sale/2018-12/DsOkZ1jHKEVOS5sHeObB.jpg"
                      title="WAP广告投放区一第4帧"
                      style="float: none;"
                    >
                  </a>
                </div>
              </li>
              <li>
                <div class="normal">
                  <a href="javascript:;">
                    <img
                      src="https://res.vmallres.com/pimages//sale/2018-12/DqrLI2YPDXZ3UB51Rx8I.jpg"
                      title="WAP广告投放区一第5帧"
                      style="float: none;"
                    >
                  </a>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div class="normal">
                  <a href="javascript:;">
                    <img
                      src="https://res.vmallres.com/pimages//sale/2019-01/xrLCiA1iJ8Fl4UHZCO3C.jpg"
                      title="WAP广告投放区一第6帧"
                      style="float: none;"
                    >
                  </a>
                </div>
              </li>
              <li>
                <div class="normal">
                  <a href="javascript:;">
                    <img
                      src="https://res.vmallres.com/pimages//sale/2019-01/bdimAAk9SHRT2gdSPJXx.jpg"
                      title="WAP广告投放区一第7帧"
                      style="float: none;"
                    >
                  </a>
                </div>
              </li>
            </ul>
          </article>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import nSwiper from "../components/nSwiper";

export default {
  name: "lnIndex",
  components: { nSwiper },
  mounted() {
    new Swiper(".swiper-container1", {
      loop: true,
      autoplay: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
    new Swiper(".swiper-container2", {
      slidesPerView: 5,
      spaceBetween: 30
    });
    new Swiper(".swiper-container3", {
      direction: "vertical",
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: 500,
      mousewheel: true
    });
    if (this.icon.length === 0) {
      this.getData();
    }
    if (this.title.length === 0) {
      this.getTitle();
    }
    this.getSeckill();
  },
  data() {
    return {
      arr: [
        {
          name: "推荐"
        },
        {
          name: "华为"
        },
        {
          name: "荣耀"
        },
        {
          name: "新品"
        },
        {
          name: "数码惠"
        }
      ],
      imglist: [
        {
          imgsrc:
            "https://res.vmallres.com/pimages//sale/2019-01/ZAnn2yGY7XTGSd3D4XDg.jpg"
        },
        {
          imgsrc:
            "https://res.vmallres.com/pimages//sale/2019-01/LQ5WmmeedSoQluS4TpKu.jpg"
        },
        {
          imgsrc:
            "https://res.vmallres.com/pimages//sale/2019-01/a3vbeeR8ItC3EDteryKp.jpg"
        },
        {
          imgsrc:
            "https://res.vmallres.com/pimages//sale/2019-01/KzpZO4kvvHJ2GZJeNMtD.jpg"
        },
        {
          imgsrc:
            "https://res.vmallres.com/pimages//sale/2019-01/In30adBdAa8uYg3foTjx.jpg"
        },
        {
          imgsrc:
            "https://res.vmallres.com/pimages//sale/2019-01/ERDJQoC2dKetbweYUz4W.jpg"
        },
        {
          imgsrc:
            "https://res.vmallres.com/pimages//sale/2019-01/ZAnn2yGY7XTGSd3D4XDg.jpg"
        }
      ],
      showIndex: 0,
      icon: JSON.parse(sessionStorage.getItem("icon")) || [],
      title: JSON.parse(sessionStorage.getItem("title")) || [],
      seckill: JSON.parse(sessionStorage.getItem("seckill")) || []
    };
  },
  methods: {
    goIndex(index) {
      this.showIndex = index;
    },
    async getData() {
      let url =
        "/huawei/mcp/querySquaredInfo?portal=2&lang=zh-CN&country=CN&brandType=0";
      let data = await this.$axios.get(url);
      this.icon = data.data.squaredInfos;
      sessionStorage.setItem("icon", JSON.stringify(this.icon));
    },
    async getTitle() {
      let url =
        "/huawei/mcp/home/queryContentNewsList?portal=2&lang=zh-CN&country=CN";
      let a = await this.$axios.get(url);
      this.title = a.data.contentNewsList;
      sessionStorage.setItem("title", JSON.stringify(this.title));
    },
    async getSeckill() {
      let url =
        "/huawei/mcp/home/getNewSeckillInfos?portal=2&lang=zh-CN&country=CN";
      let a = await this.$axios.get(url);
      this.seckill = a.data.seckillInfo.seckillPrdList;
      sessionStorage.setItem("seckill", JSON.stringify(this.seckill));
    },
   
  }
};
</script>
<style scoped>
.home-head {
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
  margin: 0 auto;
  max-width: 720px;
  background:#fff;
  z-index: 100;
  background-size: 100% auto;
  background-position: bottom center;
}
.squared {
  flex: 1;
}
.nav-sub {
  height: 1.7rem;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0);
}

.subbox {
  display: inline-block;
  position: relative;
  height: 1.7rem;
  text-align: center;
  font-size: 0.7rem;
  color: #777;
  float: left;
  padding: 0 0.75rem;
}

.subbox.active {
  color: #cc0e11;
  box-sizing: border-box;
}

.subbox span {
  padding: 0.45rem 0 0.35rem;
  display: block;
}

.subbox.active:before {
  content: "";
  position: absolute;
  left: 0.9rem;
  right: 0.9rem;
  bottom: 0.2rem;
  width: auto;
  height: 0.1rem;
  border-radius: 0.05rem;
  background-color: #cc0e11;
}

.page {
  padding-top: 4rem;
}

.swiper-pagination span {
  background: #fff;
}
.backpic-squared {
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-size: 100% 160%;
  background-position: top center;
  background-image: url("data:image/png;base64,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");
}
.channel-floor-squared {
  padding: 1.8rem 0.4rem 0.05rem;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  background-position: center;
}
.channel-floor-squared .a {
  text-align: center;
  flex: 1;
  position: relative;
}
.channel-floor-squared .a p {
  font-size: 0.55rem;
  color: #9b9b9b;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.3;
}
.channel-floor-squared .a i {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  margin-bottom: 0.2rem;
}
.channel-floor-squared .a i img {
  width: 100%;
  height: 100%;
}
.channel-headline {
  margin: 0 0.9rem;
  height: 2rem;
  position: relative;
}
.channel-headline .title {
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
  float: left;
  height: 2rem;
  position: relative;
  font-size: 0.7rem;
  font-weight: 600;
  color: #333;
}
.channel-headline .more {
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -0.3rem;
  z-index: 2;
  font-size: 0.6rem;
  color: #999999;
}
.channel-headline .swiper-container {
  padding-right: 1.5rem;
  height: 2rem;
  line-height: 2rem;
  vertical-align: middle;
  position: relative;
  overflow: hidden;
}
.channel-headline .swiper-container .swiper-slide a {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.6rem;
  color: #4d4d4d;
  padding-left: 1rem;
}
.channel-headline .swiper-container .swiper-slide a:before {
  content: "";
  position: absolute;
  left: 0.4rem;
  top: 50%;
  margin-top: -0.1rem;
  width: 0.2rem;
  height: 0.2rem;
  display: block;
  border-radius: 0.2rem;
  background-color: rgba(155, 155, 155, 0.5);
}
.seckill {
  text-align: center;
  background-image: linear-gradient(-180deg, #f9f9f9 0%, #ffffff 100%);
}
.seckill h3 {
  padding: 0.7rem 0 0.5rem;
  position: relative;
  text-align: center;
  margin: 0 auto;
  display: inline-block;
  font-size: 0;
}
.seckill h3 .time {
  display: block;
  float: left;
  font-size: 0.8rem;
  color: #4d4d4d;
  line-height: 0.8rem;
}
.seckill h3 .icon-seckill-title {
  display: block;
  float: left;
  height: 0.75rem;
  width: 0.75rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAzlJREFUSIm9lk9oHGUYxn/vzO7MBCn0IHjqQU1rS5sEia34B6EEtEWqYAkY8ChUPXnpQa8eglRa8c9FPYm9iqBgRA8WF7WWVEkb02Qlih56KQhF2szszPd42NnNbLLZnUmj7+XbmV2e3z7v93zvjLGN0smx+zKzJQNJJAaJpMTMEieXeHgJUixITJz3P7vy3kaN2rbAZh8YBBIYhJIwDDnh4dG+BsR1L7n9cT+NyuD05PgJOaa6MKn9Z8hXOWjfl2Qz9uVvN+8YrOOjoRPvF6EG5Oz8g4GE4Gz98ysXttKqBHbhyGll2tNm5M5yp91FwoOr/oheH6RlZaF69tCeDGsCYdFZEZqvSZp549HcwvIgvdKOM8c5UJgHqt3mPNY9bUevRXNXB0KhpOPWMwcfM1mDDXvZZ68v1OYWj9p6D7Ysb9gPND3tk9lHygQOlAkEcp3Vda5v1uRmykChRKvdraVXkfb3OHOFdnfuixft66XrZaAwpNU6se/utFVfBXZ1A8XmQEmcD7759YWyUBjiuNWqn/VglwakWPBXvZ68UgUKAxwnxw4eNqefegJlmwIlZTwafLv0446ABZY+eeAXZONdaNdx78QySCXFJosdin3aq4lYIkb6JGgsv7OR0bfVrakDL5Mxvvm8tidWz4wWNaAm6S4D3PqsBuPtemP53X6MvmBDEdgZyUUeFjlHCEQ4RYZFwh0xbLd6J1axM0I6FXy/8mE//TajYmnq0D2tVvoHUlQMXGGirfnypms/XPtikE7lx2IrSd/YCEUdB7phmXesdvHa/DCdSo5vP/HAvV5G08DvTbchtOr89OhIY/XPMlqVHPsps2yCgqSLQT08bo2Vv8tqlXYcP7J/zHAL63vZ+UafBv8EM7a4mFQxUd6x3JtFaO70rfBS83QVYKfKPRYf3ve4k74rBMoZ9lJwaevjMqxKOXbOnQOvA70lp+fCy82vtgstBV6b3Ps04iHkEHbDlE5Fl39fuBMolHgRMDSLE8CKyCbDHYAOBccP7p2RY0zOGgHuyMh8uTNaprYMl6bx4+Zo00w/B97u521+vrVT0IG1NnH/qXhidPZ/gXVKk5P1tYnRp/5Lxr/6zfGm+6zJFgAAAABJRU5ErkJggg==)
    no-repeat center center;
  background-size: 100% 100%;
  margin: 0 0.15rem;
}
.seckill h3 .tip-name {
  font-size: 0.5rem;
  color: #9b9b9b;
  margin-left: 0.1rem;
  display: block;
  float: left;
  line-height: 0.75rem;
}
.channel-floor {
  margin-bottom: 0.5rem;
  background-color: #fff;
  text-align: center;
  padding: 0 0.3rem;
}
.channel-ads {
  margin-bottom: 0;
  padding-bottom: 0.5rem;
  padding-top: 0.2rem;
}
.channel-ads .b {
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  overflow: hidden;
}
.channel-floor ul {
  width: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: box;
  display: -webkit-flex;
  display: flex;
  box-sizing: border-box;
}
.channel-floor ul li {
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  max-width: 50%;
  margin-left: 0.3rem;
}
.channel-ads ul li {
  width: 50%;
  margin-left: 0.1rem;
  margin-top: 0.1rem;
}
.channel-floor ul li:first-child {
  margin-left: 0;
}
.channel-ads ul:first-child li {
  margin-top: 0;
}
.channel-floor ul li a {
  display: block;
  position: relative;
}
.channel-ads ul li a,
.channel-ads ul li img {
  display: block;
}
</style>