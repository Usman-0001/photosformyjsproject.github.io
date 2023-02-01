const slides = document.querySelectorAll(".slide")

for (const slide of slides) {
	slide.addEventListener("click", () => {
		clearEffect()

		slide.classList.add("active")
	})
	
}

function clearEffect() {
	slides.forEach((slide) => {
		slide.classList.remove("active")
	})
}
