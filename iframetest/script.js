navigator.sayswho= (function(){
    var N= navigator.appName, ua= navigator.userAgent, tem,
    M= ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*([\d\.]+)/i);
    if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
    M= M? [M[1], M[2]]:[N, navigator.appVersion, '-?'];
    return M.join(' ');
})();

function whichBrowser(){
	var browser = navigator.sayswho;
	alert("You are currently running- " + browser);
}


function urlSearch(){
	var url = "http://" + $(".urlbox").val();
	$(".browser").attr("src", url);
}