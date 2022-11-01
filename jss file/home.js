const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');


if(bar){
	bae.addEventlistener('click',()=>{
		nav.classlist.add('active');
	})
}

if(close){
	close.addEventlistener('click',()=>{
		nav.classlist.remove('active');
	})
}document.write("naveen");
