! function(e) {
    "use strict";
    e(window).on("load", function() {
        e(".corporex-preloader").length > 0 && e(".corporex-preloader").fadeOut("slow")
    }), e("#corporex-slider .slider-bg").each(function() {
        var o = e(this).attr("src");
        e(this).parents(".item").css("background-image", "url(" + o + ")"), e(this).remove()
    }), e("#testimonial-carousel").slick({
        infinite: !0,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: "<div class='slick-btn prev-btn'><i class='fa fa-angle-left'></i></div>",
        nextArrow: "<div class='slick-btn next-btn'><i class='fa fa-angle-right'></i></div>",
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 768,
            settings: {
                arrows: !1,
                slidesToShow: 1
            }
        }]
    }), e("#testimonial-carousel-02").slick({
        arrows: !1,
        dots: !0,
        infinite: !0,
        slidesToShow: 1,
        slidesToScroll: 1
    }), e(".portfolio-popup").magnificPopup({
        type: "image"
    }), e(".gallery-img").magnificPopup({
        type: "image",
        removalDelay: 300,
        gallery: {
            enabled: !0
        }
    }), e(".tweet-carousel").slick({
        arrows: !1,
        dots: !0,
        infinite: !0,
        slidesToShow: 1,
        slidesToScroll: 1
    }), e(document).ready(function() {
        e("ul.dropdown-menu [data-toggle=dropdown]").on("click", function(o) {
            o.preventDefault(), o.stopPropagation(), e(this).parent().siblings().removeClass("open"), e(this).parent().toggleClass("open")
        })
    }), e(document).ready(function() {
        e(".panel-collapse").on("show.bs.collapse", function() {
            e(this).siblings(".panel-heading").addClass("active")
        }), e(".panel-collapse").on("hide.bs.collapse", function() {
            e(this).siblings(".panel-heading").removeClass("active")
        })
    }), e(".team-carousel").slick({
        arrows: !1,
        dots: !0,
        infinite: !0,
        slidesToShow: 4,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 768,
            settings: {
                arrows: !1,
                slidesToShow: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: !1,
                slidesToShow: 1
            }
        }]
    }), e(".partner-carousel").slick({
        arrows: !1,
        dots: !1,
        autoplay: !0,
        infinite: !0,
        slidesToShow: 4,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 768,
            settings: {
                arrows: !1,
                slidesToShow: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: !1,
                slidesToShow: 1
            }
        }]
    }), e(document).ready(function() {
        e('[data-toggle="tooltip"]').tooltip()
    }), e(document).ready(function() {
        e('[data-toggle="popover"]').popover()
    }), e('a[data-toggle="popover"]').click(function(e) {
        e.preventDefault()
    }), e(function() {
        e(".chart-01").easyPieChart({
            size: 180,
            lineWidth: 7,
            barColor: "#ff5134",
            trackColor: "#f1f1f1",
            scaleColor: !1
        }), e(".chart-02").easyPieChart({
            size: 180,
            lineWidth: 2,
            barColor: "#ff5134",
            trackColor: "#f1f1f1",
            scaleColor: !1
        }), e(".chart-03").easyPieChart({
            size: 180,
            lineWidth: 12,
            barColor: "#ff5134",
            trackColor: "#f1f1f1",
            scaleColor: !1
        })
    }), e(".widget-content-slider .slider-wrapper").slick({
        arrows: !1,
        dots: !0,
        infinite: !0,
        slidesToShow: 1,
        slidesToScroll: 1
    }), e(".widget-image-slider .image-slider-wrapper").slick({
        arrows: !1,
        dots: !0,
        infinite: !0,
        slidesToShow: 1,
        slidesToScroll: 1
    }), e(".widget-testimonial .testimonial-wrapper").slick({
        arrows: !0,
        dots: !1,
        infinite: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<div class='slick-btn prev-btn'><i class='fa fa-chevron-left'></i></div>",
        nextArrow: "<div class='slick-btn next-btn'><i class='fa fa-chevron-right'></i></div>"
    });
    var o = document.querySelector(".portfolio-container");
    o && mixitup(o), e(".counter").length && e(".counter").counterUp({
        time: 2e3
    }), e(".anim-progress").length && e(".anim-progress").waypoint({
        handler: function(o) {
            e(".progress .progress-bar").css("width", function() {
                return e(this).attr("aria-valuenow") + "%"
            }), e(".anim-progress").hasClass("progress-01") && e(".anim-progress").find("span").css("opacity", "1")
        },
        offset: "600px"
    })
}(jQuery);