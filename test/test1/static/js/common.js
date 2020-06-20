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
        breakpoints: {
            320: {  //当屏幕宽度大于等于320
                slidesPerView: 2,
                spaceBetween: 10
            },
            768: {  //当屏幕宽度大于等于768 
                slidesPerView: 3,
                spaceBetween: 20
            },
            1280: {  //当屏幕宽度大于等于1280
                slidesPerView: 4,
                spaceBetween: 30
            }
        }
})})
