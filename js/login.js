window.addEventListener('DOMContentLoaded',function(){
	var roll = document.querySelector('#roll');
	var pass = document.querySelector('#pass');
	var submit = document.querySelector('#submit');
	var reset = document.querySelector('#reset');
	
	submit.addEventListener('click',
						   function(e){
		e.preventDefault();
		if(roll.value==''||pass.value==''){
			window.alert('nothing here');
		}else if(roll.validity.valid===false||pass.validity.valid===false){
			window.alert('wrong');
		}
	},false)
})