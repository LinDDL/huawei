import lnHead from "./lnHead";
import lnIcon from "./lnIcon";
import hHead from "./hHead";
import aHead from "./aHead";

import lnSwiper from "./lnSwiper"
const LnHead = {};
LnHead.install = function(Vue){
    Vue.component("lnHead",lnHead);
    Vue.component("lnIcon",lnIcon)
    Vue.component("hHead",hHead);
    Vue.component("aHead",aHead);
    Vue.component("lnSwiper",lnSwiper);


}
export default LnHead;