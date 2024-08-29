$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Back-end Developer", "Front-end Developer", "UI/UX desinger"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Back-end Developer", "Front-end Developer", "UI/UX desinger"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

//product preview
let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .btn-ex').forEach(product => {
    product.onclick = () => {
        preveiwContainer.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active');
            }
        });
    };
});

previewBox.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
        close.classList.remove('active');
        preveiwContainer.style.display = 'none';
    };
});



document.addEventListener('DOMContentLoaded', () => {
    const progressBars = [
        { element: document.querySelector('.circular-progress1'), endValue: 80 },
        { element: document.querySelector('.circular-progress2'), endValue: 90 },
        { element: document.querySelector('.circular-progress3'), endValue: 60 },
        { element: document.querySelector('.circular-progress4'), endValue: 75 },
        { element: document.querySelector('.circular-progress5'), endValue: 40 },
        { element: document.querySelector('.circular-progress6'), endValue: 75 }
    ];

    progressBars.forEach(progressBar => {
        const { element, endValue } = progressBar;
        const valueContainer = element.querySelector('.value-container');

        let progressValue = 0;
        let speed = 30;

        let interval = setInterval(() => {
            progressValue++;
            valueContainer.textContent = `${progressValue}%`;
            element.style.background = `conic-gradient(
            #dc143c ${progressValue * 3.6}deg,
            #cccccc ${progressValue * 3.6}deg
        )`;
            if (progressValue === endValue) {
                clearInterval(interval);
            }
        }, speed);
    });
});
