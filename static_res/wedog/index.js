var content = '';
randomSoul();
$('meta[name="description"]').attr('content',content.replace(/\*\*(.*?)\*\*/g,''));
var clipboard = new ClipboardJS('a[data-btn="copy"]');
clipboard.on('success', function(e) {
		$('tips').show(
			setTimeout(function() {
				$('tips').hide()
			}, 1500)
		);
		e.clearSelection();
});
function randomNumBoth(min,max){
	var range = max - min;
	var rand = Math.random();
	var num = min + Math.round(rand * range);
	return num;
}
var date = new Date();
var year = date.getFullYear().toString(); 
var month = (date.getMonth() + 1).toString();
var day = date.getDate().toString();

var city = localStorage.getItem('city') || '';
var cloud = localStorage.getItem('cloud') || '';
var cond = localStorage.getItem('cond') || '';
var dateStart = new Date(localStorage.getItem('date') || new Date());
var dayDiff = date.getDate() - dateStart.getDate();
var weatherKeys = ['fbb7fed63979495f88fc1ddc7296f497','f3488e987bce466d8ae6b523becf278f','95cf38cd40b84df9beae340c610e8550','3cad9669ecba42c39ebfd73cdb566329','6ec2f3eef9bc448ba8a72e815dd86f12'];
if(city == '' || dayDiff >= 1) {
	var weather = {};
	for(var i=0;i < weatherKeys.length; i++) {
		weather = getWeather(weatherKeys[i]);
		console.log(weatherKeys[i]+':'+weather.status)
		if (weather.status == 'ok') { break };
	}
	city = weather.basic.parent_city || '';
	cloud = weather.now.fl || ''
	cond = weather.now.cond_txt || ''
	localStorage.setItem('city',city);
	localStorage.setItem('cloud',cloud);
	localStorage.setItem('cond',cond);
	localStorage.setItem('date',new Date());
}
renderWeather();

function getWeather(key) {
	var weatherData = {};
	$.ajax({
		url: 'https://free-api.heweather.net/s6/weather/now?location=auto_ip&key='+key,
		type: 'get',
		async: false,
		success : function(data){
			weatherData = data.HeWeather6[0];
		}
	});
	return weatherData;
}
function renderWeather(){
	var weatherHTML = '<time>'+ year+'-'+month+'-'+day+'</time><span>'+city+'·'+cond+'·'+cloud+'&#8451;</span>'
	$('address').html(weatherHTML);
}
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?a3bfaec321165f405968b4625458d552";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();