const slides = [
	{
		"image": "./assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "./assets/images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "./assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "./assets/images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let arrowLeft = document.getElementById("arrowLeft");
arrowLeft.addEventListener("click", function () {
	changerBulletgauche()
});

let arrowRight = document.getElementById("arrowRight");
arrowRight.addEventListener("click", function () {
	changerBulletdroite()
});

let slidesLength = slides.length - 1

let i = 0
while (i < slidesLength) {

	let i2 = i + 2
	let divDots = `<div id="${i2}" class="dot"></div>`
	let dot = document.querySelector(".dots")
	dot.innerHTML += divDots

	i++
}
function changerTagline() {
	let txtTagline1 = `<p>${elementSlide.tagLine}</span></p>`;
	let main1 = document.querySelector("#banner p")
	main1.innerHTML = txtTagline1

}
function removeClass(ident) {
	let baliseBullet = document.getElementById(ident);
	baliseBullet.classList.remove("dot_selected")
}
function addClass(ident) {
	baliseBullet2 = document.getElementById(ident);
	baliseBullet2.classList.add("dot_selected")

}
function changerImg(ident) {
	elementSlide = slides[ident];
	let baliseImage5 = document.getElementById("banner-img");
	baliseImage5.src = elementSlide.image;

}
function changerBulletgauche() {

	element = document.querySelector(".dot_selected");
	switchBullet = element.id

	switch (switchBullet) {
		case "4":
			removeClass(4)
			addClass(3)
			changerImg(2)
			changerTagline()
			break

		case "1":
			removeClass(1)
			addClass(4)
			changerImg(3)
			changerTagline()
			break

		case "2":

			removeClass(2)
			addClass(1)
			changerImg(0)
			changerTagline()
			break

		case "3":

			removeClass(3)
			addClass(2)
			changerImg(1)
			changerTagline()
			break

	}

}
function changerBulletdroite() {

	element = document.querySelector(".dot_selected");
	switchBullet = element.id
	switch (switchBullet) {
		case "4":
			removeClass(4)
			addClass(1)
			changerImg(0)
			changerTagline()
			break

		case "1":
			removeClass(1)
			addClass(2)
			changerImg(1)
			changerTagline()
			break

		case "2":
			removeClass(2)
			addClass(3)
			changerImg(2)
			changerTagline()
			break

		case "3":
			removeClass(3)
			addClass(4)
			changerImg(3)
			changerTagline()
			break

	}

}

