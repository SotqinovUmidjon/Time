const one = document.querySelector(".one")
	const two = document.querySelector(".two")
	const three = document.querySelector(".three")
	const uzb = document.querySelector(".uzb")
setInterval(()=>{
		const date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

	one.innerHTML=hours<10 ? `0${hours}`: hours
	two.innerHTML=minutes<10 ? `0${minutes}`: minutes
	three.innerHTML=seconds<10 ? `0${seconds}`: seconds
}, 1000)
	
setInterval(()=>{
		const date = new Date
	  uzb.textContent=date
},1000)