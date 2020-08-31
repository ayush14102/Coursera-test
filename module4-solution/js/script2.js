(function (window) {
	var Mayurigreeter = {};
	Mayurigreeter.name = "Mayuri";
	var greeting = "Hii ";
	Mayurigreeter.sayhi 	= function (){
	console.log(greeting +Mayurigreeter.name);
	}
	
	window.Mayurigreeter = Mayurigreeter;
})(window);


