<template>
  <div>
    <div class="sc-pro-goods">
      <div class="pro-panels" v-for="(item,index) in carAdds" :key="index">
        <label class="checkbox ">
          <input :class="{vam:true, checked:(clickindex%2!==0)}" @click="checked">
          <i></i>
          <span class="vam"></span>
        </label>
        <div class="sc-pro-href">
          <a href="javascript:;">
            <p class="p-img">
              <img
                :src=" item.photoPath +  '428_428_' + item.photoName | ht"
              >
            </p>
            <p class="p-name">
              <span>
                {{item.skuAbbr}}
              </span>
            </p>
          </a>
          <p class="p-price">
            <b class="red">
              <small>¥</small>{{item.price}}
            </b>
          </p>
        </div>
        <div class="p-amount-num" style="display: block;">
          <span class="textbox">
            <b :class="{minus:true, minusdisabled:inputvalue===1}" @click="reduceNum(item.prdId)"></b>
            <input type="text" readonly="readonly" :value="item.buttonMode">
            <b class="add" @click="addNum(item.prdId)"></b>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "carItem",
  mounted() {
      this.inputvalue = this.value      
      this.getData();
  },
  
  data(){
      return {
          inputvalue:1,
          clickindex:1,
          carAdds:[]
      }
  },
  methods: {
      checked(){
          this.clickindex ++;
      },
    getData(){
        this.carAdds =JSON.parse(localStorage.getItem("carAdds")) 
    },
     addNum(prdId){
         let carAdds = JSON.parse(localStorage.getItem("carAdds"));
         if(this.hasId(carAdds,prdId)){
             localStorage.setItem("carAdds",JSON.stringify(carAdds));
         }
    },
    reduceNum(prdId){
         let carAdds = JSON.parse(localStorage.getItem("carAdds"));
         for(var i=0;i<carAdds.length;i++){
                if(carAdds[i].prdId === prdId){
                        carAdds[i].buttonMode--;
                     if(carAdds[i].buttonMode >= 1){
                        localStorage.setItem("carAdds",JSON.stringify(carAdds));
                     }
                }
         }
    },
     hasId(aMsg,prdId){
          for(var i=0;i<aMsg.length;i++){
              if(aMsg[i].prdId===prdId){
                  aMsg[i].buttonMode ++;
                  return true;
              }
          }
          return false;
      },
  },
};
</script>

<style scoped>
.sc-pro-goods {
    padding: 0 .8rem;
    position: relative;
}
.sc-pro-goods .pro-panels {
    padding: .5rem 0;
    margin-left: 1.5rem;
    position: relative;
}
.checkbox, .ecWap-dialog-content p, .radiobox {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: box;
    display: -webkit-flex;
    display: flex;
}
.checkbox, .radiobox {
    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    align-items: center;
    -webkit-box-pack: start;
    -moz-box-pack: start;
    -ms-flex-pack: start;
    -webkit-justify-content: flex-start;
    -moz-justify-content: flex-start;
    justify-content: flex-start;
}
.sc-pro-goods .pro-panels .checkbox {
    position: absolute;
    padding: 0.7rem 0.3rem 0.7rem 0;
    left: -1.5rem;
    top: 50%;
    margin-top: -1.15rem;
    z-index: 2;
}
.vam {
    vertical-align: middle;
}
.checkbox input, .radiobox input {
    display: none;
}
.checkbox i, .radiobox i {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 0 none;
    display: block;
    width: .9rem;
    height: .9rem;
    vertical-align: middle;
    -webkit-box-flex: 0;
    -moz-flex-shrink: 0;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    overflow: hidden;
}
.checkbox i {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAACQCAMAAACcXt03AAABEVBMVEUAAADMDQ3NDg7NDw/ODAzODg7ODw/OEBDOExPPDg7PDw/PEBDQDg7QEhLRFxfTCwvVCQnVFRXWCgrWDg7XERHXFBTZCQncCQn////RFxeIiIjODAzTCwvWCgrZCQncCQnVCQnVFRXXFBTXERGIiIjWDg7OExPQEhLPEBDOEBDMDQ3NDg7ODg6IiIiIiIjQDg7PDg7ODg7ODg7ODg7ODw/ODg7ODg7PDg7NDg7NDg6IiIjNDg7ODw/NDw+IiIjPDw/ODg7ODg7NDg7NDg7ODg7NDg7NDg7ODw/ODw/ODQ3ODg6IiIjNDg7ODg7NDg7ODg7NDg6IiIi1tbWJiYnh4eHj4+P09PT////k5OSRkZH4+PgRJqVfAAAAUHRSTlMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACw4VFxkbHR4kJi02OERGUG50kJGbpqe0tbi8wMTHyMrLy87R0t/j7u/w8fHy8/P0+Pr6/P3+/klVXZUAAAIjSURBVHhe7Ni9EcMgEIRRleEhvhQKUEADRMu/3H8htiMPKOKGUbRffi/fO16beh4idHwT6wMWCt7K726CjIMiZ2bInEgx1/dCNceE00yQw1Xacv2CGyFB6k1RSZABsohNVYQdII+sgzL8AAVUHVQRBghoygBChAgRIkSIECFFhAgRIrRh1GycWfuHnyAVjdMT5DaO+7pT/uN4musryjDXdzwQ9r00nv/WECJE6NOO/fUkDENRAA+lnRQE5tQtC4KqUaeaiOLfzEVEQWfU3u//aaxPl4JGeruYmOy89/d6e06r1aomaa7AIipPk6p+OAPFGSqLW1k8C8VDIGUYm1AjA2KyhgEligqpxIBSICc1oJwO5Qak6JAyIHAIBSqhEro/Pn0tAjqrs+XtN3eoLzS0cuUM9aWo+/76DRVCR4rI93feqRA6Mor8rRegQ+hE6FAgdDafgQqhE6JDgdAJ0aFA6ITo/Aqpwe7e3U9ObwILQ6lYW/X63zgBOgtBh0sakufzThD2xmABnXDOPSkGc06gHRso72hJCnFhOO0g6I4tr8joSxLCu5x22kH3CWwglDxxPeW0tWMFoeQJeYvOxiNYQigJyVLDsYRQkowdaYdrZwQECCXGKtrh6FhCKGlIe9qhQSjVKk3OOyMgQijVWJN3HoAKoaQhdOgQTPbZwbiYk/3x15+IEioh91JTfM1yL37FV1H3cuxe1wsfENwnjf87+5TQJ37O6CvaBaqEAAAAAElFTkSuQmCC) no-repeat;
    background-position: 0 0;
    background-size: 100% 200% ;
}
.checkbox span, .radiobox span {
    line-height: 1.2;
    padding-left: .3rem;
    -webkit-box-flex: 1;
    -moz-flex-shrink: 1;
    -webkit-flex-shrink: 1;
    flex-shrink: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    position: relative;
    top: .05rem;
}
.sc-pro-href {
    height: 3.5rem;
    cursor: pointer;
}
.sc-pro-goods .pro-panels .p-img {
    height: 3.5rem;
    width: 3.5rem;
    float: left;
    position: absolute;
}
.sc-pro-goods .pro-panels .p-img img {
    border: none;
    display: inline-block;
    width: 100%;
    height: 100%;
    vertical-align: top;
    overflow: hidden;
}
.sc-pro-goods .pro-panels .p-name {
    max-height: 1.6rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 1.3;
    margin-left: 4rem;
}
.sc-pro-goods .pro-panels .p-name span {
    font-size: .6rem;
    position: relative;
    word-break: break-all;
    display: block;
    color:#333;
    top: 0;
}


.sc-pro-goods .pro-panels .p-price {
    position: absolute;
    bottom: .65rem;
    left: 4rem;
}
.sc-pro-goods .pro-panels .p-price b {
    font-size: .65rem;
    color: #CA151E;
}
.red {
    color: #CA151E;
}
.sc-pro-goods .pro-panels .p-price b small {
    font-size: .55rem;
}
.sc-pro-goods .pro-panels .p-amount-num {
    position: absolute;
    right: 0;
    bottom: .75rem;
    border-radius: 1.5rem;
    border: 1px solid #eaeaea;
    background-color: #fff;
    display: none;
    height: 1.12rem;
}
.sc-pro-goods .pro-panels .p-amount-num .textbox {
    min-width: 1rem;
    width: auto;
    height: auto;
    line-height: 1.55rem;
    text-align: center;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    display: block;
}
.sc-pro-goods .pro-panels .p-amount-num b {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAA8BAMAAABfg2ObAAAAMFBMVEUzMzM0NDT///80NDQ0NDQzMzMzMzMzMzMzMzM0NDQzMzM0NDQ0NDQzMzM0NDQzMzNKkLS4AAAAD3RSTlMAAAACBx80NTdaX6bF09u0EDmvAAAAg0lEQVR4XmNQogDQUfOo5lHNo5pHNQsCgchuRxBFumYBBgYGtv8JQJKRPM0c/xvI18z+v4AUzaOaWf8H4NA85y4c3JmEqdm8vLy86v9yIFmMRfP7/wjwCFPzfrjkb0I2k6IZExB2NuUBRgiMJs8BKQwQxRDlBeDAl9ujmkc1j2oe1QwAcW4W8f5FPDEAAAAASUVORK5CYII=) no-repeat;
    background-size: 200% 100%;
    height: 1.14rem;
    width: 1.35rem;
    display: block;
    float: left;
    font-size: .5rem;
    cursor: pointer;
    border-radius: 0 .75rem .75rem 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.sc-pro-goods .pro-panels .p-amount-num b.minus {
    background-position: left;
    margin-right: .9rem;
    border-radius: .75rem 0 0 .75rem;
}
input[type=text] {
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: .72rem;
    -webkit-border-radius: .72rem;
    font-size: .7rem;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #FFFFFF;
    width: 3.43rem;
    height: 1.72rem;
    padding: 0 .6rem;
    text-align: center;
    color: #888;
    vertical-align: middle;
}
.textbox input {
    border: 0 none;
    border-radius: 0;
    font-size: .65rem;
    line-height: 1.5;
    width: 100%;
    height: auto;
    padding: .6rem 0;
    text-align: left;
    color: #333;
}
.sc-pro-goods .pro-panels .p-amount-num .textbox input {
    border: 0 none;
    width: 1.75rem;
    height: 100%;
    line-height: 100%;
    font-size: .65rem;
    text-align: center;
    ime-mode: disabled;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-right: 1px solid #eaeaea;
    border-left: 1px solid #eaeaea;
    vertical-align: middle;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 50%;
    padding: 0;
    margin-left: -0.9rem;
}
.sc-pro-goods .pro-panels .p-amount-num b.add {
    background-position: right;
    margin-left: .8rem;
}
.checkbox .checked+i, .checkbox :checked+i, .radiobox .checked+i, .radiobox :checked+i {
    background-position: bottom;
}
.sc-pro-goods .pro-panels .p-amount-num b.minusdisabled, .sc-pro-goods .pro-panels .p-amount-num b.add-disabled {
    opacity: .3;
    cursor: default;
    background-color: #bbb;
}

</style>