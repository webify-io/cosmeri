/* ======================= MENU SHOW Y HIDDEN ====================== */
const menu = document.getElementById('menu-btn');
const navbar = document.getElementById('nav-menu');
/* const navToggle = document.getElementById('menu-btn'); */
/* 	navClose = document.getElementById('nav-close'); */

menu.onclick = () => {
	menu.classList.toggle('fa-times');
	navbar.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('fa-times');
	navbar.classList.remove('active');
};
/* ========== MENU SHOW ========== */
/* = Validate if constant exists = */
/* if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.toggle('show-menu');
	});
} */

/* ====================== REMOVE MENU MOBILE ======================= */
const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
	const navMenu = document.getElementById('nav-menu');
	// When we click on each nav-link, we remove the show-menu class
	navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

/* ================== CHANGE ACTIVE LINK COLOR ==================== */
const linkColor = document.querySelectorAll('.nav-link');

function colorLink() {
	if (linkColor) {
		linkColor.forEach((L) => L.classList.remove('active-link'));
		this.classList.add('active-link');
	}
}
linkColor.forEach((L) => L.addEventListener('click', colorLink));

/* ================= SCROLL SECTIONS ACTIVE LINK =================== */
document.addEventListener('DOMContentLoaded', function () {
	const sections = document.querySelectorAll('section'); // Get all sections
	const navLinks = document.querySelectorAll('.nav-link'); // Get all navigation links

	// Function to update active link based on scroll position
	function updateActiveLink() {
		const currentScroll = window.scrollY;

		sections.forEach((section) => {
			const sectionTop = section.offsetTop - 560;
			const sectionHeight = section.offsetHeight;
			const sectionId = section.getAttribute('id');

			if (
				currentScroll >= sectionTop &&
				currentScroll < sectionTop + sectionHeight
			) {
				// Remove active class from all links
				navLinks.forEach((link) => {
					link.classList.remove('active-link');
				});

				// Add active class to the corresponding link
				const activeLink = document.querySelector(
					`.nav-link[href="#${sectionId}"]`
				);
				if (activeLink) {
					activeLink.classList.add('active-link');
				}
			}
		});
	}

	// Call the function on initial load and scroll
	updateActiveLink();
	window.addEventListener('scroll', updateActiveLink);
});

/* =================== REMOVE THE HEADER ON SCROLL ================== */

window.addEventListener('scroll', function () {
	var header = document.querySelector('.header');

	if (window.scrollY > 200) {
		header.classList.add('scroll-header');
	} else {
		header.classList.remove('scroll-header');
	}
});
/* function scrollHeader() {
	const scrollHeader = document.getElementById('header');
	if (this.scrollY >= 200) {
		scrollHeader.classList.add('scroll-header');
	} else {
		scrollHeader.classList.remove('scroll-header');
	}
}
window.addEventListener('scroll', scrollHeader); */

/* ======================= SHOW SCROLL TOP ========================= */
function scrollUp() {
	const scrollUp = document.getElementById('scroll-up');

	// Add an event listener for the scroll event
	window.addEventListener('scroll', () => {
		// Check if the scroll position is greater than or equal to 560 viewport height
		if (window.scrollY >= 200) {
			scrollUp.classList.add('show-scroll');
			// Hide the element after 3 seconds (adjust the delay as needed)
			/* setTimeout(() => {
				scrollUp.classList.remove('show-scroll');
			}, 5000);  */ // 5000 milliseconds = 3 seconds
		} else {
			scrollUp.classList.remove('show-scroll');
		}
	});
}

// Call the scrollUp function
scrollUp();

/* ======================= MOUSE CURSOR CHANGE ========================= */
