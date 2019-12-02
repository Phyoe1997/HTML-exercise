window.addEventListener('DOMContentLoaded',
					   function(){
	var str='こんにちは、JavaScript!';
	console.log(str);
	var result = document.querySelector('#result');
	result.innerHTML=str;
	result.style.color ='red';
	
	var reset = document.querySelector('[type ="reset"]');
	reset.addEventListener('click',
						 function(){
		result.innerHTML = '';
	},false
						 );
},false
					   );