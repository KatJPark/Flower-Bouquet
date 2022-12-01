let Flower1
let Flower2
let Flower3
let Flower4
let Flower5
let Flower6
let Flower7
let Flower8
let Flower9
let Flower10
let Flower11
let Flower12
let Flower13
let Flower14
let Flower15
let Flower16
let Flower17
let Flower18
let Flower19
let Flower20
let Flower21
let Flower22
let Flower23

let flowerArray = []

function preload () {
	Flower1 = loadImage ("./flowers/Flower1.png")
	// Flower2 = loadImage ("./flowers/Flower2.png")
	// Flower3 = loadImage ("./flowers/Flower3.png")
	// Flower4 = loadImage ("./flowers/Flower4.png")
	Flower5 = loadImage ("./flowers/Flower5.png")
	Flower6 = loadImage ("./flowers/Flower6.png")
	// Flower7 = loadImage ("./flowers/Flower7.png")
	Flower8 = loadImage ("./flowers/Flower8.png")
	// Flower9 = loadImage ("./flowers/Flower9.png")
	Flower10 = loadImage ("./flowers/Flower10.png")
	Flower11 = loadImage ("./flowers/Flower11.png")
	Flower12 = loadImage ("./flowers/Flower12.png")
	Flower13 = loadImage ("./flowers/Flower13.png")
	// Flower14 = loadImage ("./flowers/Flower14.png")
	Flower15 = loadImage ("./flowers/Flower15.png")
	// Flower16 = loadImage ("./flowers/Flower16.png")
	// Flower17 = loadImage ("./flowers/Flower17.png")
	Flower18 = loadImage ("./flowers/Flower18.png")
	Flower19 = loadImage ("./flowers/Flower19.png")
	// Flower20 = loadImage ("./flowers/Flower20.png")
	// Flower21 = loadImage ("./flowers/Flower21.png")
	Flower22 = loadImage ("./flowers/Flower22.png")
	Flower23 = loadImage ("./flowers/Flower23.png")
}

// connects p5
const button1 = document.querySelector("#Flower1");
// const button2 = document.querySelector("#Flower2");
// const button3 = document.querySelector("#Flower3");
// const button4 = document.querySelector("#Flower4");
const button5 = document.querySelector("#Flower5");
const button6 = document.querySelector("#Flower6");
// const button7 = document.querySelector("#Flower7");
const button8 = document.querySelector("#Flower8");
// const button9 = document.querySelector("#Flower9");
const button10 = document.querySelector("#Flower10");
const button11 = document.querySelector("#Flower11");
const button12 = document.querySelector("#Flower12");
const button13 = document.querySelector("#Flower13");
// const button14 = document.querySelector("#Flower14");
const button15 = document.querySelector("#Flower15");
// const button16 = document.querySelector("#Flower16");
// const button17 = document.querySelector("#Flower17");
const button18 = document.querySelector("#Flower18");
const button19 = document.querySelector("#Flower19");
// const button20 = document.querySelector("#Flower20");
// const button21 = document.querySelector("#Flower21");
const button22 = document.querySelector("#Flower22");
const button23 = document.querySelector("#Flower23");

button1.addEventListener("click", addFlower1);
// button2.addEventListener("click", addFlower2);
// button3.addEventListener("click", addFlower3);
// button4.addEventListener("click", addFlower4);
button5.addEventListener("click", addFlower5);
button6.addEventListener("click", addFlower6);
// button7.addEventListener("click", addFlower7);
button8.addEventListener("click", addFlower8);
// button9.addEventListener("click", addFlower9);
button10.addEventListener("click", addFlower10);
button11.addEventListener("click", addFlower11);
button12.addEventListener("click", addFlower12);
button13.addEventListener("click", addFlower13);
// button14.addEventListener("click", addFlower14);
button15.addEventListener("click", addFlower15);
// button16.addEventListener("click", addFlower16);
// button17.addEventListener("click", addFlower17);
button18.addEventListener("click", addFlower18);
button19.addEventListener("click", addFlower19);
// button20.addEventListener("click", addFlower20);
// button21.addEventListener("click", addFlower21);
button22.addEventListener("click", addFlower22);
button23.addEventListener("click", addFlower23);

const container = document.querySelector("#canvas-container");

function setup() {
	console.log (image(Flower1, 0, 0))
	//Create the canvas and save it to a variable;
	const myCanvas = createCanvas(container.clientWidth, container.clientHeight);
	//Set the parent of the canvas to an exisitng html element's id value
	myCanvas.parent("canvas-container");
}

// DISPLAY AND INTERACTION FUNCTIONS
function draw() {
	background(255, 255, 255);
	for (let i = 0; i < flowerArray.length; i++) {
		flowerArray[i].display(mouseX, mouseY)
	}
}

function mousePressed() {
	for (i = 0; i < flowerArray.length; i++) {
		flowerArray[i].pressed(mouseX, mouseY);
	}
}

function mouseReleased() {
	for (i = 0; i < flowerArray.length; i++) {
		flowerArray[i].notPressed();
	}
}

function windowResized() {
	resizeCanvas(container.clientWidth, container.clientHeight);
}

//CLASS FOR FLOWER
class Flower {
	constructor(img, x, y, w, h) {
		this.x = x
		this.y = y
		this.w = w
		this.h = h
		this.offsetX = 0
		this.offsetY = 0
		this.dragging = false
		this.rollover = false
		this.img = img
	}
	display(px,py) {
		if (this.dragging) {
		this.x = px + this.offsetX
		this.y = py + this.offsetY
	}
	image(this.img, this.x, this.y, this.w, this.h)
}
pressed(px, py) {
	if (
		px > this.x &&
		px < this.x + this.w &&
		py > this.y &&
		py < this.y + this.h
	) {
		this.dragging =  true
		this.offsetX = this.x - px
		this.offsetY = this.y - py
	}
}

notPressed() {
		this.dragging = false
	}
}


// variable called submit is referring to something in HTML class called button
const submit = document.querySelector(".button");

// adding event listener to the "button"
submit.addEventListener("click", function () {
	// capture canvas (1. refer to canvas in HTML, 2. captures image in form of text 3. storing as a value in obj)
	const capture = document.querySelector("canvas")
	const imageData = capture.toDataURL("image/jpeg")
	const submit = document.querySelector("#message")
	const text = submit.value
	let obj = { image: imageData, message: text }

	// send to server (1. post data to a webpage 2. sending body (as JSON) 3. turning into JSON string)
	fetch("/submit", {
		method: "POST",
		headers: {
			"Content-Type": "application/json;charset=utf-8",
		},
		body: JSON.stringify(obj),
	})
		.then((response) => response.json)
		.then((res) => {
			fetch("/gallery")
				.then((response) => response.json())
				.then((data) => {
					const gallery = document.querySelector(".gallery");
					const p1 = document.querySelector(".page1")
					const p2 = document.querySelector(".page2")
					p1.style.display = "none"
					p2.style.display = "flex"
					for (let i = 0; i < data.data.length; i++) {
						const submission = document.createElement ("p")
						submission.innerHTML = data.data[i].message
						const imageElem = document.createElement("img")
						imageElem.src = data.data[i].image
						gallery.appendChild(imageElem)
						gallery.appendChild(submission)
					}
				})
		})
})
console.log (button1)

function addFlower1 () {
	flowerArray.push (new Flower (Flower1, random(width), random(height), 90, 90))
}

function addFlower2 () {
	flowerArray.push (new Flower (Flower2, random(width), random(height), 90, 90))
}

function addFlower3 () {
	flowerArray.push (new Flower (Flower3, random(width), random(height), 90, 90))
}

function addFlower4 () {
	flowerArray.push (new Flower (Flower4, random(width), random(height), 90, 90))
}

function addFlower5 () {
	flowerArray.push (new Flower (Flower5, random(width), random(height), 90, 90))
}

function addFlower6 () {
	flowerArray.push (new Flower (Flower6, random(width), random(height), 90, 90))
}

function addFlower7 () {
	flowerArray.push (new Flower (Flower7, random(width), random(height), 90, 90))
}

function addFlower8 () {
	flowerArray.push (new Flower (Flower8, random(width), random(height), 90, 90))
}

function addFlower9 () {
	flowerArray.push (new Flower (Flower9, random(width), random(height), 90, 90))
}

function addFlower10 () {
	flowerArray.push (new Flower (Flower10, random(width), random(height), 90, 90))
}

function addFlower11 () {
	flowerArray.push (new Flower (Flower11, random(width), random(height), 90, 90))
}

function addFlower12 () {
	flowerArray.push (new Flower (Flower12, random(width), random(height), 90, 90))
}

function addFlower13 () {
	flowerArray.push (new Flower (Flower13, random(width), random(height), 90, 90))
}

function addFlower14 () {
	flowerArray.push (new Flower (Flower14, random(width), random(height), 90, 90))
}

function addFlower15 () {
	flowerArray.push (new Flower (Flower15, random(width), random(height), 90, 90))
}

function addFlower16 () {
	flowerArray.push (new Flower (Flower16, random(width), random(height), 90, 90))
}

function addFlower17 () {
	flowerArray.push (new Flower (Flower17, random(width), random(height), 90, 90))
}

function addFlower18 () {
	flowerArray.push (new Flower (Flower18, random(width), random(height), 90, 90))
}

function addFlower19 () {
	flowerArray.push (new Flower (Flower19, random(width), random(height), 90, 90))
}

function addFlower20 () {
	flowerArray.push (new Flower (Flower20, random(width), random(height), 90, 90))
}

function addFlower21 () {
	flowerArray.push (new Flower (Flower21, random(width), random(height), 90, 90))
}

function addFlower22 () {
	flowerArray.push (new Flower (Flower22, random(width), random(height), 90, 90))
}

function addFlower23 () {
	flowerArray.push (new Flower (Flower23, random(width), random(height), 90, 90))
}