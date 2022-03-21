let sprite = document.getElementById("Buch");
let framesLenght = 5;
let width = sprite.clientWidth/framesLenght;
let framesPos = divide()
let frame = -1

function divide() {
	let framesPos = []
	for (i= 0; i <= framesLenght; i++) {
		framesPos.push(i*width)
	}
	return framesPos;
}

setInterval(animate, 80)

function animate(){
	frame += 1
	frame >= framesLenght-1 ? frame = -1 : sprite.style.objectPosition = `-${framesPos[frame]}px`;
}

