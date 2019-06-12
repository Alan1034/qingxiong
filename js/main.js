
// 组件高度
$(".bodyComponents").height(window.innerHeight-70);
$(".CompanyProfile-picture").children().width(window.innerWidth*0.6);
$(".CompanyProfile-picture").children().height(360);
// $(".background1").css({
// 	// padding: $(".bodyComponents-main").width/10
// 	width:window.innerWidth,
// 	float:left
// });

// new WOW().init();
var wow = new WOW({
	boxClass: 'wow',
	animateClass: 'animated',
	offset: 0,
	mobile: true,
	live: true
});
wow.init();

// $(function () {

// 	var $gallery = $('.gallery').flickity({
// 		cellSelector: '.gallery-cell'
// 	})

// });
// 百度地图
// 百度地图API功能
var map = new BMap.Map("qingxiongdizhi");    // 创建Map实例
map.centerAndZoom(new BMap.Point(113.26205, 23.131524), 18);  // 初始化地图,设置中心点坐标和地图级别
//添加地图类型控件
map.addControl(new BMap.MapTypeControl({
	mapTypes: [
		BMAP_NORMAL_MAP,
		BMAP_HYBRID_MAP
	]
}));

var local = new BMap.LocalSearch(map, {
	renderOptions: { map: map }
});
local.search("青雄地毯");
map.addControl(new BMap.NavigationControl());
map.setCurrentCity("广州");          // 设置地图显示的城市 此项是必须设置的
map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放


// 练习
// const sum=(arr)=>{
// if(arr.length==0){
// 	return 0
// }
// 	// console.log(arr.slice(1))
// 		// console.log(arr[0])
// 	num = arr[0] + sum(arr.slice(1))
// // console.log(num)
// 	// console.log(arr[1] + sum(arr.slice(1)))
// 	return num}
// console.log(sum([1,3,4,6,7]))