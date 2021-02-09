var random_String=[
        "At the moment there was a lot of pressure to come up with a working prototype as soon-1",
         "as possible. The Java language, née Oak at the time, was starting to get traction. Sun-2",
         "Microsystems was making a big push for it and Netscape Communications was abo-3",
         "close a deal with them to make Java available in the browser. So why Mocha-4",
         "early name for JavaScript)? Why create a whole new language when there was an-5"
]


var i=0;
function randomarray(){
	setInterval(function(){
		// if (i==random_String.length){
		// 	i=0;
		// }
	   var num=random_String[ Math.floor(Math.random() * random_String.length)];
		// document.getElementById('string').innerHTML=num;
		// i++;
		//var rdm_string = random_String[Math.floor(Math.random()*random_String.length)]

		document.getElementById('string').innerHTML=num
	},1000)
}
randomarray()