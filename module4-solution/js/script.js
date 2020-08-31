// // /*ARRAY*/

// // var array = new Array();
// // array[0] = "Ayush";
// // array[1] = 9;
// // array[2] = function (name) {
// // 	console.log("Hello " +name);
// // };
// // array[3] = {course: "Html,CSS & JavaScript"}

// // console.log(array)
// // array[2](array[0]);
// // console.log(array[3].course);

// /*Short hand array creation */
var names = ["Ayush", "Mayuri", "Dhrumil","jainil"];
// console.log(names);

for (var i = 0; i < names.length; i++) {
	if (names[i][0]=='j' || names[i][0]=='J'){
	console.log("GoodBye " +names[i]);	
	}
	else{
		console.log("Hello " +names[i]);
	}
	
}

// names[100] = "jim";
// for (var i = 0; i < names.length; i++) {
// 	if (names[i]=='j' || names[i]=='J'){
// 	console.log("Bye Bye " +names[i]);	
// 	}
// 	else{
// 		console.log("Hello " +names[i]);
// 	}
	
// }

// var names = ["Ayush", "Mayuri", "Dhrumil","jainil"];

// for (var name in names){
// 	console.log("Hello " +names[name]);
// }

// names.gretting = "hii";
// for (var name in names){
// 	console.log(name+ "Hello " +names[name]);
// }

// var obj = {
// 	name:"Ayush",
// 	course: "Html, CSS & JavaScript",
// 	platform: "Coursera"
// };
// for (var prop in obj){
// 	console.log(prop + ": " +obj[prop]);
// }

// names[100] = 'joe';
// for (var prop in names){
// 	if (names[prop][0]=='j' || names[prop][0]=='J'){
// 		console.log("Goodbye " +names[prop]);
// 	}
// 	else{
// 		console.log("Hello " +names[prop]);
// 	}
// }

/***CLouser***/
// function makeMultiplier (multiplier){

// 	function b() {
// 		console.log("multiplier is " +multiplier);
// 	}
// 	b();

// 	return (
// 		function (x){
// 			return multiplier * x;
// 		}
// 	);
// }

// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(10));

/***Fake NameSpace***/
// (function (window) {
// 	var Ayushgreeter = {};
// 	Ayushgreeter.name = "Ayush";
// 	var greeting = "Hello ";
// 	Ayushgreeter.sayhello 	= function (){
// 	console.log(greeting +Ayushgreeter.name);
// 	}

// 	window.Ayushgreeter = Ayushgreeter;
// })(window);





