<template>
<div>
  <logina></logina>
    <article class="tourist-login" style="display: block;">
      <div class="tips-style-3 agree-protocol">
        <p>继续访问即代表您已同意
          <a href="javascript:;">华为商城服务协议</a>和
          <a href="javascript:;">华为隐私政策</a>
        </p>
      </div>
    </article>
  </div>
</template>

<script>
import logina from "../components/logina"

export default {
  name: "login",
  components:{logina},
  
};
</script>

<style scoped>
.tourist-login {
  padding: 1.7rem 0.8rem 0;

  text-align: center;
}

.tourist-login .agree-protocol {
  padding: 0.7rem 0;

  position: absolute;

  left: 0;

  right: 0;

  bottom: 0;
}

.tips-style-3 p {
  font-size: 0.55em;

  line-height: 1.3;
}

</style>