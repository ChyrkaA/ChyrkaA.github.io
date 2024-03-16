"use strict";

window.addEventListener("DOMContentLoaded", () => {
	const overlay = document.querySelector(".overlay");
	const modalBig = document.querySelector(".modal_big");
	const modalMini = document.querySelector(".modal_mini");

	function action(action) {
		window.addEventListener(action, (e) => {
			if (e.target.classList.contains("button")) {
				overlay.classList.add("overlay__active");
				modalBig.classList.add("modal__active");
			} else if (
				e.target.classList.contains("modal__close") ||
				e.target.classList.contains("overlay")
			) {
				overlay.classList.remove("overlay__active");
				modalBig.classList.remove("modal__active");
				modalMini.classList.remove("modal__active");
			}
		});
	}
	action("click");
	action("touchend");

	const forms = document.querySelectorAll("form");
	forms.forEach((form) => {
		form.addEventListener("submit", function (e) {
			e.preventDefault();

			fetch("mailer/smart.php", {
				method: "POST",
				body: new FormData(this),
			})
				.then(function (response) {
					if (response.ok) {
						form.querySelectorAll("input").forEach((input) => {
							input.value = "";
						});
						modalBig.classList.remove("modal__active");
						overlay.classList.add("overlay__active");
						modalMini.classList.add("modal__active");

						setTimeout(function () {
							overlay.classList.remove("overlay__active");
							modalMini.classList.remove("modal__active");
						}, 5000);

						form.reset();
					}
				})
				.catch((error) => {
					console.log("Error:", error);
				});

			return false;
		});
	});
});
