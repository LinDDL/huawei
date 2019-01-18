<template>
    <div class="box box-shadow">
<div class="text">
			<p class="code">400 Error</p>
			<p class="info">Sorry, Bad Request</p>
		</div>
    </div>
</template>

<script>
    export default {
        name:"error"
    }
</script>

<style scoped>
.box {
    position: relative;
    top: 15%;
    left: 10%;
    width: 80%;
    height: 60%;
    text-align: center;
    border-radius: 10px;
    background: #D4D4D3;
}
.box-shadow {
    filter: progid:DXImageTransform.Microsoft.Shadow(color='#969696', Direction=135, Strength=5);
    background-color: #eee;
    -moz-box-shadow: 2px 2px 5px #969696;
    -webkit-box-shadow: 2px 2px 5px #969696;
    box-shadow: 2px 2px 5px #969696;
}
.text {
    position: relative;
    top: 10%;
}
.code, .info {
    position: relative;
    display: block;
    padding: 10px;
}
.code {
    font-size: 4em;
    color: red;
    padding: 10px;
}
.info {
    font-size: 1.5em;
}
</style>