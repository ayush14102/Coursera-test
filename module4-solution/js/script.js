/***Module4-solution***/


var names = ["Yaakov", "John", " Jen","Jason","Paul","Frank","Larry","Paula","Laura","Jim"];
// console.log(names);

for (var i = 0; i < names.length; i++) {
	if (names[i][0]=='j' || names[i][0]=='J'){
	console.log("Good Bye " +names[i]);	
	}
	else{
		console.log("Hello " +names[i]);
	}
	
}