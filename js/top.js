var opa;
	var opacnt =1;
	var timer =100;

window.addEventListener('DOMContentLoaded',
  function(){
	// today()関数を呼び出す
	today();
	
	var t = setInterval(today,1000);
	var obj = document.querySelector('#img');
	obj.addEventListener(
		'click',function(){
            var obj = document.querySelector('#img');
			if(obj.getAttribute('src')=='image/334ba85cd47e330abf83924167db60f6.gif')
			  obj.setAttribute('src','image/slider-1.jpg');
			else
				obj.setAttribute('src','image/334ba85cd47e330abf83924167db60f6.gif');
			opa=0;
			obj.style.opacity=opa;
			obj=setInterval('fadeIn()',timer);
		},
		false
	);
  },false
);

function fadeIn(){
    var obj = document.querySelector('#img');
	if(opa <=100){
		obj.style.opacity = opa/100;
		opa += opacnt;
	}else{
		clearInterval(obj);
}
}
// 今日の日付を表示する関数
function today(){ 
	// Dateオブジェクトを作成
	//alert('test_func');
	var dateObj = new Date() ;
	// 曜日の配列(はいれつ)
	var weekDayList = [ "日", "月", "火", "水", "木", "金", "土" ];
	// 日時の各情報を取得
	var year   = dateObj.getFullYear() ;	// 年
	var month   = dateObj.getMonth() + 1 ;	// 月
	var date    = dateObj.getDate() ;		// 日
	var hour    = dateObj.getHours() ;		// 時
	var minute  = dateObj.getMinutes();	// 分
	var second  = dateObj.getSeconds(); // 秒
	var weekDay = weekDayList[dateObj.getDay()];	// 曜日
	// 表示用に組み立てる ( → xxxx年xx月xx日(xx) xx時xx分xx秒 )
	var datefm = year+"年"+month+"月"+date+"日"+"  "+"("+weekDay+")"+"  "+hour+"時"+minute+"分"+second+"秒";
	// HTML要素をObjec化する
	var timer =document.querySelector('#timer');
	// 組み立てた日付をObjectのinnerHTNMLプロパティに代入
	timer.innerHTML = datefm;
}
