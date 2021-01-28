$('.owl-main').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    stagePadding: 0,
    navigation: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        },
        1440: {
            items: 1
        }
    }
})

$('.owl-car').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplaySpeed: 2000,
    stagePadding: 0,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        },
        1440: {
            items: 4
        }
    }
})
$('.owl-car-pro').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplaySpeed: 2000,
    stagePadding: 0,
    navigation: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        },
        1339: {
            items: 3
        }
    }
})