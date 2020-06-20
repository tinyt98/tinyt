$(function () {
    $('.login-close').on('click', function () {
        $('#myModal').modal('hide')

    });
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
        pagination: {
            el: '.swiper-pagination',
            // dynamicBullets: true,
            autoplay: true,
        },
    })
    var mySwiper2 = new Swiper('.swiper-container2', {
        slidesPerView: 1,
        spaceBetween: 40,
    })
})
