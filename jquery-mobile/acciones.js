// JavaScript Document
$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){
		$('#dis table td').eq(3).text(device.model);
		$('#dis table td').eq(5).text(device.cordova);
		$('#dis table td').eq(7).text(device.plataform);
		$('#dis table td').eq(9).text(device.version);
		$('#dis table td').eq(11).text(device.uuid);
     document.addEventListener("pause",function(){
	escribehistoria('la app se pausó');
	},false);
	document.addEventListener("resume",function(){
		escribehistoria('la app se reinicio');
	},false);
	document.addEventListener("online",function(){
		escribehistoria('la app se conecto a la red');
	},false);
	document.addEventListener("offline",function(){
		escribehisroria('la app se desconecto de la red');
	},false);
	},false);
	 
});
function escribehistoria(accion){
	$('#eHistoria').append('<li>'+accion+'</li>');
}
