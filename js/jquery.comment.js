// 文字效果
(function() {
    var n = document.getElementsByClassName("txtwav");
    for (var e = 0, t = n.length; e < t; e++) {
        var a = n[e]
          , r = a.textContent.trim();
        a.innerHTML = null;
        i(a, r)
    }
    function i(n, e) {
        for (var t in e) {
            var a = document.createElement("span");
            a.innerHTML = e[t] === " " ? "&nbsp;" : e[t];
            n.appendChild(a)
        }
    }
})();

function audioAutoPlay(id){
    var audio = document.getElementById(id),
        play = function(){
            audio.play();
            document.removeEventListener("touchstart",play, false);
        };
    audio.play();
    document.addEventListener("WeixinJSBridgeReady", function () {
        play();
    }, false);
    document.addEventListener('YixinJSBridgeReady', function() {
        play();
    }, false);
    document.addEventListener("touchstart",play, false);
}

var audio = document.getElementById('audio') ;
audio.pause();

var CDN_URL = '';
var load_img = [];
load_img.push(CDN_URL + 'img/page1_envelope.png');
load_img.push(CDN_URL + 'img/time.png');
load_img.push(CDN_URL + 'img/page2_pho2.png');
load_img.push(CDN_URL + 'img/page1_background.png');
load_img.push(CDN_URL + 'img/page2_pho.png');
load_img.push(CDN_URL + 'img/page1_pho2.png');
load_img.push(CDN_URL + 'music.mp3');
load_img.push(CDN_URL + 'img/page1_pho.png');
load_img.push(CDN_URL + 'img/page1_pho1.png');
load_img.push(CDN_URL + 'img/page4_pho2.png');
load_img.push(CDN_URL + 'img/page2_pho3.png');
load_img.push(CDN_URL + 'img/letter_top1.png');
load_img.push(CDN_URL + 'img/page2_pho5.png');
load_img.push(CDN_URL + 'img/letter_bottom.png');
load_img.push(CDN_URL + 'img/letter.png');
load_img.push(CDN_URL + 'img/page2_pho4.png');
load_img.push(CDN_URL + 'img/page3_pho2.png');
load_img.push(CDN_URL + 'img/page1_imgbox.png');
load_img.push(CDN_URL + 'img/letter_background.png');
load_img.push(CDN_URL + 'img/letter_top2.png');
load_img.push(CDN_URL + 'img/btn.png');
load_img.push(CDN_URL + 'img/page1_imgcover.png');
load_img.push(CDN_URL + 'img/page5_title.png');



var load_img_progress = 0;
var load_img_total = load_img.length;
function loading() {
    jQuery.imgpreload(load_img, {
        each: function () {
            // var status = $(this).data('loaded') ? 'success' : 'error';

            // if (status == 'success') {
            //     load_img_progress++;
            //     var percent = Math.ceil(load_img_progress / load_img_total * 100);
            //     $('.loadingbox').html(percent + '%');
            // }
        },
        all: function () {
            $(".loading").addClass("hide");
            $(".swiper-container").removeClass("hidden");
            audioAutoPlay('audio');
        }
    });
}

loading();

function playOrPaused(obj){
    // alert(audio.paused);
    if(audio.paused){
        audio.play();
        obj.innerHTML='<img src="img/play.png">';
        return;
    }
    audio.pause();
    // alert(audio.paused);
    obj.innerHTML='<img src="img/over.png">';
}


$(".img_btn").click(function(){
    $('#content').animate({
        top:"78vh",
    });
    setTimeout(function(){$(".letter_top").addClass('letter_anim');$(".page0_bottom").css({"z-index":5,})},(2000));
    $(".letter_cont").addClass("letter_contanim");
    $(".page0").removeClass("stop-swiping");
});
$('.open').click(function(){
    $('.swiper-wrapper').css({
         "transform": "translate3d(0px,"+ $(document).height +"px, 0px)",
    })
})
$(".share_btn").click(function(){
    $(".share_box").removeClass("hide");
});
$(".cover,.share_img img").click(function(){
    $(".share_box").addClass("hide")
})
var swiper = new Swiper('.swiper-container2', {
     direction:'horizontal',
     // pagination: '.swiper-pagination',
     slidesPerView: 'auto',
     // paginationClickable: true,
     spaceBetween: 30,
     parallax: true,
     // freeMode: true,
     autoplay:1000,
     speed:1000,
     // autoplayDisableOnInteraction: false,
     autoplayStopOnLast : true,
     onSlideChangeEnd: function(swiper){
        swipe2_index = swiper.activeIndex;
       ((swiper.activeIndex) > 4) ? $(".page7-3").hide() : $(".page7-3").show();//
     }
 });
 var mySwiper = new Swiper('.swiper-container',{
        direction: 'vertical',
        onInit:function(swiper, direction) {
          var index = swiper.activeIndex;
          var height = $(window).innerHeight();
          var obj = $(".swiper-slide");
          obj.not(".swiper-slide-visible").find(".lagou").addClass('hide');
          obj.eq(index).find(".lagou").removeClass("hide");
      },
        noSwiping : true,
        noSwipingClass : 'stop-swiping',
        onSlideChangeEnd:function(swiper, direction) {
          var index = swiper.activeIndex;
          var obj = $(".swiper-slide");
          //companyHeightReset();
          obj.not(".swiper-slide-visible").find(".lagou").addClass('hide');

          // $(".swiper-slide-visible").find(".lagou").removeClass("hide");
          obj.eq(index).siblings().find(".lagou").addClass('hide');
          obj.eq(index).find(".lagou").removeClass("hide");
          $(".swiper-slide-active").children(".lagou").removeClass("hide");
      }
 });


var clipPath = function(t) {
    if (!t) {
        return false
    }
    t.removeAttribute("id");
    var r = {
        height: t.clientHeight,
        width: t.clientWidth,
        distance: 60,
        html: t.outerHTML
    };
    if (window.getComputedStyle(document.body).webkitClipPath) {
        var a = r.distance
          , n = r.width
          , e = r.height;
        var o = "";
        for (var i = 0; i < n; i += a) {
            for (var h = 0; h < e; h += a) {
                var d = [i, h]
                  , u = [i, h + a]
                  , l = [i + a, h + a]
                  , v = [i + a, h];
                var c = [i + a / 2, h + a / 2];
                var m = [[d, c, v], [d, u, c], [c, u, l], [v, c, l]];
                m.forEach(function(t, a) {
                    var n = t.map(function(t) {
                        return t.map(function(t) {
                            return t + "px"
                        }).join(" ")
                    }).join();
                    var e = "-webkit-clip-path: polygon(" + n + ");";
                    var i = Math.random();
                    var h = i < .5 ? -1 : 1;
                    var d = [[h * (200 + Math.round(500 * i)), -1 * (500 + Math.round(300 * i))], [h * (100 + Math.round(500 * i)), -1 * (400 + Math.round(600 * i))], [h * (50 + Math.round(500 * i)), -1 * (500 + Math.round(300 * i))], [h * (100 + Math.round(400 * i)), 1 * (500 + Math.round(700 * i))]];
                    var u = [600 * (.5 - Math.random()), 600 * (.5 - Math.random())];
                    var l = "translate(" + u.map(function(t) {
                        return t + "px"
                    }).join() + ") rotate(" + Math.round(h * 360 * Math.random()) + "deg)";
                    var v = "-webkit-transform:" + l + ";transform:" + l + ";";
                    o = o + r.html.replace('">', '" style="' + e + v + '">')
                })
            }
        }
        t.parentNode.innerHTML = r.html + o;
        return true
    } else {
        t.className += " no-clipath";
        return false
    }
};