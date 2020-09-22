// (function (global){
// 	var ajaxUtils = {};

// 	function getRequestedObject() {
// 		if(window.XMLHttpRequest){
// 			return (new XMLHttpRequest());
// 		}
// 		else if(window.ActiveXObject){
// 			return (new ActiveXObject("Microsoft.XMLHTTP"));
// 		}
// 		else{
// 			global.alert("Ajax is not supported!");
// 			return(null);
// 		}
// 	}

// 	// var request = getRequestedObject();
// 	// var myhandler = null;
// 	//myhandler = responseHandler;

// 	//makes an Ajax GET Request to requestUrl
// 	ajaxUtils.sendGetRequest = function (requestUrl, responseHandler) {
// 		var request = getRequestedObject();	
// 		request.onreadystatechange = function () {
// 			handleResponse(request, responseHandler);
// 		};
// 		request.open("GET",requestUrl, true);
// 		request.send();
		
// 	};

// 	//only class user provided 'responseHandler'
// 	//function if response is ready
// 	//and not an error
// 	function handleResponse(request, responseHandler) {
// 		if((request.readyState == 4) && (request.status == 200)){
// 			responseHandler(request);
// 			console.log(request.responseText);
// 		}
// 	}

// 	global.$ajaxUtils = ajaxUtils;


(function (global) {

// Set up a namespace for our utility
var ajaxUtils = {};


// Returns an HTTP request object
function getRequestObject() {
  if (global.XMLHttpRequest) {
    return (new XMLHttpRequest());
  } 
  else if (global.ActiveXObject) {
    // For very old IE browsers (optional)
    return (new ActiveXObject("Microsoft.XMLHTTP"));
  } 
  else {
    global.alert("Ajax is not supported!");
    return(null); 
  }
}


// Makes an Ajax GET request to 'requestUrl'
ajaxUtils.sendGetRequest = 
  function(requestUrl, responseHandler, isJsonResponse) {
    var request = getRequestObject();
    request.onreadystatechange = 
      function() { 
        handleResponse(request, 
                       responseHandler,
                       isJsonResponse); 
      };
    request.open("GET", requestUrl, true);
    request.send(null); // for POST only
  };


// Only calls user provided 'responseHandler'
// function if response is ready
// and not an error
function handleResponse(request,
                        responseHandler,
                        isJsonResponse) {
  if ((request.readyState == 4) &&
     (request.status == 200)) {

    // Default to isJsonResponse = true
    if (isJsonResponse == undefined) {
      isJsonResponse = true;
    }

    if (isJsonResponse) {
      responseHandler(JSON.parse(request.responseText));
    }
    else {
      responseHandler(request.responseText);
    }
  }
}


// Expose utility to the global object
global.$ajaxUtils = ajaxUtils;


})(window);
//   // var xhttp;
//   // 		if (window.XMLHttpRequest) {
//   //   		// code for modern browsers
//   //   		xhttp = new XMLHttpRequest();
//   // 		} else {
//   //   		// code for IE6, IE5
//   //   		xhttp = new ActiveXObject("Microsoft.XMLHTTP");
//   // 		}
//   // 		xhttp.onreadystatechange = function() {
//   //   		if (this.readyState == 4 && this.status == 200) {
//   //     		document.getElementById("content").innerHTML ="<h2>Hello " +this.responseText +"!";
//   //   		}
//   // 		};
//   // 			xhttp.open("GET", "name.txt", true);
//   // 			xhttp.send();
//  }(window));