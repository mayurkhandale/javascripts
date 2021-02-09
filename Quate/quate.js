var string_array=[
          "At the moment there was a lot of pressure to come up with a working prototype as soon-1",
          "as possible. The Java language, née Oak at the time, was starting to get traction. Sun-2",
          "Microsystems was making a big push for it and Netscape Communications was abo-3",
          "close a deal with them to make Java available in the browser. So why Mocha-4",
          "early name for JavaScript)? Why create a whole new language when there was an-5"
];

var i=0;
function displayarray(){
	setInterval(function(){
		if (i==string_array.length){
			i=0;
		}
		document.getElementById('string').innerHTML=string_array[i];
		i++;
	},1000)
}
displayarray()