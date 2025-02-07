function volume_sphere() {
    //Write your code here
document.EveventListner("DOMContent", () => 
	let radiusInput = document.ElementById("radius");
	let volumeOutput = document.ElementById("volume");

	let radius = parseFloat(radiusInput.value);
	if(isNaN(radius) || radius < 0){
		volumeOutput.value = "NaN";	
		return;
	let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  volumeOutput.value = volume.toFixed(4);
	}
	
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("calculate").addEventListener("click", (event) => {
    event.preventDefault();
    volume_sphere();
  });
});

	
	
})



	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
