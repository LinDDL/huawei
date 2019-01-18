<template>
<div>
    
<div class="body-EMUI5 wrapLogin"  v-if="show"> 
    <div class="content-EMUI5">
      <div id="head">
        <div class="head-content" id="headContent">
          <b class="login_logo"></b>

          <div class="title-main center">华为帐号</div>
        </div>
      </div>
    </div>

    <div class="line8-EMUI5">
      <div class="dinput-UI5" id="usernameDiv">
        <input
          type="text"
          class="ar-eg"
          id="username"
          name="username"
          maxlength="50"
          placeholder="手机号/邮件地址/华为号 "
          validator="validator11547536304274"
        >
      </div>

      <div id="user_msg" class="error-tips-EMUI5 line-EMUI5"></div>
    </div>

    <div class="line8-EMUI5">
      <div class="dinput-UI5" id="passwordDiv">
        <div class="ico-div ico-div-waplogin">
          <img
            class="eyeoff"
            id="passwdEye"
            src="https://hwid1.vmall.com/CAS/up/idmw_rss_25/css/mobile/standard_rss/images/eyeoff_wap_ui9.png?cas20181223"
          >
        </div>

        <div class="input-div">
          <input
            type="password"
            maxlength="32"
            id="password"
            placeholder="密码"
          >
        </div>
      </div>

      <div id="passwd_msg" class="error-tips-EMUI5 line-EMUI5"></div>
    </div>

    <div class="line-EMUI5 marginTop16 wap_sms_container">
      <div class="left">
        <a
          class="changeLoginType medium"
          style="visibility: visible;"
          @click="hide"
        >短信验证码登录</a>
      </div>

      <div class="right">
        <img
          src="https://hwid1.vmall.com/CAS/up/idmw_rss_25/css/mobile/standard_rss/images/tick-off.png?cas20181223"
          class="tick wrapLogin-remName"
          id="remember_name"
        >
        <span class="wrapLogin-remName">记住帐号</span>
      </div>
    </div>

    <div class="line-EMUI5">
      <div class="btn-EMUI5 disabled login_btn_50p" id="btnLogin" >登录</div>

      <span id="msg_login"></span>
    </div>

    <div class="line8-EMUI9 center fontsize_0">
      <a
        id="registerLink"
        class="a-EMUI5 line-EMUI5 display-inline-block fontsize_13 medium"
        href="javascript:;"
      >注册帐号</a>
      <br>
      <a
        id="resetPwdLink"
        href="javascript:;"
        class="a-EMUI5 fontsize_13 medium"
      >忘记密码</a>
    </div>
    </div>
<div v-if="!show">
    <div class="smsValidateLogin hidden" style="display: block;">
			<div class="actionbar">短信验证码登录</div>
		<div class="content-EMUI5">
			<div class="line8-EMUI5">
				<div class="" id="chooseCountry">
					<div class="countryCode flexLayout">	    
						<div class="countryCode-content">
							<div class="countryCodeH-EMUI5 countryCideH-EMUI5-up">国家/地区</div>
						</div>
						<div class="flexItemRight text-right selectedCountry-text" id="smsLoginCountryCode">
							<span id="selectedCountry" class="selectedCountryName" data-regions="cn" data-countrycode="+86" data-countrysite="1">中国  +86</span>
						</div>
						<div class="r">
							<span id="selectCountryImg" class="item-value item-forward-userAgr"></span>
							<div id="selectCountryRegionDiv"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="marginTop16">
				<div class="dinput-UI5" id="phoneNumDiv">
					<input type="text" autocomplete="off" class="ar-eg" id="phoneNum" name="username" maxlength="50" placeholder="手机号" validator="validator31547538242292">
				</div>
				<div id="phoneNum_errMsg" class="error-tips-EMUI5 line-EMUI5"></div>
			</div>
		
			<div class="marginTop16">
				<div class="dinput-UI5" id="smsAuthcodeDiv">
					<div class="getAuthbtn select-text btnUnable" id="getValiCode" intervaltime="60">
						<a class="getValiCodeFont medium" href="javascript:void(0)" @click="login">获取验证码</a>
					</div>
					<span id="msg_getPhoneRandomCode"></span>
					<div class="input-div">
						<input maxlength="8" id="smsAuthcode" type="tel" autocomplete="off" placeholder="短信验证码" validator="validator41547538242293">
					</div>
				</div>
				<div id="smsAuthcode_msg" class="error-tips-EMUI5 line-EMUI5"></div>
			</div> 
			
			<div class="marginTop16">
				<div class="halfWidthRight r">
					<img src="https://hwid1.vmall.com/CAS/up/idmw_rss_25/css/mobile/standard_rss/images/tick-off.png?cas20181223" class="tick wrapLogin-remName" id="smsRemember_name"><span class="wrapLogin-remName">记住帐号</span>
				</div>	
				<div class="halfWidthleft">
					<a class="changeLoginType medium" data-type="smsValidateLogin" style="visibility: visible;" @click="shows">密码登录</a>
				</div>	
			</div>

			<div class="marginTop16">	
				<div class="btn-EMUI5 disabled login_btn_50p" id="smsBtnLogin" href="javascript:void(0)">登录</div>
				<span id="msg_login"></span>
			</div>
		</div>
	</div>
</div>
</div>

</template>

<script>
import logina from "../components/logina"

    export default {
        name:'logina',
        data() {
            return {
                show:true
            }
        },
        methods: {
            hide(){
                this.show = false
            },
            shows(){
                this.show = true

            },
            async login(){
              let url = "/huaweilogin/CAS/IDM_W/ajaxHandler/getSMSCodeV3?reflushCode=0.6364241684862872";
              var formData = new FormData();
              var userAccount = document.getElementById("phoneNum").value;
              formData.append("accountType","2");              
              formData.append("userAccount",'0086'+ userAccount);
              formData.append("mobilePhone",'0086'+ userAccount);
              formData.append("reqClientType","26");
              formData.append("operType","20");
              formData.append("smsReqType","2");   
              formData.append("siteID","1");
              formData.append("languageCode","zh-cn");
              formData.append("service","https://m.vmall.com/account/caslogin?url=%2FupCallback.html%3FifmUrl%3Dhttps%253A%252F%252Fm.vmall.com%252Fpersonal");
              formData.append("loginChannel","26000002");              
              formData.append("randomCode",'{"challenge":"b1925d146ce0c8ec2f35b287a757b2cf","validate":"e9d24b2ab57a775c108c4270f7711846","seccode":"e9d24b2ab57a775c108c4270f7711846|jordan"}');
              let data =await this.$axios.post(url,formData);
              console.log(data)
            }
        },
    }
</script>

<style scoped>
.body-EMUI5 {
  background: #fff;

  max-width: 530px;

  margin: 0 auto;

  padding: 0 16px;

  color: #191919;
}

.content-EMUI5 {
  padding: 0 16px;
}

.head-content {
  padding: 48px 0 24px !important;

  position: relative;
}

.login_logo {
  background-image: url(https://hwid1.vmall.com/CAS/up/idmw_rss_25/css/mobile/standard_rss/css/images/wap_login_logo.png);

  background-repeat: no-repeat;

  width: 49px;

  height: 49px;

  display: inline-block;

  background-position: 50%;

  margin: 0 0 24px 0;

  background-size: 100%;

  left: 50%;

  margin-left: -24.5px;

  position: relative;
}

.title-main {
  font-size: 24px;
}

.center {
  text-align: center;

  justify-content: center;

  -webkit-box-pack: center;
}

.line8-EMUI5 {
  margin-bottom: 8px;
}

.dinput-UI5,
.uc-index-item-right,
.dinput-UI6 {
  position: relative;
}

.dinput-UI5 * {
  font-size: 15px;

  line-height: 1;
}

.dinput-UI5 input {
  height: 32px;

  border: none;

  outline: 0;

  font-size: 15px;

  color: #191919;

  width: 100%;
}

.dinput-UI5 input {
  font-size: 15px;

  color: #191919;
}

.dinput-UI5:after,
.dinput-UI6:after,
.uc-index-item-right:after {
  content: " ";

  position: absolute;

  left: 0;

  bottom: 0;

  width: 100%;

  height: 1px;

  background-color: #ccc;

  -webkit-transform: scaleY(0.5);

  transform: scaleY(0.5);
}

.error-tips-EMUI5 {
  font-size: 10px;

  color: #fa2a2d;

  margin-top: 4px;
}

.line-EMUI5 {
  margin-bottom: 16px;
}

.line8-EMUI5 {
  margin-bottom: 8px;
}

.dinput-UI5,
.uc-index-item-right,
.dinput-UI6 {
  position: relative;
}

.dinput-UI5 .ico-div {
  padding-left: 8px;

  float: right;
}

.dinput-UI5 .ico-div-waplogin {
  padding-left: 16px;
}

.dinput-UI5 * {
  font-size: 15px;

  line-height: 1;
}

.dinput-UI5 * {
  font-size: 15px;

  line-height: 1;
}

.dinput-UI5 .eyeoff {
  display: inline-block;

  height: 24px;

  width: 24px;

  margin-top: 7px;
}

.dinput-UI5 * {
  font-size: 15px;

  line-height: 1;
}

.dinput-UI5 .input-div {
  margin-right: 6px;

  overflow: hidden;
}

.dinput-UI5 input[type="password"] {
  font-size: 15px;
}

.error-tips-EMUI5 {
  font-size: 10px;

  color: #fa2a2d;

  margin-top: 4px;
}

.wap_sms_container {
  display: -webkit-box;

  display: -moz-box;

  display: -ms-box;

  -webkit-box-pack: justify;

  -moz-box-pack: justify;

  -ms-box-pack: justify;

  display: flex;

  justify-content: space-between;

  flex-wrap: wrap;
}

.left {
  float: left;
}

.medium {
  font-weight: 500;
}

.changeLoginType {
  visibility: hidden;

  color: #005bba;

  line-height: 24px;
}

.right {
  float: right;
}

.wrapLogin-remName {
  vertical-align: middle;

  font-size: 0.7rem;
}

.line-EMUI5 .tick {
  width: 24px;

  height: 24px;

  float: left;

  margin: 0 8px 0 0;
}


.tourist-login .tips-style-3 p {
  font-size: 0.6rem;

  color: #888;
}

.tourist-login .button-tourist-login a,
.tourist-login .tips-style-3 a {
  font-size: 0.7rem;

  color: #267eff;

  line-height: 1rem;

  position: relative;
}

.line-EMUI5 {
  margin-bottom: 16px;
}

.btn-EMUI5 {
  font-weight: 500;

  padding: 0 8px;

  margin: 0 auto;

  background: #007dff;

  border-radius: 4px;

  font-size: 15px;

  color: #fff;

  height: 32px;

  display: -webkit-box;

  display: -webkit-flex;

  display: -ms-flexbox;

  display: flex;

  -webkit-box-align: center;

  align-items: center;

  justify-content: center;

  -webkit-box-pack: center;
}

.login_btn_50p {
  width: 50%;

  margin: auto;

  padding: 0 16px;
}

.btn-EMUI5.disabled {
  opacity: 0.3;
}

.line8-EMUI9 {
  margin-bottom: 24px;
}

/* .fontsize_0 {
    
        font-size: 0;
    
    } */

.wap_sms_container {
  display: -webkit-box;

  display: -moz-box;

  display: -ms-box;

  -webkit-box-pack: justify;

  -moz-box-pack: justify;

  -ms-box-pack: justify;

  display: flex;

  justify-content: space-between;

  flex-wrap: wrap;
}

.medium {
  font-weight: 500;
}

.changeLoginType {
  visibility: hidden;

  color: #005bba;

  line-height: 24px;
}

a {
  font-size: 0.7rem;

  color: #005bba;
}
.actionbar {
    font-size: 18px;
    color: #191919;
    min-height: 32px;
    font-weight: 500;
    line-height: 1.1;
    padding: 8px 16px;
    background: #F0F0F0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-top: 8px solid #FCFCFC;
    margin-bottom: 16px;
}
.content-EMUI5 {
    padding: 0 16px;
}
.line8-EMUI5 {
    margin-bottom: 8px;
}
.flexLayout {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-box;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-box-align: center;
}
.countryCode {
    bottom: 23px;
}
.smsValidateLogin .countryCode-content {
    display: inline-block;
    vertical-align: middle;
}
.countryCideH-EMUI5-up {
    font-size: 15px;
    color: rgba(0,0,0,1);
    margin: 0;
    line-height: 1;
}
.smsValidateLogin .countryCideH-EMUI5-up {
    height: 40px;
    line-height: 40px;
}
.flexItemRight {
    flex: 1;
    text-align: right;
    align-items: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-box-align: center;
}
.flexItemRight {
    flex: 1;
    text-align: right;
    align-items: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-box-align: center;
}
.text-right {
    text-align: right;
}
.selectedCountryName {
    font-size: 13px;
    margin-left: 8px;
    margin-right: 4px;
    color: rgba(0,0,0,0.5);
}
.r {
    float: right;
}
.item-forward-userAgr {
    background: url(https://hwid1.vmall.com/CAS/up/idmw_rss_25/css/mobile/standard_rss/css/images/ic_public_arrow_right.png) right center no-repeat;
    padding-right: 16px;
    background-size: 12px 24px;
    display: inline-block;
    height: 28px;
    line-height: 28px;
}
.item-value {
    font-size: 13px;
    color: #8d8d8d;
}
.smsValidateLogin .item-forward-userAgr {
    height: 40px;
    line-height: 40px;
}
.dinput-UI5 .getAuthbtn {
    padding-left: 16px;
}
.dinput-UI5 .getAuthbtn {
    float: right;
}
.smsValidateLogin .btnUnable a {
    color: rgba(0,125,255,0.2);
}
.halfWidthRight {
    text-align: right;
    overflow: hidden;
}
.halfWidthRight {
    text-align: right;
    overflow: hidden;
}
.tick {
    width: 20px;
    height: 20px;
    margin-right: 5px;
    cursor: pointer;
    vertical-align: middle;
    float:left;
}
.marginTop16 {
    margin-top: 16px;
}
</style>