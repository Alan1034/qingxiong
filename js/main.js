
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


// 练习
// mockArr=[]
// for (let index = 0; index < 99999; index++) {
// 	mockArr.push(index)
// }

// // 会溢出
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
// console.log(sum(mockArr))


// // 不会溢出
// thisnum=0

// const sum=(arr,num)=>{
// if(arr.length==0){
// 	return 
// }
// 	num = arr[0]+num
// 	thisnum = num
// 	console.log(num)
// 		// console.log(arr[0])
// 	sum(arr.slice(1), num )
// // console.log(num)
// 	// console.log(arr[1] + sum(arr.slice(1)))
// }
// sum(mockArr, 0)
// console.log(thisnum)