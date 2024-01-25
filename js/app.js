(function($) { "use strict";

	//Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px",
		t.style.top = n.clientY + "px",
		e.style.left = n.clientX + "px",
		e.style.top = n.clientY + "px",
		i.style.left = n.clientX + "px",
		i.style.top = n.clientY + "px"
    });
    let t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (let r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }


	//About page

	$(".about-text").on('click', function () {
		$("body").addClass("about-on");
	});
	$(".about-close").on('click', function () {
		$("body").removeClass("about-on");
	});


	//Contact page

	$(".contact-text").on('click', function () {
		$("body").addClass("contact-on");
	});
	$(".contact-close").on('click', function () {
		$("body").removeClass("contact-on");
	});


	//Travel portfolio page

	$(".projects").on('click', function () {
		$("body").addClass("projects-on");
	});
	$(".projects-close").on('click', function () {
		$("body").removeClass("projects-on");
	});

})(jQuery);

function handleMouseMove(event, card) {
    const width = card.offsetWidth;
    const height = card.offsetHeight;
    let mouseX, mouseY;

    if (event.touches) {
        // For touch devices
        mouseX = event.touches[0].pageX - card.offsetLeft - width / 2;
        mouseY = event.touches[0].pageY - card.offsetTop - height / 2;
    } else {
        // For other devices
        mouseX = event.pageX - card.offsetLeft - width / 2;
        mouseY = event.pageY - card.offsetTop - height / 2;
    }

    const mousePX = mouseX / width;
    const mousePY = mouseY / height;

    const rX = mousePX * 20;
    const rY = mousePY * -20;

    card.style.transform = `rotateY(${rX}deg) rotateX(${rY}deg)`;

    const tX = mousePX * -30;
    const tY = mousePY * -30;

    card.querySelector('.card-bg').style.transform = `translateX(${tX}px) translateY(${tY}px)`;
}

function handleMouseEnter(card) {
    clearTimeout(card.mouseLeaveDelay);
}

function handleMouseLeave(card) {
    card.mouseLeaveDelay = setTimeout(() => {
        card.style.transform = 'rotateY(0deg) rotateX(0deg)';
        card.querySelector('.card-bg').style.transform = 'translateX(0) translateY(0)';
    }, 1000);
}

document.querySelectorAll('.card-wrap').forEach((card) => {
    card.addEventListener('mousemove', (event) => handleMouseMove(event, card));
    card.addEventListener('mouseenter', () => handleMouseEnter(card));
    card.addEventListener('mouseleave', () => handleMouseLeave(card));

    // Add touch event listeners for mobile devices
    card.addEventListener('touchmove', (event) => handleMouseMove(event, card), { passive: false });
    card.addEventListener('touchstart', () => handleMouseEnter(card), { passive: false });
    card.addEventListener('touchend', () => handleMouseLeave(card), { passive: false });
});

  // JavaScript to initialize lazy loading using Intersection Observer
document.addEventListener("DOMContentLoaded", function () {
    let lazyImages = document.querySelectorAll('.lazy-load');

    let observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                let lazyImage = entry.target;

                // Create a new image element
                let newImage = new Image();
                // Set the source to the data-src
                newImage.src = lazyImage.dataset.src;
                // Add a load event listener
                newImage.addEventListener('load', function () {
                    // Once the image is loaded, replace the placeholder with the new image
                    lazyImage.src = newImage.src;
                    observer.unobserve(lazyImage);
                });
            }
        });
    });

    lazyImages.forEach(function (lazyImage) {
        observer.observe(lazyImage);
    });
});
