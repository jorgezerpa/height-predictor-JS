if (!navigator.mediaDevices){
  alert("Sorry, getUserMedia is not supported");
}

function main(){
	window.addEventListener("deviceorientation", onOrientationChange);

	navigator.mediaDevices.getUserMedia({video:{
		facingMode:'environment'
	}})
		.then((signal)=>{
			const video=document.getElementById('my_video');
			video.srcObject=signal;
			video.play();
		})
		.catch(err=>alert(err));
}



function onOrientationChange(event){
	let angle = event.beta-90;
	if(angle<0){
		angle=0;
	}

	const distanceToObject= document.getElementById('my_distance').value;
	console.log(distanceToObject);
	document.getElementById('show_my_distance').innerHTML= 
				"distance to object:"+distanceToObject+"meters";


	const height= Math.tan(angle*Math.PI/180)*distanceToObject;

	document.getElementById("heightInfo").innerHTML=
		height.toFixed(1)+"m ("+ angle.toFixed(1)+"&deg)";

}