
var fullPageExist;

function setFullpage(overflow){
  if(fullPageExist){
        console.log('destroyed!')
    $.fn.fullpage.destroy('all');

  }

  $('#fullpage').fullpage({

       responsiveWidth: 768,
       responsiveHeight: 0,
       showActiveTooltip: true,
       scrollingSpeed: 800,
       navigation: true,
       navigationPosition: 'right',
       scrollOverflow: overflow,
       keyboardScrolling: true,
       css3: false,
       anchors: ['home', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'],

        afterLoad: function(anchorLink, index){
            var loadedSlide = $(this);
            var videoAll = $('.video-device')

            //first slide of the second section
            if(anchorLink == 'home'){
                videoAll.fadeOut().get(0).currentTime = 0;
                $('#v1').fadeIn();
                $('#v1').get(0).play();
            } else if(anchorLink == 'one'){
                videoAll.fadeOut().get(0).currentTime = 0;
                $('#v2').fadeIn();
                $('#v2').get(0).play();
            } else if(anchorLink == 'two'){
              videoAll.fadeOut().get(0).currentTime = 0;
              $('#v3').fadeIn();
              $('#v3').get(0).play();

            } else if(anchorLink == 'three'){
              videoAll.fadeOut().get(0).currentTime = 0;
              $('#v4').fadeIn();
              $('#v4').get(0).play();

            } else if(anchorLink == 'four'){
              videoAll.fadeOut().get(0).currentTime = 0;
              $('#v5').fadeIn();
              $('#v5').get(0).play();

            } else if(anchorLink == 'five'){
              videoAll.fadeOut().get(0).currentTime = 0;
              $('#v6').fadeIn();
              $('#v6').get(0).play();

            } else if(anchorLink == 'six'){
              videoAll.fadeOut().get(0).currentTime = 0;
              $('#v1').fadeIn();
              $('#v1').get(0).play();

            }


        }

  });
  fullPageExist = true;

  $('.letlife-logo-fix').click(function(e){
    e.preventDefault();
    console.log('scroll')
    $.fn.fullpage.moveTo(1);
  })

  $('#backtotop').click(function(e){
    e.preventDefault();
    console.log('scroll')
    $.fn.fullpage.moveTo(1);
  })

}

enquire.register("screen and (max-width:768px)", {


    match : function() {
        setFullpage(false);
        console.log('mobile');
        $("#backtotop").click(function() {
           $("html, body").animate({ scrollTop: 0 }, "slow");
           return false;
         });
    }




});

enquire.register("screen and (min-width:769px)", {


    match : function() {

        setFullpage(true);
        console.log('web');

    }


});


enquire.register("screen and (max-width:1100px)", {


    match : function() {
        $('#vm').find("#mobile-source").attr("src", 'video/m.mp4');
    }




});

enquire.register("screen and (min-width:1100px)", {


    match : function() {
      for (i = 0; i < 7; i++) {
          $('#v'+i).find("#web-video-"+i).attr("src", 'video/0'+i+'.mp4');
      }
    }




});




/**** MOBILEVID ***/

  function mobileVideo(){
    // $('#video').click(function(){
    //   console.log('click')
    //   $('#video').replaceWith('<video><source src="video/m.mp4" type="video/mp4"></video>')
    // })
  }

$('.scene').parallax();

function callbackFunction (resp) {
    if (resp.result === 'success') {
        $('#mc-embedded-subscribe').addClass('successo-iscrizione');
        $('#mc-embedded-subscribe').val('Iscritto!');
        $('#successo-checkmail').fadeTo("slow", 1 );
    }else{
      $('#mc-embedded-subscribe').addClass('fallimento-iscrizione');
      $('#successo-checkmail').fadeTo("slow", 0 );

    }
}


$(document).ready(function() {


    $(window).lazyLoadXT();

    $('#aprimodal').click(function(){
      $('#vm').get(0).play();
    });

    $('#closemodal').click(function(e){
      e.preventDefault();
      $('#vm').get(0).pause();
      $('#vm').get(0).currentTime = 0;
    });

    $('#mc-embedded-subscribe-form').ajaxChimp({
        url: 'http://life.us10.list-manage.com/subscribe/post?u=b4b4b2998e0738bb9096c0e4c&amp;id=2fd3acd1f1',
        callback: callbackFunction
    });



    // $('.ios').click(function(){
    //   location.assign("/ios_download.html");
    // })
    // $('.android').click(function(){
    //   location.assign("/android_download.html");
    // });

    (function (i, s, o, g, r, a, m) {
              i['GoogleAnalyticsObject'] = r;
              i[r] = i[r] || function () {
                  (i[r].q = i[r].q || []).push(arguments)
              }, i[r].l = 1 * new Date();
              a = s.createElement(o),
              m = s.getElementsByTagName(o)[0];
              a.async = 1;
              a.src = g;
              m.parentNode.insertBefore(a, m)
          })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

          ga('create', 'UA-52710742-3', 'auto');
          ga('send', 'pageview');

});
